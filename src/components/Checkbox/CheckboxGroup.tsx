import React, {
  FC,
  CSSProperties,
  useState,
  useMemo,
  useCallback
} from "react";
import ctx, { CheckboxGroupContext } from "./checkboxGroupContext";
import NaiveCheckboxGroup from "@/components/universe/CheckboxGroup";
import classNames from "@/utils/classnames";
import { CheckboxGroupEvent, CheckboxGroupOption } from "./interface";
import Checkbox from "./Checkbox";

const { Provider } = ctx;

export interface CheckboxGroupProps {
  className?: string;
  prefixCls?: string;
  style?: CSSProperties;
  name?: string;
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => any;
  options?: CheckboxGroupOption[];
}

const renderOption = (item: CheckboxGroupOption) => {
  if (typeof item === "string") {
    return <Checkbox key={item} value={item} />;
  }

  return (
    <Checkbox key={item.value} value={item.value} disabled={item.disabled}>
      {item.label}
    </Checkbox>
  );
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  children,
  className,
  prefixCls,
  defaultValue,
  value: valueFromProps,
  style,
  onChange,
  options,
  name
}) => {
  const [value, setValue] = useState(valueFromProps || defaultValue || []);

  const ctxVal: CheckboxGroupContext = useMemo(
    () => ({
      value,
      prefixCls: prefixCls!
    }),
    [value, prefixCls]
  );

  const checkboxGroupCls = classNames(`${prefixCls}-group`, className);

  const handleChange = useCallback((e: CheckboxGroupEvent) => {
    const nextVal = e.detail.value;
    setValue(nextVal);
    onChange?.(nextVal);
  }, []);

  return (
    <NaiveCheckboxGroup
      onChange={handleChange}
      name={name}
      style={style}
      className={checkboxGroupCls}
    >
      <Provider value={ctxVal}>
        {children}
        {options?.map(renderOption)}
      </Provider>
    </NaiveCheckboxGroup>
  );
};

CheckboxGroup.defaultProps = {
  prefixCls: "ram-checkbox",
  options: []
};

export default CheckboxGroup;
