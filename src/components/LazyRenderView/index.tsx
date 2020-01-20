import React, { FC } from "react";
import { View, ScrollView } from "../universe";
import { ViewProps } from "remax/alipay";

export interface ILazyRenderBoxPropTypes extends ViewProps {
  className?: string;
  visible?: boolean;
  hiddenClassName?: string;
  role?: string;
  style?: {};
}

const LazyRenderView: FC<ILazyRenderBoxPropTypes> = props => {
  let { className, hiddenClassName, visible, ...restProps } = props;
  if (!!hiddenClassName && !visible) {
    className += ` ${hiddenClassName}`;
  }
  return <View className={className} {...restProps} />;
};

export default LazyRenderView;
