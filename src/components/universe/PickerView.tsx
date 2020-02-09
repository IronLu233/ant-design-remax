import { PickerView as WechatPickerView } from "remax/wechat";
import { PickerView as AliPayPickerView } from "remax/alipay";
import { PickerView as ToutiaoPickerView } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AliPayPickerView,
  toutiao: ToutiaoPickerView,
  wechat: WechatPickerView
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatPickerView
  | typeof AliPayPickerView
  | typeof ToutiaoPickerView;

export default current;
