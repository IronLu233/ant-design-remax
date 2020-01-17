import React, { FC } from "react";
import { FlexPropsType as BasePropsType } from "./PropsType";
import classnames from "@/utils/classnames";
import { View } from "../universe";
import { ViewProps } from "remax/alipay";

export interface FlexProps extends BasePropsType, ViewProps {
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch";
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
}

const Flex: FC<FlexProps> = ({
  direction,
  wrap,
  justify,
  align,
  alignContent,
  className,
  children,
  prefixCls,
  style,
  ...restProps
}) => {
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-dir-row`]: direction === "row",
    [`${prefixCls}-dir-row-reverse`]: direction === "row-reverse",
    [`${prefixCls}-dir-column`]: direction === "column",
    [`${prefixCls}-dir-column-reverse`]: direction === "column-reverse",

    [`${prefixCls}-nowrap`]: wrap === "nowrap",
    [`${prefixCls}-wrap`]: wrap === "wrap",
    [`${prefixCls}-wrap-reverse`]: wrap === "wrap-reverse",

    [`${prefixCls}-justify-start`]: justify === "start",
    [`${prefixCls}-justify-end`]: justify === "end",
    [`${prefixCls}-justify-center`]: justify === "center",
    [`${prefixCls}-justify-between`]: justify === "between",
    [`${prefixCls}-justify-around`]: justify === "around",

    [`${prefixCls}-align-start`]: align === "start",
    [`${prefixCls}-align-center`]: align === "center",
    [`${prefixCls}-align-end`]: align === "end",
    [`${prefixCls}-align-baseline`]: align === "baseline",
    [`${prefixCls}-align-stretch`]: align === "stretch",

    [`${prefixCls}-align-content-start`]: alignContent === "start",
    [`${prefixCls}-align-content-end`]: alignContent === "end",
    [`${prefixCls}-align-content-center`]: alignContent === "center",
    [`${prefixCls}-align-content-between`]: alignContent === "between",
    [`${prefixCls}-align-content-around`]: alignContent === "around",
    [`${prefixCls}-align-content-stretch`]: alignContent === "stretch"
  });

  return (
    <View className={wrapCls} style={style} {...restProps}>
      {children}
    </View>
  );
};

Flex.defaultProps = {
  prefixCls: "ram-flexbox",
  align: "center"
};

export default Flex;
