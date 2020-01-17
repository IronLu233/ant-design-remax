import React, { useEffect, useState } from "react";
import WingBlank from "@/components/WingBlank";
import Carousel from "@/components/Carousel";
import { View } from "@/components/universe";

const Vertical: React.FC = () => {
  return (
    <WingBlank>
      <View className="demoTitle">垂直</View>
      <View style={{ height: "72rpx" }}>
        <Carousel
          className="my-carousel"
          vertical
          dots={false}
          autoplay
          infinite
        >
          <View className="v-item">carousel 1</View>
          <View className="v-item">carousel 2</View>
          <View className="v-item">carousel 3</View>
        </Carousel>
      </View>
    </WingBlank>
  );
};
export default Vertical;
