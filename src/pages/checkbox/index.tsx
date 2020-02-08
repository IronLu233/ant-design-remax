import React, { FC, useState } from "react";
import Checkbox from "@/components/Checkbox";
import { View } from "@/components/universe";
import List from "@/components/List";
import setNavigationBar from "@/API/setNavigationBar";
import WingBlank from "@/components/WingBlank";
const data = [
  { value: "Ph.D", label: "Ph.D." },
  { value: "Bachelor", label: "Bachelor" },
  { value: "College diploma", label: "College diploma", disabled: true }
];

const { CheckboxItem, Group: CheckboxGroup } = Checkbox;

const CheckboxDemo: FC = () => {
  const [groupChecked, setGroupChecked] = useState<string[]>([]);
  setNavigationBar({
    title: "Checkbox"
  });
  return (
    <View className="bg-gray">
      <View className="demoTitle">基本使用</View>
      <View>
        <Checkbox>Checkbox</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>
        <Checkbox defaultChecked>Default Checked</Checkbox>
        <Checkbox checked>Controlled</Checkbox>
      </View>
      <List renderHeader={() => "CheckboxItem demo"}>
        {data.map(i => (
          <CheckboxItem
            key={i.value}
            onClick={() => console.log("you click" + i.value)}
          >
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked>
          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>
      <View className="demoTitle">Use Group</View>
      <CheckboxGroup
        onChange={setGroupChecked}
        value={groupChecked}
        options={data}
      ></CheckboxGroup>
      <WingBlank style={{ marginTop: "16rpx" }}>
        您选择了：{groupChecked.join("，")}
      </WingBlank>
    </View>
  );
};

export default CheckboxDemo;
