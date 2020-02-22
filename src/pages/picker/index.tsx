import React, { FC } from "react";
import { View } from "@/components/universe";
import Picker from "@/components/Picker";

const PickerDemo: FC = () => {
  return (
    <View>
      <Picker
        defaultValue={["浙江省"]}
        options={[["浙江省", "江苏省", "上海市"]]}
      >
        233
      </Picker>
    </View>
  );
};

export default PickerDemo;
