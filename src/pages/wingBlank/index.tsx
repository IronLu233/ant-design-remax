import React, { FC } from "react";
import WingBlank from "@/components/WingBlank";
import { View } from "@/components/universe";
import WhiteSpace from "@/components/WhiteSpace";
import "./index.less";

const PlaceHolder = ({ className = "", ...restProps }) => (
  <View className={`${className} placeholder`} {...restProps}>
    Block
  </View>
);

const WingBlankDemo: FC = () => {
  return (
    <View style={{ padding: "15px 0" }} className="bg-white">
      <WingBlank>
        <PlaceHolder />
      </WingBlank>

      <WhiteSpace size="lg" />
      <WingBlank size="md">
        <PlaceHolder />
      </WingBlank>

      <WhiteSpace size="lg" />
      <WingBlank size="sm">
        <PlaceHolder />
      </WingBlank>
    </View>
  );
};

export default WingBlankDemo;
