import React, { FC } from "react";
import { Text } from "@/components/universe";
import classnames from "@/utils/classnames";

import "./style";
import { TextProps } from "remax/alipay";

export interface IconProps extends TextProps {
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  type: string;
  onTap?: (e: any) => any;
}

const Icon: FC<IconProps> = ({ size, className, type, ...restProps }) => {
  const cls = classnames(
    className,
    `ram-icon`,
    `ram-icon-${type}`,
    `ram-icon-${size}`
  );
  return <Text className={cls} {...restProps} />;
};

Icon.defaultProps = {
  size: "md"
};

export default Icon;
