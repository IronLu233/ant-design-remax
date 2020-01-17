import React, { FC } from "react";
import { BadgePropsTypes } from "./PropsType";
import classnames from "@/utils/classnames";
import { Text } from "../universe";
import "./style";

export interface BadgeProps extends BadgePropsTypes, TextProps {
  prefixCls?: string;
  className?: string;
  hot?: boolean;
  style?: React.CSSProperties;
}

const Badge: FC<BadgeProps> = ({
  className,
  prefixCls,
  children,
  text,
  size,
  overflowCount,
  dot,
  corner,
  hot,
  ...restProps
}) => {
  overflowCount = overflowCount as number;
  text =
    typeof text === "number" && text > overflowCount
      ? `${overflowCount}+`
      : text;

  // dot mode don't need text
  if (dot) {
    text = "";
  }

  const scrollNumberCls = classnames({
    [`${prefixCls}-dot`]: dot,
    [`${prefixCls}-dot-large`]: dot && size === "large",
    [`${prefixCls}-text`]: !dot && !corner,
    [`${prefixCls}-corner`]: corner,
    [`${prefixCls}-corner-large`]: corner && size === "large"
  });

  const badgeCls = classnames(prefixCls, className, {
    [`${prefixCls}-not-a-wrapper`]: !children,
    [`${prefixCls}-corner-wrapper`]: corner,
    [`${prefixCls}-hot`]: !!hot,
    [`${prefixCls}-corner-wrapper-large`]: corner && size === "large"
  });

  return (
    <Text className={badgeCls}>
      {children}
      {(text || dot) && (
        <Text className={scrollNumberCls} {...restProps}>
          {text}
        </Text>
      )}
    </Text>
  );
};

Badge.defaultProps = {
  prefixCls: "ram-badge",
  size: "small",
  overflowCount: 99,
  dot: false,
  corner: false
};

export default Badge;
