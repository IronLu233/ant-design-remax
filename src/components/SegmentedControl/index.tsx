import React, { FC, useCallback, CSSProperties, useState } from "react";
import { SegmentedControlPropsType } from "./PropsType";
import classNames from "@/utils/classnames";
import TouchFeedback from "../TouchFeedback";
import { View } from "../universe";
import "./style";

export interface SegmentedControlProps extends SegmentedControlPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SegmentedControl: FC<SegmentedControlProps> = ({
  prefixCls,
  disabled,
  tintColor,
  onChange,
  onValueChange,
  className,
  style,
  values,
  selectedIndex: selectedIndexFromProps
}) => {
  const [selectedIndex, setSelectedIndex] = useState(
    selectedIndexFromProps || 0
  );

  if (
    selectedIndexFromProps !== undefined &&
    selectedIndexFromProps !== selectedIndex
  ) {
    setSelectedIndex(selectedIndexFromProps);
  }

  const onTap = useCallback(
    (e: any, index: any, value: any) => {
      if (!disabled && selectedIndex !== index) {
        e.nativeEvent = e.nativeEvent ?? ({} as any);
        (e.nativeEvent as any).selectedSegmentIndex = index;
        (e.nativeEvent as any).value = value;
        onChange?.(e);
        onValueChange?.(value);
        setSelectedIndex(index);
      }
    },
    [disabled, onChange, onValueChange, selectedIndex]
  );

  const renderSegmentItem = useCallback(
    (idx: number, value: string, selected: boolean) => {
      const itemCls = classNames(`${prefixCls}-item`, {
        [`${prefixCls}-item-selected`]: selected
      });

      const itemStyle = {
        color: selected ? "#fff" : tintColor,
        backgroundColor: selected ? tintColor : "transparent",
        borderColor: tintColor
      };

      const activeInnerStyle: CSSProperties = tintColor
        ? {
            backgroundColor: tintColor
          }
        : {};

      return (
        <TouchFeedback
          key={value}
          disabled={disabled}
          activeClassName={`${prefixCls}-item-active`}
        >
          <View
            className={itemCls}
            style={itemStyle}
            role="tab"
            aria-selected={selected && !disabled}
            aria-disabled={disabled}
            onTap={disabled ? undefined : (e: any) => onTap(e, idx, value)}
          >
            <View
              className={`${prefixCls}-item-inner`}
              style={activeInnerStyle}
            />
            {value}
          </View>
        </TouchFeedback>
      );
    },
    [prefixCls, disabled, tintColor, onTap]
  );

  const wrapCls = classNames(className, prefixCls, {
    [`${prefixCls}-disabled`]: disabled
  });
  console.log(selectedIndex);

  return (
    <View className={wrapCls} style={style}>
      {values?.map((val, idx) =>
        renderSegmentItem(idx, val, idx === selectedIndex)
      )}
    </View>
  );
};

SegmentedControl.defaultProps = {
  prefixCls: "ram-segment",
  disabled: false,
  values: [],
  onChange() {},
  onValueChange() {},
  style: {},
  tintColor: ""
};

export default SegmentedControl;
