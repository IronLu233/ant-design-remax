import React, { FC, ReactNode, CSSProperties } from "react";
import Animate from "../Animate";
import classNames from "@/utils/classnames";
import { View } from "../universe";
import "./style/index.less";
import { ModalPropsType } from "./PropsType";
import Dialog from "../Dialog";
import TouchFeedback from "../TouchFeedback";

export interface ModalProps extends ModalPropsType<React.CSSProperties> {
  prefixCls?: string;
  transitionName?: string;
  maskTransitionName?: string;
  className?: string;
  wrapClassName?: string;
  wrapProps?: Partial<React.HTMLProps<HTMLDivElement>>;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  onShow?: () => any;
}

interface FooterButtonProps {
  prefixCls?: string;
  text: string;
  onTap?: (...args: any[]) => void | Promise<any>;
  style?: CSSProperties;
}

const FooterButton: FC<FooterButtonProps> = ({
  text,
  prefixCls,
  onTap,
  style
}) => {
  return (
    <TouchFeedback activeClassName={`${prefixCls}-button-active`}>
      <View onTap={onTap} className={`${prefixCls}-button`} style={style}>
        {text}
      </View>
    </TouchFeedback>
  );
};

const Modal: FC<ModalProps> = ({
  prefixCls,
  className,
  wrapClassName,
  transitionName,
  maskTransitionName,
  style,
  footer = [],
  operation,
  animated,
  transparent,
  popup,
  animationType,
  visible,
  children,
  ...restProps
}) => {
  const btnGroupClass = classNames(
    `${prefixCls}-button-group-${
      footer.length === 2 && !operation ? "h" : "v"
    }`,
    `${prefixCls}-button-group-${operation ? "operation" : "normal"}`
  );
  const footerDom = footer.length ? (
    <View className={btnGroupClass}>
      {footer.map((button, i) => (
        // tslint:disable-next-line:jsx-no-multiline-js
        <FooterButton prefixCls={prefixCls} {...button} key={button.text} />
      ))}
    </View>
  ) : null;

  let transName;
  let maskTransName;
  if (animated) {
    // tslint:disable-next-line:prefer-conditional-expression
    if (transparent) {
      transName = maskTransName = "ram-fade";
    } else {
      transName = maskTransName = "ram-slide-up";
    }
    if (popup) {
      transName =
        animationType === "slide-up" ? "ram-slide-up" : "ram-slide-down";
      maskTransName = "ram-fade";
    }
  }

  const wrapCls = classNames(wrapClassName, {
    [`${prefixCls}-wrap-popup`]: popup
  });
  const cls = classNames(className, {
    [`${prefixCls}-transparent`]: transparent,
    [`${prefixCls}-popup`]: popup,
    [`${prefixCls}-popup-${animationType}`]: popup && animationType
  });

  return (
    <Dialog
      {...restProps}
      timeout={200}
      prefixCls={prefixCls}
      className={cls}
      wrapClassName={wrapCls}
      transitionName={transitionName || transName}
      maskTransitionName={maskTransitionName || maskTransName}
      style={style}
      visible={visible}
      footer={footerDom}
    >
      {children}
    </Dialog>
  );
};

Modal.defaultProps = {
  prefixCls: "ram-modal",
  popup: false,
  transparent: false,
  animationType: "slide-down",
  animated: true,
  style: {},
  onShow() {},
  footer: [],
  closable: false,
  operation: false
};

export default Modal;
