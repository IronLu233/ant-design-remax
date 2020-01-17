import React, { FC } from "react";
import { FlexItemPropsType } from "./PropsType";
import classnames from "@/utils/classnames";
import { View } from "../universe";
import { ViewProps } from "remax/alipay";

export interface FlexItemProps extends FlexItemPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FlexItem: FC<FlexItemProps> = ({
  children,
  className,
  prefixCls,
  ...restProps
}) => {
  const wrapCls = classnames(`${prefixCls}-item`, className);
  return (
    <View className={wrapCls} {...restProps}>
      {children}
    </View>
  );
};

FlexItem.defaultProps = {
  prefixCls: "ram-flexbox"
};

export default FlexItem;
