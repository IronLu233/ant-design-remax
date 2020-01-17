import { View as WechatView, Text as WechatText } from "remax/wechat";
import { View as AlipayView, Text as AlipayText } from "remax/alipay";
import { View as ToutiaoView, Text as ToutiaoText } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AlipayView,
  toutiao: ToutiaoView,
  wechat: WechatView
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatView
  | typeof AlipayView
  | typeof ToutiaoView;

export default current;
