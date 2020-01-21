import React, { FC, useCallback } from "react";
import { DataItem, GridPropsType } from "./PropsType";
import { View, Image } from "../universe";
import classNames from "@/utils/classnames";
import range from "lodash.range";
import TouchFeedback from "../TouchFeedback";
import Flex from "../Flex";

import "./style/index.less";

export interface GridProps extends GridPropsType {
  prefixCls?: string;
  className?: string;
  square?: boolean;
  activeClassName?: string;
  itemStyle?: React.CSSProperties;
}

const Grid: FC<GridProps> = ({
  renderItem,
  prefixCls,
  className,
  hasLine,
  isCarousel,
  square,
  data,
  columnNum,
  activeClassName,
  onClick,
  itemStyle
}) => {
  const _renderItem = useCallback(
    (dataItem: DataItem, index: number) => {
      const { icon, text, style } = dataItem;
      const itemEl = renderItem ? (
        renderItem(dataItem, index)
      ) : (
        <View
          className={`${prefixCls}-item-inner-content column-num-${columnNum}`}
        >
          {React.isValidElement(icon) ? (
            icon
          ) : (
            <Image src={icon} className={`${prefixCls}-icon`} />
          )}
          <View className={`${prefixCls}-text`}>{text}</View>
        </View>
      );

      return <View className={`${prefixCls}-item-content`}>{itemEl}</View>;
    },
    [renderItem, columnNum]
  );

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-square`]: square,
    [`${prefixCls}-line`]: hasLine,
    [`${prefixCls}-carousel`]: isCarousel
  });

  const dataLength = data?.length ?? 0;
  const rowCount = Math.ceil(dataLength / columnNum!);
  const rowWidth = `${100 / columnNum!}%`;
  const gridEls = range(rowCount).map(colIndex => (
    <Flex justify="center" align="stretch" key={`gridline-${colIndex}`}>
      {range(columnNum!).map(rowIndex => {
        const dataIndex = colIndex * columnNum! + rowIndex!;
        const dataItem = data![dataIndex]!;
        const gridStyle = {
          width: rowWidth,
          ...itemStyle
        };

        return dataIndex < dataLength ? (
          <TouchFeedback
            key={`griditem-${colIndex * columnNum! + columnNum!}`}
            activeClassName={activeClassName || `${prefixCls}-item-active`}
          >
            <Flex.Item
              style={gridStyle}
              className={`${prefixCls}-item`}
              onClick={() => onClick?.(dataItem, dataIndex)}
            >
              {_renderItem(dataItem, dataIndex)}
            </Flex.Item>
          </TouchFeedback>
        ) : (
          <Flex.Item
            key={`griditem-${dataIndex}`}
            className={`${prefixCls}-item ${prefixCls}-null-item`}
            style={gridStyle}
          ></Flex.Item>
        );
      })}
    </Flex>
  ));

  return <View className={`${cls}`}>{gridEls}</View>;
};

Grid.defaultProps = {
  data: [],
  hasLine: true,
  isCarousel: false,
  columnNum: 4,
  carouselMaxRow: 2,
  prefixCls: "ram-grid",
  square: true,
  itemStyle: {}
};

export default Grid;
