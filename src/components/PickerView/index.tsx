import NaivePickerView from "@/components/universe/PickerView";
import NaivePickerViewColumn from "@/components/universe/PickerViewColumn";
import { CSSProperties, FC, useCallback, useState, useMemo } from "react";
import { View } from "../universe";

import "./style";
import { usePrevious } from "react-use";

interface PickerViewEvent {
  detail: { value: number[] };
}

interface OptionObject {
  label: string;
  value: string;
}

export type PickerViewOption = OptionObject | string;
const canUseMaskClassName =
  typeof my !== "undefined" && my.canIUse("picker-view.indicator-class");

export interface PickerViewProps {
  options?: PickerViewOption[][];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => any;
  prefixCls?: string;
  pickerPrefixCls?: string;
  indicatorStyle?: CSSProperties;
}

const defaultIndicatorStyle: CSSProperties = canUseMaskClassName
  ? {}
  : {
      boxSizing: "border-box",
      width: "100%",
      height: "68rpx",
      borderTop: "2rpx solid #ddd",
      borderBottom: "2rpx solid #ddd"
    };

const unifyPickerViewColumn = (column: PickerViewOption[]) =>
  column.map(it => (typeof it === "string" ? { label: it, value: it } : it));

const PickerView: FC<PickerViewProps> = ({
  prefixCls,
  pickerPrefixCls,
  indicatorStyle,
  onChange,
  defaultValue,
  ...restProps
}) => {
  const options = useMemo(() => restProps.options!.map(unifyPickerViewColumn), [
    restProps.options
  ]);
  const [value, setValue] = useState(restProps.value || defaultValue || []);
  const prevDefaultValue = usePrevious(defaultValue);

  if (
    prevDefaultValue !== undefined &&
    defaultValue !== undefined &&
    prevDefaultValue.toString() !== defaultValue.toString()
  ) {
    setValue(defaultValue);
  }

  if (restProps.value !== undefined && restProps.value !== value) {
    setValue(restProps.value);
  }

  const columnIndexMaps = useMemo(
    () =>
      options.map(
        column => new Map(column.map((item, index) => [item.value, index]))
      ),
    [JSON.stringify(restProps.options)]
  );
  const onNaivePickerChange = useCallback(
    (e: PickerViewEvent) => {
      const nextVal = e.detail.value.map(
        (colVal, index) => options[index][colVal].value
      );
      setValue(nextVal);
      onChange?.(nextVal);
    },
    [onChange, options]
  );

  const naiveValue = value.map(
    (colVal, index) => columnIndexMaps[index].get(colVal) || 0
  );

  const renderColumn = useCallback(
    (column: OptionObject[], index: number) => {
      return (
        <NaivePickerViewColumn
          className={`${pickerPrefixCls}-content`}
          key={index.toString()}
        >
          {column.map(it => (
            <View key={it.value}>{it.label}</View>
          ))}
        </NaivePickerViewColumn>
      );
    },
    [pickerPrefixCls]
  );

  return (
    <NaivePickerView
      value={naiveValue}
      onChange={onNaivePickerChange}
      indicatorStyle={{ ...defaultIndicatorStyle, ...indicatorStyle! }}
      maskClassName={`${pickerPrefixCls}-mask`}
      indicatorClassName={
        canUseMaskClassName ? `${pickerPrefixCls}-indicator` : undefined
      }
      className={prefixCls}
    >
      {options.map(renderColumn)}
    </NaivePickerView>
  );
};

PickerView.defaultProps = {
  options: [],
  prefixCls: "ram-picker",
  pickerPrefixCls: "ram-picker-col",
  indicatorStyle: {}
};

export default PickerView;
