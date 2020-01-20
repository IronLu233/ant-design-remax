import {
  ScrollView as WechatScrollView,
  Text as WechatText
} from "remax/wechat";
import {
  ScrollView as AlipayScrollView,
  Text as AlipayText
} from "remax/alipay";
import {
  ScrollView as ToutiaoScrollView,
  Text as ToutiaoText
} from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AlipayScrollView,
  toutiao: ToutiaoScrollView,
  wechat: WechatScrollView
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatScrollView
  | typeof AlipayScrollView
  | typeof ToutiaoScrollView;

export default current;
