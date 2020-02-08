import { Label as WechatLabel } from "remax/wechat";
import { Label as AliPayLabel } from "remax/alipay";
import { Label as ToutiaoLabel } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AliPayLabel,
  toutiao: ToutiaoLabel,
  wechat: WechatLabel
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatLabel
  | typeof AliPayLabel
  | typeof ToutiaoLabel;

export default current;
