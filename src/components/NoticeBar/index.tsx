import React, { FC, ReactNode } from "react";

export interface NoticeBarProps {
  mode?: "closable" | "link";
  icon?: ReactNode;
  onClick: () => any;
  marqueeProps: "";
}
