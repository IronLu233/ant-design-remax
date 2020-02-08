import React, { FC } from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import classNames from "@/utils/classnames";
import pick from "lodash/pick";
import ListItem from "../List/ListItem";

export interface CheckboxItemProps {
  listPrefixCls?: string;
  prefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  checkboxProps?: CheckboxProps;

  extra?: React.ReactNode;
  onClick?: (e?: any) => void;

  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (params: any) => void;
}

const CheckboxItem: FC<CheckboxItemProps> = props => {
  const {
    listPrefixCls,
    onChange,
    disabled,
    checkboxProps,
    onClick,
    ...restProps
  } = props;
  const { prefixCls, className, children } = restProps;
  const wrapCls = classNames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled === true
  });

  const extraProps = pick(props, [
    "name",
    "defaultChecked",
    "checked",
    "onChange",
    "disabled"
  ]);

  return (
    <ListItem
      {...restProps}
      onClick={onClick}
      prefixCls={listPrefixCls}
      className={wrapCls}
      thumb={<Checkbox {...checkboxProps} {...extraProps} />}
    >
      {children}
    </ListItem>
  );
};

CheckboxItem.defaultProps = {
  prefixCls: "ram-checkbox",
  listPrefixCls: "ram-list",
  checkboxProps: {}
};

export default CheckboxItem;
