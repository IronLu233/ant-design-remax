import * as React from "react";
export interface ModalPropsType<T> {
  title?: React.ReactNode;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: Action<T>[];
  onClose?: () => any;
  transparent?: boolean;
  popup?: boolean;
  animated?: boolean;
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  operation?: boolean;
  afterClose?: () => any;
}

export interface Action<T> {
  text: string;
  onTap?: (...args: any[]) => void | Promise<any>;
  style?: T | string;
}

export type Callback = (valueOrLogin: string, password?: string) => void;
export type CallbackOrActions<T> = Callback | Action<T>[];
