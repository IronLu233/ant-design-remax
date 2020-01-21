import React, { FC } from "react";
import { View, Text, Image } from "@/components/universe";
import Grid from "@/components/Grid";

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png"
}));

const GridDemo: FC = () => {
  return (
    <View>
      <View>
        <View className="sub-title">Always square grid item</View>
        <Grid data={data} />
      </View>
      <View className="sub-title">Grid item adjust accroiding to img size</View>
      <Grid data={data} square={false} className="not-square-grid" />
      <View className="sub-title">ColumnNum=3 </View>
      <Grid data={data} columnNum={3} />

      <View className="sub-title">No border</View>
      <Grid data={data} hasLine={false} />

      <View className="sub-title">Custom content</View>
      <Grid
        data={data1}
        columnNum={3}
        renderItem={dataItem => (
          <View style={{ padding: "12.5px" }}>
            <Image
              src={dataItem!.icon}
              style={{ width: "75px", height: "75px" }}
            />
            <View
              style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}
            >
              <Text>I am title..</Text>
            </View>
          </View>
        )}
      />

      <View className="sub-title">Custom GridCell Style</View>
      <Grid
        data={data1}
        columnNum={3}
        itemStyle={{ height: "150px", background: "rgba(0,0,0,.05)" }}
      />
    </View>
  );
};

export default GridDemo;
