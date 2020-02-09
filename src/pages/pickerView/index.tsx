import React, { FC, useState, useCallback } from "react";
import { View } from "@/components/universe";
import PickerView from "@/components/PickerView";
import WhiteSpace from "@/components/WhiteSpace";

const pickerOptions = [
  ["风", "林", "火", "山"],
  ["春", "夏", "秋", "冬"],
  ["🐸", "🐻"]
];

const regions = ["杭州市", "台州市", "温州市", "绍兴市"];

const cityMap: Record<string, string[]> = {
  杭州市: ["上城区", "下城区", "西湖区", "余杭区"],
  台州市: ["黄岩区", "路桥区"],
  温州市: ["瓯海区"],
  绍兴市: ["越城区", "柯桥区"]
};

const PickerViewDemo: FC = () => {
  const [regionVal, setRegionVal] = useState(["温州市", "瓯海区"]);
  const onRegionChange = useCallback((nextVal: string[]) => {
    setRegionVal(prev => {
      if (prev[0] !== nextVal[0]) {
        return [nextVal[0], cityMap[nextVal[0]][0]];
      }

      return nextVal;
    });
  }, []);

  return (
    <View className="bg-gray">
      <View className="demoTitle">基本使用</View>
      <PickerView
        defaultValue={["风", "夏", "🐸"]}
        onChange={(val: string[]) => console.log(val)}
        options={pickerOptions}
      />

      <View className="demoTitle">级联</View>
      <PickerView
        value={regionVal}
        onChange={onRegionChange}
        options={[regions, cityMap[regionVal[0]]]}
      />
    </View>
  );
};

export default PickerViewDemo;
