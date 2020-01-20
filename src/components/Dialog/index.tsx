import React, {
  FC,
  CSSProperties,
  useEffect,
  useCallback,
  useLayoutEffect
} from "react";
import Animate from "../Animate";
import { View, Button } from "../universe";
import { DialogPropTypes } from "./DialogPropTypes";
import LazyRenderView from "../LazyRenderView";
import { useToggle, usePreviousDistinct } from "react-use";

interface MaskProps {
  prefixCls?: string;
  transitionName?: string;
  style?: CSSProperties;
  timeout: number;
  visible?: boolean;
}

const ignoreScroll = (e: Event) => {
  e?.stopPropagation();
};

const Mask: FC<MaskProps> = ({
  transitionName,
  timeout,
  style,
  prefixCls,
  visible
}) => {
  const content = (
    <LazyRenderView
      data-type="mask"
      style={style}
      className={`${prefixCls}-mask`}
      visible={visible}
    />
  );

  return transitionName ? (
    <Animate timeout={timeout} transitionName={transitionName} in={visible}>
      {content}
    </Animate>
  ) : (
    content
  );
};

const Dialog: FC<DialogPropTypes> = ({
  maskTransitionName,
  timeout,
  prefixCls,
  wrapClassName,
  transitionName,
  visible,
  afterClose,
  onClose,
  ...restProps
}) => {
  const prevVisible = usePreviousDistinct(visible) || false;
  const [animating, setAnimating] = useToggle(false);
  useEffect(() => {
    if (prevVisible === undefined || prevVisible === visible) {
      return;
    }

    if (visible) {
      setAnimating(true);
    } else {
      const interval = setTimeout(() => {
        setAnimating(false);
        afterClose?.();
      }, timeout);

      return () => {
        clearInterval(interval);
      };
    }
  }, [prevVisible, visible, timeout]);

  const footer = Boolean(restProps.footer) && (
    <View className={`${prefixCls}-footer`}>{restProps.footer}</View>
  );

  const header = Boolean(restProps.title) && (
    <View className={`${prefixCls}-header`}>
      <View className={`${prefixCls}-title`}>{restProps.title}</View>
    </View>
  );

  const closer = restProps.closable && (
    <Button plain className={`${prefixCls}-close`}></Button>
  );

  const content = (
    <Animate in={visible} timeout={timeout} transitionName={transitionName}>
      <LazyRenderView
        style={restProps.style}
        className={`${prefixCls} ${restProps.className || ""}`}
        visible={visible}
      >
        <View className={`${prefixCls}-content`}>
          {closer}
          {header}
          <View className={`${prefixCls}-body`} style={restProps.bodyStyle}>
            {restProps.children}
          </View>
          {footer}
        </View>
      </LazyRenderView>
    </Animate>
  );

  let style = {
    ...(restProps.style || {}),
    display: animating || visible ? restProps.style?.display : "none"
  };

  return (
    <View catchTouchMove={ignoreScroll}>
      <Mask
        transitionName={maskTransitionName}
        prefixCls={prefixCls}
        timeout={timeout}
        visible={visible}
      />
      <View
        data-type="content"
        style={style}
        className={`${prefixCls}-wrap ${wrapClassName || ""}`}
      >
        {content}
      </View>
    </View>
  );
};

export default Dialog;
