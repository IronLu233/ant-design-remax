import { Image as WechatImage, Text as WechatText } from "remax/wechat";
import { Image as AlipayImage, Text as AlipayText } from "remax/alipay";
import { Image as ToutiaoImage, Text as ToutiaoText } from "remax/toutiao";
import { Platform } from "remax";

const current = {
  alipay: AlipayImage,
  toutiao: ToutiaoImage,
  wechat: WechatImage
}[Platform.current! as "alipay" | "toutiao" | "wechat"] as
  | typeof WechatImage
  | typeof AlipayImage
  | typeof ToutiaoImage;

export default current;
