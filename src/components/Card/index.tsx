import React, { FC } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import classnames from "@/utils/classnames";
import { CardPropsType } from "./PropsType";
import { View } from "../universe";
import { ViewProps } from "remax/alipay";
import "./style";

export interface CardProps extends CardPropsType, ViewProps {
  prefixCls?: string;
}

type SubComponent = {
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
  Body: typeof CardBody;
};

const Card: FC<CardProps> = ({ prefixCls, full, className, ...restProps }) => {
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-full`]: full
  });

  return <View className={wrapCls} {...restProps}></View>;
};

((Card as any) as SubComponent).Body = CardBody;
((Card as any) as SubComponent).Header = CardHeader;
((Card as any) as SubComponent).Footer = CardFooter;

Card.defaultProps = {
  prefixCls: "ram-card",
  full: false
};

export default Card as FC<CardProps> & SubComponent;
