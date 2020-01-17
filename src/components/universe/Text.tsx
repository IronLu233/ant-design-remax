import { Text as WechatText } from "remax/wechat";
import { Text as AlipayText } from "remax/alipay";
import { Text as ToutiaoText } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AlipayText,
  toutiao: ToutiaoText,
  wechat: WechatText
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatText
  | typeof AlipayText
  | typeof ToutiaoText;

export default current;
