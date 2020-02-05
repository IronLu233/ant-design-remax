import React, { FC } from "react";
import List from "@/components/List";
import Button from "@/components/Button";

const ComplexButtonDemo: FC = () => (
  <List style={{ margin: "10rpx 0", backgroundColor: "white" }}>
    <List.Item
      extra={
        <Button type="ghost" size="small" inline>
          small
        </Button>
      }
      multipleLine
    >
      Regional manager
      <List.Item.Brief>
        Can be collected, refund, discount management, view data and other
        operations
      </List.Item.Brief>
    </List.Item>
    <List.Item
      extra={
        <Button type="primary" size="small" inline>
          small
        </Button>
      }
      multipleLine
    >
      Regional manager
      <List.Item.Brief>
        Can be collected, refund, discount management, view data and other
        operations
      </List.Item.Brief>
    </List.Item>
  </List>
);

export default ComplexButtonDemo;
