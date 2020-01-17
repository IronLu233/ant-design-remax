import React, { FC } from "react";
import { View, Text } from "@/components/universe";
import "./index.less";
import List, { Item as ListItem } from "@/components/List";
import Badge from "@/components/Badge";
import { useReady } from "remax";
import { setNavigationBar } from "remax/alipay";

const BadgeDemo: FC = () => {
  useReady(() => {
    setNavigationBar({ title: "Badge 徽标" });
  });

  return (
    <List className="bg-gray">
      <ListItem extra="extra content" arrow="horizontal">
        <Badge dot>
          <Text
            style={{
              width: "52rpx",
              height: "52rpx",
              background: "#ddd",
              display: "inline-block"
            }}
          />
        </Badge>
        <Text style={{ marginLeft: "24rpx" }}>Dot badge</Text>
      </ListItem>
      <ListItem
        thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
        extra={<Badge text={77} overflowCount={55} />}
        arrow="horizontal"
      >
        Content
      </ListItem>
      <ListItem>
        <Badge text={"促"} corner>
          <View className="corner-badge">Use corner prop</View>
        </Badge>
      </ListItem>
      <ListItem className="special-badge" extra={<Badge text={"促"} />}>
        Custom corner
      </ListItem>
      <ListItem extra="extra" arrow="horizontal">
        <Badge text={0} style={{ marginLeft: "24rpx" }}>
          Text number 0
        </Badge>
        <Badge text={"new"} style={{ marginLeft: "24rpx" }} />
      </ListItem>
      <ListItem>
        Marketing:
        <Badge text="减" hot style={{ marginLeft: "24rpx" }} />
        <Badge text="惠" hot style={{ marginLeft: "24rpx" }} />
        <Badge text="免" hot style={{ marginLeft: "24rpx" }} />
        <Badge text="反" hot style={{ marginLeft: "24rpx" }} />
        <Badge text="HOT" hot style={{ marginLeft: "24rpx" }} />
      </ListItem>
      <ListItem>
        Customize
        <Badge
          text="券"
          style={{
            marginLeft: "24rpx",
            padding: "0 6rpx",
            backgroundColor: "#f19736",
            borderRadius: "4rpx"
          }}
        />
        <Badge
          text="NEW"
          style={{
            marginLeft: "24rpx",
            padding: "0 6rpx",
            backgroundColor: "#21b68a",
            borderRadius: "4rpx"
          }}
        />
        <Badge
          text="自动缴费"
          style={{
            marginLeft: "24rpx",
            padding: "0 6rpx",
            backgroundColor: "#fff",
            borderRadius: "4rpx",
            color: "#f19736",
            border: "2rpx solid #f19736"
          }}
        />
      </ListItem>
    </List>
  );
};

export default BadgeDemo;
