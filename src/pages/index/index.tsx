import * as React from "react";
import { useList } from "react-use";
import navigateTo from "@/API/navigateTo";
import { View } from "@/components/universe";
import config from "./config";

import List from "../../components/List";
import Item from "@/components/List/ListItem";
import Icon from "@/components/Icon";
export default () => {
  const [cateState, { updateAt }] = useList(
    new Array<boolean>(config.length).fill(false)
  );

  return (
    <View className="bg-gray">
      <View className="ram-demo-page">
        <View className="ram-demo-hd">
          <View className="ram-demo-title">Ant Design Mobile ❤️ Remax</View>
          <View className="ram-demo-subtitle">Remax 版支付宝移动端组件库</View>
        </View>
        <View className="ram-demo-bd">
          {config.map((cate, index) => (
            <List
              onTap={() => updateAt(index, !cateState[index])}
              key={`${cate.name}-${index}`}
              className={cateState[index] ? "category-open" : "category-closed"}
              renderHeader={() => (
                <View className="ram-demo-category">
                  <View className="ram-demo-category-name">{`${cate.ChineseName} ${cate.name}`}</View>
                  <View className="ram-demo-category-arrow">
                    <Icon type="down" />
                  </View>
                </View>
              )}
            >
              {cate.components.map(item => (
                <Item
                  key={`${cate.name}-${item.name}`}
                  arrow="horizontal"
                  onTap={e => {
                    navigateTo({
                      url: item.path
                    });
                  }}
                >
                  <View>
                    {`${item.name} `}
                    {`${item.ChineseName}`}
                  </View>
                </Item>
              ))}
            </List>
          ))}
        </View>
      </View>
    </View>
  );
};
