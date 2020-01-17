import React, { FC } from "react";
import { DataItem, GridPropsType } from "./PropsType";

export interface GridProps extends GridPropsType {
  prefixCls?: string;
  className?: string;
  square?: boolean;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  itemStyle?: React.CSSProperties;
}
