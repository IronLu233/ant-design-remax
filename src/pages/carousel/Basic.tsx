import React, { useEffect, useState } from "react";
import { useSetState } from "react-use";
import WingBlank from "@/components/WingBlank";
import Carousel from "@/components/Carousel";
import { Image, View } from "@/components/universe";

const Basic: React.FC = () => {
  const [data, setData] = useState(["1", "2", "3"]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        "AiyWuByWklrrUDlFignR",
        "TekJlZRVCjLFexlOCuWn",
        "IJOtIlfsYdTyaDTRVrLI"
      ]);
    }, 100);
  }, []);

  return (
    <View>
      <View className="demoTitle">基本</View>
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          onChange={index => console.log("slide to", index)}
        >
          {data.map(val => (
            <Image
              key={val}
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
              }}
            />
          ))}
        </Carousel>
      </WingBlank>
    </View>
  );
};
export default Basic;
