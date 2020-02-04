import React, { FC, useCallback } from "react";
import { useSetState } from "react-use";
import classNames from "@/utils/classnames";
import TouchFeedback from "../TouchFeedback";
import { View } from "../universe";
import Icon from "../Icon";

import "./style.less";

export interface TagProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  selected?: boolean;
  closable?: boolean;
  small?: boolean;
  onChange?: (selected: boolean) => void;
  onClose?: () => void;
  afterClose?: () => void;
}

const Tag: FC<TagProps> = props => {
  const [state, setState] = useSetState({
    selected: props.selected,
    closed: false
  });

  const {
    children,
    className,
    prefixCls,
    disabled,
    closable,
    small,
    style,
    onClose,
    onChange,
    afterClose
  } = props;

  const handleClick = useCallback(() => {
    if (disabled) {
      return;
    }
    setState({
      selected: !state.selected
    });
    onChange?.(!state.selected);
  }, [disabled, onChange, state.selected]);

  const handleClose = useCallback(() => {
    onClose?.();

    setState({ closed: true });

    afterClose?.();
  }, [onClose]);

  if (state.closed) {
    return null;
  }

  const wrapCls = classNames(className, prefixCls, {
    [`${prefixCls}-normal`]:
      !disabled && (!state.selected || small || closable),
    [`${prefixCls}-small`]: small,
    [`${prefixCls}-active`]: state.selected && !disabled && !small && !closable,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-closable`]: closable
  });

  const closeIcon = closable && !disabled && !small && (
    <TouchFeedback activeClassName={`${prefixCls}-close-active`}>
      <View className={`${prefixCls}-close`} onClick={handleClose}>
        <Icon type="close-circle" size="xs" aria-hidden="true" />
      </View>
    </TouchFeedback>
  );

  return (
    <View className={wrapCls} onClick={handleClick} style={style}>
      <View className={`${prefixCls}-text`}>{children}</View>
      {closeIcon}
    </View>
  );
};

Tag.defaultProps = {
  prefixCls: "ram-tag",
  disabled: false,
  selected: false,
  closable: false,
  small: false,
  onChange() {},
  onClose() {},
  afterClose() {}
};
export default Tag;
