import { Checkbox as WechatCheckbox } from "remax/wechat";
import { Checkbox as AliPayCheckbox } from "remax/alipay";
import { Checkbox as ToutiaoCheckbox } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AliPayCheckbox,
  toutiao: ToutiaoCheckbox,
  wechat: WechatCheckbox
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatCheckbox
  | typeof AliPayCheckbox
  | typeof ToutiaoCheckbox;

export default current;
