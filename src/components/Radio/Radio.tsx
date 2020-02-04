import { FC } from "react";

export interface RadioProps {
  prefixCls?: string;
  listPrefixCls?: string;
  className?: string;
  style?: React.CSSProperties;

  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: { target: { checked: boolean } }) => void;
  name?: string;
  wrapLabel?: boolean;
}

const Radio: FC = () => {};

Radio.defaultProps = {
  prefixCls: "ram-radio",
  wrapLabel: true
};
