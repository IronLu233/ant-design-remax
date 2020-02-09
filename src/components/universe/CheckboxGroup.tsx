import { CheckboxGroup as WechatCheckboxGroup } from "remax/wechat";
import { CheckboxGroup as AliPayCheckboxGroup } from "remax/alipay";
import { CheckboxGroup as ToutiaoCheckboxGroup } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AliPayCheckboxGroup,
  toutiao: ToutiaoCheckboxGroup,
  wechat: WechatCheckboxGroup
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatCheckboxGroup
  | typeof AliPayCheckboxGroup
  | typeof ToutiaoCheckboxGroup;

export default current;
