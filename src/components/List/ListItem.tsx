import React, { FC } from "react";
import View from "@/components/universe/View";
import Image from "@/components/universe/Image";
import classnames from "@/utils/classnames";
import {
  ListItemPropsType as ListItemBasePropsType,
  BriefProps as BriefBasePropsType
} from "./PropsType";
import TouchFeedback, { TouchProps } from "../TouchFeedback";
import Brief from "./Brief";

export interface ListItemProps extends ListItemBasePropsType, TouchProps {
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface BriefProps extends BriefBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

const ListItem: FC<ListItemProps> = ({
  prefixCls,
  className,
  error,
  align,
  wrap,
  disabled,
  children,
  multipleLine,
  thumb,
  extra,
  arrow,
  onClick,
  ...restProps
}) => {
  const wrapCls = classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled,
    [`${prefixCls}-item-error`]: error,
    [`${prefixCls}-item-top`]: align === "top",
    [`${prefixCls}-item-middle`]: align === "middle",
    [`${prefixCls}-item-bottom`]: align === "bottom"
  });

  const lineCls = classnames(`${prefixCls}-line`, {
    [`${prefixCls}-line-multiple`]: multipleLine,
    [`${prefixCls}-line-wrap`]: wrap
  });

  const arrowCls = classnames(`${prefixCls}-arrow`, {
    [`${prefixCls}-arrow-horizontal`]: arrow === "horizontal",
    [`${prefixCls}-arrow-vertical`]: arrow === "down" || arrow === "up",
    [`${prefixCls}-arrow-vertical-up`]: arrow === "up"
  });

  const content = (
    <View {...restProps} onTap={onClick} className={wrapCls}>
      {Boolean(thumb) && (
        <View className={`${prefixCls}-thumb`}>
          {typeof thumb === "string" ? <Image src={thumb} /> : thumb}
        </View>
      )}

      <View className={lineCls}>
        {children !== undefined && (
          <View className={`${prefixCls}-content`}>{children}</View>
        )}
        {extra !== undefined && (
          <View className={`${prefixCls}-extra`}>{extra}</View>
        )}

        {arrow && <View className={arrowCls} aria-hidden="true" />}
      </View>
    </View>
  );

  return (
    <TouchFeedback
      disabled={disabled || !onClick}
      activeClassName={`${prefixCls}-item-active`}
    >
      {content}
    </TouchFeedback>
  );
};

ListItem.defaultProps = {
  prefixCls: "ram-list",
  align: "middle",
  error: false,
  multipleLine: false,
  wrap: false
};

type ListItemType = typeof ListItem & { Brief: typeof Brief };

(ListItem as ListItemType).Brief = Brief;

export default ListItem as ListItemType;
