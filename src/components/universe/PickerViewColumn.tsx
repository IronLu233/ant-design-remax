import { PickerViewColumn as WechatPickerViewColumn } from "remax/wechat";
import { PickerViewColumn as AliPayPickerViewColumn } from "remax/alipay";
import { PickerViewColumn as ToutiaoPickerViewColumn } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AliPayPickerViewColumn,
  toutiao: ToutiaoPickerViewColumn,
  wechat: WechatPickerViewColumn
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatPickerViewColumn
  | typeof AliPayPickerViewColumn
  | typeof ToutiaoPickerViewColumn;

export default current;
