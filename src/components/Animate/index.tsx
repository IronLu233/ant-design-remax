import React, { FC, ReactElement, useState } from "react";
import { usePrevious, useUpdateEffect, useStateList, useList } from "react-use";
import classNames from "@/utils/classnames";
import { View } from "../universe";

export interface AnimateProps {
  transitionName?: string;
  className?: string;
  timeout: number;
  in?: boolean;
  children?: ReactElement;
}

enum AnimationState {
  ENTER = "enter",
  ENTER_ACTIVE = "enter-active",
  DONE = "done",
  APPEAR = "appear",
  LEAVE = "leave",
  LEAVE_ACTIVE = "leave-active",
  LEAVED = "leaved"
}

const clearIntervals = (intervalIds: NodeJS.Timeout[]) => {
  intervalIds.forEach(it => clearInterval(it));
};

const Animate: FC<AnimateProps> = props => {
  const prevProps = usePrevious(props);
  const prevIn = prevProps?.in || false;
  const [animationState, setAnimationState] = useState(AnimationState.LEAVED);
  const [
    intervalIdList,
    { clear: clearIntervalList, push: appendIntervalList }
  ] = useList<NodeJS.Timeout>([]);

  useUpdateEffect(() => {
    if (prevIn === props.in) {
      return;
    }
    clearIntervals(intervalIdList);
    clearIntervalList();
    if (props.in) {
      const intervalId1 = setTimeout(() => {
        setAnimationState(AnimationState.APPEAR);
        setAnimationState(AnimationState.ENTER);
        setAnimationState(AnimationState.ENTER_ACTIVE);
      }, 0);
      const interval2 = setTimeout(() => {
        setAnimationState(AnimationState.DONE);
      }, props.timeout);

      appendIntervalList(intervalId1, interval2);
    } else {
      const intervalId1 = setTimeout(() => {
        setAnimationState(AnimationState.LEAVE);
        setAnimationState(AnimationState.LEAVE_ACTIVE);
      }, 0);

      const intervalId2 = setTimeout(() => {
        setAnimationState(AnimationState.LEAVED);
      }, props.timeout);
      appendIntervalList(intervalId1, intervalId2);
    }
  }, [props.in, prevIn, props, intervalIdList]);

  const { transitionName, children, className } = props;
  const wrapCls = {
    [AnimationState.APPEAR]: classNames(
      className,
      transitionName,
      `${transitionName}-appear`
    ),
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
    [AnimationState.DONE]: classNames(className),

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
    [AnimationState.LEAVED]: classNames(className)
  }[animationState];

  return React.cloneElement(children as ReactElement, {
    className: classNames(wrapCls, (children as ReactElement).props?.className),
    style:
      animationState === AnimationState.LEAVED
        ? { display: "none" }
        : (children as ReactElement).props?.style
  });
};

export default React.memo(Animate);
