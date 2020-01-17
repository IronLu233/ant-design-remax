import React, { FC } from "react";
import classnames from "@/utils/classnames";
import { WhiteSpacePropsType } from "./PropsType";
import { View } from "../universe";
import { ViewProps } from "remax/alipay";

import "./style";

export interface WhiteSpaceProps extends WhiteSpacePropsType, ViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WhiteSpace: FC<WhiteSpaceProps> = ({
  prefixCls,
  size,
  className,
  ...restProps
}) => {
  const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);
  return <View className={wrapCls} {...restProps} />;
};

WhiteSpace.defaultProps = {
  prefixCls: "ram-whitespace",
  size: "md"
};
export default WhiteSpace;
