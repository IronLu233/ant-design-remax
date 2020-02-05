import React, { FC } from "react";
import { View } from "@/components/universe";
import ButtonBasicDemo from "./basicDemo";
import ComplexButtonDemo from "./ComplexDemo";

const ButtonDemo: FC = () => {
  return (
    <View className="bg-gray">
      <ButtonBasicDemo />
      <View className="demoTitle" />
      <ComplexButtonDemo />
    </View>
  );
};

export default ButtonDemo;
