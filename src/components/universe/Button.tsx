import { Button as WechatButton, Text as WechatText } from "remax/wechat";
import { Button as AliPayButton, Text as AlipayText } from "remax/alipay";
import { Button as ToutiaoButton, Text as ToutiaoText } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AliPayButton,
  toutiao: ToutiaoButton,
  wechat: WechatButton
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatButton
  | typeof AliPayButton
  | typeof ToutiaoButton;

export default current;
