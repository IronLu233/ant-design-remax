import React from "react";

export interface ListPropsType {
  renderHeader?: (() => React.ReactNode) | React.ReactNode;
  renderFooter?: (() => React.ReactNode) | React.ReactNode;
}

export interface ListItemPropsType {
  align?: "top" | "middle" | "bottom";
  disabled?: boolean;
  multipleLine?: boolean;
  thumb?: React.ReactNode | null;
  extra?: React.ReactNode;
  arrow?: "horizontal" | "down" | "up" | "empty" | "";
  wrap?: boolean;
  error?: boolean;
}

export interface BriefProps {
  wrap?: boolean;
  style?: React.CSSProperties;
}
