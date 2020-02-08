import Checkbox from "./Checkbox";
import CheckboxItem from "./CheckboxItem";
import CheckboxGroup from "./CheckboxGroup";

type CheckboxType = typeof Checkbox & {
  CheckboxItem: typeof CheckboxItem;
  Group: typeof CheckboxGroup;
};

(Checkbox as CheckboxType).CheckboxItem = CheckboxItem;
(Checkbox as CheckboxType).Group = CheckboxGroup;

export default Checkbox as CheckboxType;
