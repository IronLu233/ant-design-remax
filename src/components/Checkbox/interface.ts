export interface CheckboxGroupEvent {
  detail: {
    value: string[];
  };
}

export type CheckboxGroupOption =
  | {
      label: string;
      value: string;
      disabled?: boolean;
    }
  | string;
