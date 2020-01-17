import {
  SwiperItem as WechatSwiperItem,
  Text as WechatText
} from "remax/wechat";
import {
  SwiperItem as AlipaySwiperItem,
  Text as AlipayText
} from "remax/alipay";
import {
  SwiperItem as ToutiaoSwiperItem,
  Text as ToutiaoText
} from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AlipaySwiperItem,
  toutiao: ToutiaoSwiperItem,
  wechat: WechatSwiperItem
}[
  Platform.current! as "alipay" | "toutiao" | "wechat"
] as typeof WechatSwiperItem &
  typeof AlipaySwiperItem &
  typeof ToutiaoSwiperItem;

export default current;
