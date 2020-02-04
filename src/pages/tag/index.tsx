import "./style.less";
import { FC } from "react";
import Tag from "@/components/Tag";
import { View } from "@/components/universe";

function onChange(selected: boolean) {
  console.log(`tag selected: ${selected}`);
}

const TagDemo: FC = () => {
  return (
    <View className="tag-container">
      <Tag data-seed="logId">Basic</Tag>
      <Tag selected>Selected</Tag>
      <Tag disabled>Disabled</Tag>
      <Tag onChange={onChange}>Callback</Tag>
      <Tag
        closable
        onClose={() => {
          console.log("onClose");
        }}
        afterClose={() => {
          console.log("afterClose");
        }}
      >
        Closable
      </Tag>
      <Tag small>Small and Readonly</Tag>
    </View>
  );
};

export default TagDemo;
