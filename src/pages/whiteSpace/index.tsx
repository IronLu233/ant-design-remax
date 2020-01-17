import React, { FC } from "react";
import { View } from "@/components/universe";
import WhiteSpace from "@/components/WhiteSpace";

import "./index.less";

const PlaceHolder = ({ className = "", ...restProps }) => (
  <View className={`${className} placeholder`} {...restProps}>
    Block
  </View>
);

const WhiteSpaceDemo: FC = () => {
  return (
    <View className="bg-white">
      <WhiteSpace size="xs" />
      <PlaceHolder />

      <WhiteSpace size="sm" />
      <PlaceHolder />

      <WhiteSpace />
      <PlaceHolder />

      <WhiteSpace size="lg" />
      <PlaceHolder />

      <WhiteSpace size="xl" />
      <PlaceHolder />
    </View>
  );
};

export default WhiteSpaceDemo;
