import React, { useEffect, useState } from "react";
import WingBlank from "@/components/WingBlank";
import Carousel from "@/components/Carousel";
import { Image, View } from "@/components/universe";
import WhiteSpace from "@/components/WhiteSpace";
import { Button } from "remax/alipay";

const DynamicChild: React.FC = () => {
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
      <View className="demoTitle">子元素数量动态变化</View>
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={() => {
            setData([...data, "AiyWuByWklrrUDlFignR"]);
          }}
        >
          Click me to add child
        </Button>
        <Carousel
          autoplay={false}
          infinite
          onChange={index => console.log("slide to", index)}
        >
          {data.map((val, index) => (
            <Image
              key={val + index}
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              style={{ width: "100%", verticalAlign: "top" }}
            />
          ))}
        </Carousel>
      </WingBlank>
    </View>
  );
};
export default DynamicChild;
