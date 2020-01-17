import React, { useEffect, useState } from "react";
import { useSetState } from "react-use";
import WingBlank from "@/components/WingBlank";
import Carousel from "@/components/Carousel";
import Basic from "./Basic";
import DynamicChild from "./DynamicChild";
import Vertical from "./Vertical";
import Lottery from "./Lottery";
import { Image, View } from "@/components/universe";
import WhiteSpace from "@/components/WhiteSpace";
import "./style.less";

const CarouselDemo: React.FC = () => {
  return (
    <View>
      <Basic />
      <WhiteSpace />
      <DynamicChild />
      <WhiteSpace />
      <Vertical />
      <WhiteSpace />
      <Lottery />
    </View>
  );
};
export default CarouselDemo;
