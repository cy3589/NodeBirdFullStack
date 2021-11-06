import React from "react";
import { List, Button, Card } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { UNFOLLOW_REQUEST } from "../reducers/user";

// import head from "next/head";
// import { useMemo } from "react";
// const style_List = useMemo(
//   () => ({ margin: "10px 0", textAlign: "center" }),
//   []
// );
const FollowingList = ({ header, data }) => {
  const dispatch = useDispatch();
  const onCencel = (id) => () => {
    dispatch({ type: UNFOLLOW_REQUEST, data: id });
  };

  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card
            actions={[
              <Button block type="danger" onClick={onCencel(item.id)}>
                Unfollow
              </Button>,
            ]}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowingList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
};
export default FollowingList;
