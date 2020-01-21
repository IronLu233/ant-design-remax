import React, { useReducer, Reducer, useCallback, useMemo } from "react";
import { usePreviousDistinct } from "react-use";
import range from "lodash.range";
import Flex from "../Flex";
import Button from "../Button";
import { Text, View } from "../universe";
import classNames from "@/utils/classnames";

import "./style/index.less";

export interface PaginationProps {
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  mode?: "button" | "number" | "pointer";
  simple?: boolean;
  current: number;
  total: number;
  prevText?: string;
  nextText?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onChange?: (current: number) => void;
}

enum PaginationAction {
  PREV,
  NEXT,
  SET_PAGE
}

const pageReducer: Reducer<
  number,
  { type: PaginationAction; payload?: number }
> = (state: number, action: { type: PaginationAction; payload?: number }) => {
  switch (action.type) {
    case PaginationAction.PREV:
      return state - 1;
    case PaginationAction.NEXT:
      return state + 1;

    case PaginationAction.SET_PAGE:
      return action.payload!;
    default:
      return state;
  }
};

const Pagination: React.FC<PaginationProps> = ({
  prefixCls,
  className,
  style,
  mode,
  total,
  simple,
  children,
  current: propCurrent
}) => {
  const [current, dispatch] = useReducer(pageReducer, propCurrent);
  const prevPropCurrent = usePreviousDistinct(propCurrent);
  if (prevPropCurrent !== undefined && prevPropCurrent !== propCurrent) {
    dispatch({ type: PaginationAction.SET_PAGE, payload: propCurrent });
  }

  const onChangeCurry = useCallback(
    (type: PaginationAction.NEXT | PaginationAction.PREV) => () => {
      dispatch({ type });
    },
    []
  );

  const prevText = "上一页";
  const nextText = "下一页";
  const onPrevClick = useMemo(() => onChangeCurry(PaginationAction.PREV), [
    onChangeCurry
  ]);
  const onNextClick = useMemo(() => onChangeCurry(PaginationAction.NEXT), [
    onChangeCurry
  ]);

  let markup = (
    <Flex>
      <Flex.Item className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-prev`}>
        <Button inline disabled={current <= 1} onTap={onPrevClick}>
          {prevText}
        </Button>
      </Flex.Item>
      {children ? (
        <Flex.Item>{children}</Flex.Item>
      ) : (
        !simple && (
          <Flex.Item className={`${prefixCls}-wrap`} aria-live="assertive">
            <Text className="active">{current}</Text>/<Text>{total}</Text>
          </Flex.Item>
        )
      )}
      <Flex.Item className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-next`}>
        <Button inline disabled={current >= total} onTap={onNextClick}>
          {nextText}
        </Button>
      </Flex.Item>
    </Flex>
  );

  if (mode === "number") {
    markup = (
      <View className={`${prefixCls}-wrap`}>
        <Text className="active">{current}</Text>/<Text>{total}</Text>
      </View>
    );
  }

  if (mode === "pointer") {
    const points = range(total).map(idx => (
      <View
        key={`dot-${idx}`}
        className={classNames(`${prefixCls}-wrap-dot`, {
          [`${prefixCls}-wrap-dot-active`]: idx + 1 === current
        })}
      >
        <Text>{""}</Text>
      </View>
    ));

    markup = <View className={`${prefixCls}-wrap`}>{points}</View>;
  }

  const cls = classNames(prefixCls, className);
  return (
    <View className={cls} style={style}>
      {markup}
    </View>
  );
};

Pagination.defaultProps = {
  prefixCls: "ram-pagination",
  mode: "button",
  current: 1,
  total: 0,
  simple: false,
  onChange: () => {}
};

export default Pagination;
