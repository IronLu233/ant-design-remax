import React, {
  FC,
  useContext,
  CSSProperties,
  useState,
  useMemo,
  useCallback
} from "react";
import checkboxGroupContext from "./checkboxGroupContext";
import NaiveCheckboxGroup from "@/components/universe/CheckboxGroup";
import NaiveCheckbox from "@/components/universe/Checkbox";
import Label from "@/components/universe/Label";
import { CheckboxGroupEvent } from "./interface";
import { usePrevious } from "react-use";
import classNames from "@/utils/classnames";
import { Text, View } from "../universe";
import "./style.less";

export interface CheckboxProps {
  prefixCls?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, event: CheckboxGroupEvent) => any;
  className?: string;
  style?: CSSProperties;
  name?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  value,
  checked: checkedFromProps,
  disabled,
  onChange,
  children,
  defaultChecked,
  prefixCls,
  className,
  style,
  name
}) => {
  const ctx = useContext(checkboxGroupContext);
  const valueSet = useMemo(() => new Set(ctx?.value), [ctx?.value.toString()]);

  const [checked, setChecked] = useState(
    checkedFromProps || defaultChecked || false
  );

  const prevDefaultChecked = usePrevious(defaultChecked);
  const uuid = useMemo(
    () =>
      value ||
      Math.random()
        .toString(26)
        .substr(2),
    [value]
  );
  if (checkedFromProps !== checked && checkedFromProps !== undefined) {
    setChecked(checkedFromProps);
  }

  if (
    prevDefaultChecked !== undefined &&
    defaultChecked !== undefined &&
    prevDefaultChecked !== defaultChecked
  ) {
    setChecked(defaultChecked);
  }

  const onSingleChecked = useCallback(
    (e: CheckboxGroupEvent) => {
      const { value } = e.detail;
      const checked = value?.length > 0;
      setChecked(checked);
      onChange?.(checked, e);
    },
    [value, onChange]
  );

  if (ctx === undefined) {
    const wrapCls = classNames(
      `${prefixCls}-single`,
      { [`${prefixCls}-single-disabled`]: disabled },
      className
    );
    const labelCls = classNames(
      `${prefixCls}-wrapper`,
      `${prefixCls}-single-label`
    );
    const coreCls = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    });

    return (
      <View className={wrapCls}>
        <Label className={labelCls}>
          <NaiveCheckboxGroup
            name={name}
            onChange={onSingleChecked}
            className={coreCls}
            style={style}
          >
            <NaiveCheckbox
              className={`${prefixCls}-input`}
              disabled={disabled}
              value={uuid}
              checked={checked}
            />
            <Text className={`${prefixCls}-inner`} />
          </NaiveCheckboxGroup>
          {children}
        </Label>
      </View>
    );
  }

  {
    const { prefixCls } = ctx;
    const checked = valueSet.has(value!);

    const labelCls = classNames(
      `${prefixCls}-wrapper`,
      { [`${prefixCls}-wrapper-disabled`]: disabled },
      className
    );
    const coreCls = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    });

    return (
      <Label className={labelCls}>
        <View className={coreCls}>
          <NaiveCheckbox
            className={`${prefixCls}-input`}
            disabled={disabled}
            value={uuid}
            checked={checked}
          />
          <Text className={`${prefixCls}-inner`} />
        </View>
        {children}
      </Label>
    );
  }
};

Checkbox.defaultProps = {
  prefixCls: "ram-checkbox"
};

export default Checkbox;
