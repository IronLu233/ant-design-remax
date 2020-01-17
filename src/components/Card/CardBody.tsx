import React from "react";
import { ViewProps } from "remax/alipay";
import { View } from "../universe";
import classNames from "@/utils/classnames";

export interface CardBodyProps extends ViewProps {
  prefixCls?: string;
}

const CardBody: React.FC<CardBodyProps> = ({
  prefixCls,
  className,
  ...restProps
}) => {
  const wrapCls = classNames(`${prefixCls}-body`, className);
  return <View className={wrapCls} {...restProps} />;
};

CardBody.defaultProps = {
  prefixCls: "ram-card"
};
export default CardBody;
