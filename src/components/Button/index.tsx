import React, { FC, useCallback } from "react";
import classnames from "@/utils/classnames";
import Icon from "../Icon";
import { ButtonPropsType } from "./PropsType";
import TouchFeedback from "../TouchFeedback";
import { Button as NativeButton, Text } from "../universe";
import "./style";

export interface ButtonProps extends ButtonPropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  icon?: React.ReactNode;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  style?: React.CSSProperties;
  onTap?: (e: any) => any;
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str: any) {
  return typeof str === "string";
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split("").join(" ")
    );
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split("").join(" ");
    }
    return <Text>{child}</Text>;
  }
  return child;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  prefixCls,
  type,
  size,
  inline,
  disabled,
  icon,
  loading,
  activeClassName,
  onTap,
  style,
  ...restProps
}) => {
  const iconType: any = loading ? "loading" : icon;
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-primary`]: type === "primary",
    [`${prefixCls}-ghost`]: type === "ghost",
    [`${prefixCls}-warning`]: type === "warning",
    [`${prefixCls}-small`]: size === "small",
    [`${prefixCls}-inline`]: inline,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-icon`]: !!iconType
  });

  const kids = React.Children.map(children, insertSpace);

  let iconEl;
  if (typeof iconType === "string") {
    iconEl = (
      <Icon
        aria-hidden="true"
        type={iconType}
        size={size === "small" ? "xxs" : "md"}
        className={`${prefixCls}-icon`}
      />
    );
  } else if (iconType) {
    const rawCls = iconType.props && iconType.props.className;
    const cls = classnames(
      "ram-icon",
      `${prefixCls}-icon`,
      size === "small" ? "ram-icon-xxs" : "ram-icon-md"
    );
    iconEl = React.cloneElement(iconType, {
      className: rawCls ? `${rawCls} ${cls}` : cls
    });
  }

  const handleClick = useCallback(
    (e: any) => {
      disabled && onTap?.(e);
    },
    [onTap]
  );

  return (
    <TouchFeedback
      activeClassName={
        disabled ? undefined : activeClassName || `${prefixCls}-active`
      }
      disabled={disabled}
    >
      <NativeButton
        disabled={disabled}
        style={style}
        aria-disabled={disabled}
        className={wrapCls}
        plain
        {...restProps}
        onClick={handleClick}
      >
        {iconEl}
        {kids}
      </NativeButton>
    </TouchFeedback>
  );
};

Button.defaultProps = {
  prefixCls: "ram-button",
  size: "large",
  inline: false,
  disabled: false,
  loading: false,
  activeStyle: {}
};

export default Button;
