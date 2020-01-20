import { ReactNode, CSSProperties } from "react";

export interface DialogPropTypes {
  timeout: number;
  className?: string;
  style?: CSSProperties;
  mask?: boolean;
  children?: any;
  afterClose?: () => void;
  onClose?: () => void;
  closable?: boolean;
  visible?: boolean;
  title?: ReactNode;
  footer?: ReactNode;
  transitionName?: string;
  maskTransitionName?: string;
  animation?: any;
  maskAnimation?: any;
  wrapStyle?: {};
  bodyStyle?: {};
  maskStyle?: {};
  prefixCls?: string;
  wrapClassName?: string;
  onAnimateLeave?: () => void;
  zIndex?: number;
  maskProps?: any;
  wrapProps?: any;
}
