import React, { FC, ReactElement, useState, useEffect } from "react";
import { usePrevious } from "react-use";
import classNames from "@/utils/classnames";
import { View } from "../universe";

export interface CSSTransition {
  transitionName?: string;
  className?: string;
  timeout: number;
  in?: boolean;
}

enum AnimationState {
  ENTER = "enter",
  ENTER_ACTIVE = "enter-active",
  APPEAR = "appear",
  LEAVE = "leave",
  LEAVE_ACTIVE = "leave-active",
  LEAVED = "leaved"
}

const Animate: FC<CSSTransition> = props => {
  const prevProps = usePrevious(props);
  const [animationState, setAnimationState] = useState(AnimationState.LEAVED);

  useEffect(() => {
    if (prevProps?.in === undefined || prevProps.in === props.in) {
      return;
    }

    if (prevProps.in && !props.in) {
      const intervalId1 = setTimeout(() => {
        setAnimationState(AnimationState.LEAVE);
        setAnimationState(AnimationState.LEAVE_ACTIVE);
      }, 0);

      const intervalId2 = setTimeout(() => {
        setAnimationState(AnimationState.LEAVED);
      }, props.timeout);
      // return () => {
      //   clearTimeout(intervalId1);
      //   clearTimeout(intervalId2);
      // };
    } else if (!prevProps.in && props.in) {
      const intervalId1 = setTimeout(() => {
        setAnimationState(AnimationState.APPEAR);
        setAnimationState(AnimationState.ENTER);
        setAnimationState(AnimationState.ENTER_ACTIVE);
      }, 0);

      // const intervalId2 = setTimeout(() => {

      // }, props.timeout);
      // return () => {
      //   clearTimeout(intervalId1);
      //   clearTimeout(intervalId2);
      //   console.log("cleared")
      // };
    }
  }, [props.in, prevProps?.in, props.timeout]);

  const { transitionName, children, className } = props;
  const wrapCls = {
    [AnimationState.ENTER]: classNames(
      className,
      transitionName,
      `${transitionName}-enter`
    ),
    [AnimationState.ENTER_ACTIVE]: classNames(
      className,
      transitionName,
      `${transitionName}-enter`,
      `${transitionName}-enter-active`
    ),
    [AnimationState.APPEAR]: classNames(
      className,
      transitionName,
      `${transitionName}-appear`
    ),
    [AnimationState.LEAVE]: classNames(
      className,
      transitionName,
      `${transitionName}-leave`
    ),
    [AnimationState.LEAVE_ACTIVE]: classNames(
      className,
      transitionName,
      `${transitionName}-leave`,
      `${transitionName}-leave-active`
    ),
    [AnimationState.LEAVED]: undefined
  }[animationState];

  return React.cloneElement(children as ReactElement, {
    className: classNames(wrapCls, (children as ReactElement).props?.className),
    style:
      animationState === AnimationState.LEAVED
        ? { display: "none" }
        : (children as ReactElement).props?.style
  });
};

Animate.defaultProps = {
  in: false
};

export default Animate;
