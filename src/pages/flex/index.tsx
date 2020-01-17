import React, { FC } from "react";
import { View } from "@/components/universe";
import Flex, { Item as FlexItem } from "@/components/Flex";
import "./index.less";
import WhiteSpace from "@/components/WhiteSpace";

const PlaceHolder = ({ className = "", ...restProps }) => (
  <View className={`${className} placeholder`} {...restProps}>
    Block
  </View>
);

const FlexDemo: FC = () => {
  return (
    <View className="flex-container bg-white">
      <View className="sub-title">Basic</View>
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />

      <View className="sub-title">Wrap</View>
      <Flex wrap="wrap">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace size="lg" />

      <View className="sub-title">Align</View>
      <Flex justify="center">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>

      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline small" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline small" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline small" />
        <PlaceHolder className="inline" />
      </Flex>
    </View>
  );
};

export default FlexDemo;
