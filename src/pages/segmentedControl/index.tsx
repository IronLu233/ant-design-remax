import React, { useCallback } from "react";
import WingBlank from "@/components/WingBlank";
import SegmentedControl from "@/components/SegmentedControl";
import { View } from "@/components/universe";
import "./index.less";
import { useMount } from "react-use";
import { setNavigationBar } from "remax/alipay";

const SegmentedControlDemo: React.FC = () => {
  const onChange = useCallback(e => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }, []);
  const onValueChange = useCallback((value: string) => {
    console.log(value);
  }, []);

  useMount(() => {
    setNavigationBar({ title: "SegmentedControl 分段器" });
  });

  return (
    <WingBlank size="lg" className="sc-example bg-gray">
      <View className="sub-title">Simplest</View>
      <SegmentedControl values={["Segment1", "Segment2"]} />

      <View className="sub-title">Disabled</View>
      <SegmentedControl values={["Segment1", "Segment2"]} disabled />

      <View className="sub-title">SelectedIndex</View>
      <SegmentedControl
        selectedIndex={1}
        values={["Segment1", "Segment2", "Segment3"]}
      />

      <View className="sub-title">TintColor</View>
      <SegmentedControl
        values={["Segment1", "Segment2", "Segment3"]}
        tintColor={"#ff0000"}
        style={{ height: "80rpx", width: "500prx" }}
      />

      <View className="sub-title">onChange/onValueChange</View>
      <SegmentedControl
        values={["Segment1", "Segment2", "Segment3"]}
        onChange={onChange}
        onValueChange={onValueChange}
      />
    </WingBlank>
  );
};
export default SegmentedControlDemo;
