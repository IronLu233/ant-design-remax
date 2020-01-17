import React from "react";
import { View, Image } from "../universe";
import classNames from "@/utils/classnames";
import { CardFooterPropsType, CardHeaderPropsType } from "./PropsType";

export interface CardHeaderProps extends CardHeaderPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
}

const CardBody: React.FC<CardHeaderProps> = ({
  prefixCls,
  className,
  title,
  thumb,
  thumbStyle,
  extra,
  ...restProps
}) => {
  const wrapCls = classNames(`${prefixCls}-header`, className);
  return (
    <View className={wrapCls} {...restProps}>
      <View className={`${prefixCls}-header-content`}>
        {typeof thumb === "string" ? (
          <Image style={thumbStyle} src={thumb} />
        ) : (
          thumb
        )}
        {title}
      </View>
      {Boolean(extra) && (
        <View className={`${prefixCls}-header-extra`}>{extra}</View>
      )}
    </View>
  );
};

CardBody.defaultProps = {
  prefixCls: "ram-card",
  thumbStyle: {
    width: "64rpx",
    height: "64rpx"
  }
};
export default CardBody;
