import * as React from "react";
import { View, Image } from "@/components/universe";
import styles from "./index.module.css";
import List from "../../components/List";
import Item from "@/components/List/ListItem";
import Brief from "@/components/List/Brief";
export default () => {
  return (
    <View className="bg-gray">
      <View className={styles.app}>
        <View className={styles.header}>
          <List renderHeader={"Basic Style"}>
            <Item extra={"extra content"}>Title</Item>
          </List>
        </View>
      </View>
      <List renderHeader={() => "Subtitle"} className="my-list">
        <Item arrow="horizontal" multipleLine onTap={() => {}}>
          Title <Brief>subtitle</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onTap={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
      <List
        renderHeader={() =>
          "Customized Right Side（Empty Content / Text / Image）"
        }
        className="my-list"
      >
        <Item>Title</Item>
        <Item arrow="horizontal" onTap={() => {}}>
          Title
        </Item>
        <Item extra="extra content" arrow="horizontal" onTap={() => {}}>
          Title
        </Item>
        <Item
          extra="10:30"
          align="top"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
    </View>
  );
};
