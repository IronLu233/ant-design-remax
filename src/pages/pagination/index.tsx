import React, { FC } from "react";
import Pagination from "@/components/Pagination";
import { View } from "@/components/universe";

const PaginationDemo: FC = () => {
  return (
    <View className="pagination-container">
      <View className="sub-title">Button with text</View>
      <Pagination total={5} current={1} />

      <View className="sub-title">Button with text and icon</View>
      <Pagination
        total={5}
        className="custom-pagination-with-icon"
        current={1}
      />

      <View className="sub-title">Hide number</View>
      <Pagination simple total={5} current={1} />

      <View className="sub-title">Show number only</View>
      <Pagination mode="number" total={5} current={3} />

      <View className="sub-title">Point style</View>
      <Pagination
        mode="pointer"
        total={5}
        current={2}
        style={{ marginBottom: "16px" }}
      />
    </View>
  );
};

export default PaginationDemo;
