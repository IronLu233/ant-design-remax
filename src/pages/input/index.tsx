import React, { FC } from "react";
import { View } from "@/components/universe";
import { Input } from "remax/alipay";

const InputDemo: FC = () => {
  return (
    <View className="bg-gray">
      <Input type="digit" value="123 456 789" />
    </View>
  );
};

export default InputDemo;
