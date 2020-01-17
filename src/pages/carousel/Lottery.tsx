import React, { useEffect, useState } from "react";
import WingBlank from "@/components/WingBlank";
import Carousel from "@/components/Carousel";
import { View } from "@/components/universe";

const Lottery: React.FC = () => {
  return (
    <WingBlank>
      <View className="demoTitle">抽奖</View>
      <View style={{ height: "72rpx" }}>
        <Carousel
          className="my-carousel"
          vertical
          dots={false}
          autoplay
          infinite
          autoplayInterval={300}
          resetAutoplay={false}
        >
          {[
            "ring",
            "ruby",
            "iPhone",
            "iPod",
            "sorry",
            "tourism",
            "coke",
            "ticket",
            "note"
          ].map(type => (
            <View className="v-item" key={type}>
              {type}
            </View>
          ))}
        </Carousel>
      </View>
    </WingBlank>
  );
};
export default Lottery;
