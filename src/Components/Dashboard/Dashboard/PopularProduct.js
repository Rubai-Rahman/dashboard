import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Button, List, Skeleton } from "antd";
const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,location,city,country,gender,email,nat,picture&noinfo`;

const PopularProduct = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        window.dispatchEvent(new Event("resize"));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button
          style={{
            border: "none",
            color: "#2D5BFF",
            alignItems: "start",
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
          }}
          onClick={onLoadMore}
        >
          Show More
        </Button>
      </div>
    ) : null;

  return (
    <>
      <div className="header">
        <h3 className="title">Most Popular Product</h3>
        <button>
          {" "}
          <FaEllipsisV />
        </button>
      </div>
      <div className="list">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              style={{ paddingLeft: 10 }}
              actions={[
                <a
                  style={{
                    letterSpacing: "-0.017em",
                    color: "#FF3030",
                    fontSize: 14,
                  }}
                  href="/hhh"
                  key="list-loadmore-more"
                >
                  {item?.location?.city}
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <button
                      style={{
                        border: 1,
                        borderStyle: "solid",
                        borderColor: "#E3E8EF",
                        width: 50,
                        height: 48,
                        borderRadius: 8,
                        overflow: "hidden",
                        fontSize: 20,
                        fontWeight: 500,
                        fontColor: "#5C5C5C",
                      }}
                    >
                      {item.name?.title}
                    </button>
                  }
                  title={
                    <a
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#181818",
                      }}
                      href="https://ant.design"
                    >
                      {item.name?.first}
                      {item.name?.last}
                    </a>
                  }
                  description={
                    <p style={{ fontSize: 14, color: "#747474" }}>
                      {item.location?.country}
                    </p>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default PopularProduct;
