import React, { FC } from "react";
import { View } from "../universe";
import { BriefProps as BriefBasePropsType } from "./PropsType";

export interface BriefProps extends BriefBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

const Brief: FC<BriefProps> = ({ children, style }) => {
  return (
    <View className="ram-list-brief" style={style}>
      {children}
    </View>
  );
};

export default Brief;
