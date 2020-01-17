import React from "react";
import { View } from "../universe";
import classNames from "@/utils/classnames";
import { CardFooterPropsType } from "./PropsType";

export interface CardFooterProps extends CardFooterPropsType {
  prefixCls?: string;
  className?: string;
}
const CardBody: React.FC<CardFooterProps> = ({
  prefixCls,
  content,
  className,
  extra,
  ...restProps
}) => {
  const wrapCls = classNames(`${prefixCls}-footer`, className);
  return (
    <View className={wrapCls} {...restProps}>
      <View className={`${prefixCls}-footer-content`}>{content}</View>
      {Boolean(extra) && (
        <View className={`${prefixCls}-footer-extra`}>{extra}</View>
      )}
    </View>
  );
};

CardBody.defaultProps = {
  prefixCls: "ram-card"
};
export default CardBody;
