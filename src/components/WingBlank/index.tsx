import classnames from "@/utils/classnames";
import React, { FC } from "react";
import { WingBlankPropsType } from "./PropsType";
import { View } from "../universe";
import "./style";

export interface WingBlankProps extends WingBlankPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WingBlank: FC<WingBlankProps> = ({
  prefixCls,
  size,
  className,
  children,
  style
}) => {
  const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

  return (
    <View className={wrapCls} style={style}>
      {children}
    </View>
  );
};

WingBlank.defaultProps = {
  prefixCls: "ram-wingblank",
  size: "lg"
};

export default WingBlank;
