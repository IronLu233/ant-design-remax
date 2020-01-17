import React, { FC, useCallback, ReactElement } from "react";
import { Swiper, SwiperItem, View } from "../universe";
import { CarouselPropsType } from "./PropsType";
import classNames from "@/utils/classnames";

type IFrameOverFlow = "visible" | "hidden";

export interface CarouselProps extends CarouselPropsType {
  className?: string;
  prefixCls?: string;
  onChange?: (current: number, e: any) => void;
  swipeSpeed?: number;
  easing?:
    | "default"
    | "linear"
    | "easeInCubic"
    | "easeOutCubic"
    | "easeInOutCubic";
  style?: React.CSSProperties;
  dotColor?: string;
  dotActiveColor?: string;
  frameOverflow?: IFrameOverFlow;
  cellSpacing?: number;
  slideWidth?: string | number;
  children: ReactElement | ReactElement[];
}

const Carousel: FC<CarouselProps> = ({
  className,
  prefixCls,
  onChange,
  easing,
  style,
  dotColor,
  dots,
  dotActiveColor,
  infinite,
  autoplay,
  selectedIndex,
  autoplayInterval,
  vertical,
  children
}) => {
  const wrapCls = classNames(prefixCls, className);
  const onSwiperChange = useCallback(
    (e: any) => {
      onChange?.(e.detail.current, e);
    },
    [onChange]
  );

  const wrappedChildren = React.Children.map(children, (it, idx) => (
    <SwiperItem key={(it as ReactElement).key || idx}>{it}</SwiperItem>
  ));

  return (
    <Swiper
      easingFunction={easing}
      style={style}
      className={wrapCls}
      indicatorDots={dots}
      indicatorColor={dotColor}
      indicatorActiveColor={dotActiveColor}
      autoplay={autoplay}
      current={selectedIndex}
      interval={autoplayInterval}
      vertical={vertical}
      onChange={onSwiperChange}
      circular={infinite}
    >
      {wrappedChildren}

      {/* {children} */}
    </Swiper>
  );
};

Carousel.defaultProps = {
  prefixCls: "ram-carousel",
  dots: true,
  autoplay: false,
  infinite: false,
  autoplayInterval: 3000
};

export default Carousel;
