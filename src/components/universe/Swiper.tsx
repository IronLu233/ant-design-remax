import { Swiper as WechatSwiper, Text as WechatText } from "remax/wechat";
import { Swiper as AlipaySwiper, Text as AlipayText } from "remax/alipay";
import { Swiper as ToutiaoSwiper, Text as ToutiaoText } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AlipaySwiper,
  toutiao: ToutiaoSwiper,
  wechat: WechatSwiper
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as typeof WechatSwiper &
  typeof AlipaySwiper &
  typeof ToutiaoSwiper;

export default current;
