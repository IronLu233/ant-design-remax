import { createContext } from "react";

export interface CheckboxGroupContext {
  value: string[];
  prefixCls: string;
}

export default createContext<CheckboxGroupContext | undefined>(undefined);
