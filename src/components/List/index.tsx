import React, { FC } from "react";
import classnames from "@/utils/classnames";
import { View } from "remax/alipay";
import { ListPropsType } from "./PropsType";
import "./style/index.less";
import { ViewProps } from "remax/wechat";
import ListItem from "./ListItem";
export { default as Item } from "./ListItem";

export interface ListProps extends ListPropsType, ViewProps {
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
}

const List: FC<ListProps> = ({
  prefixCls,
  children,
  className,
  style,
  renderHeader,
  renderFooter,
  ...restProps
}) => {
  const wrapCls = classnames(prefixCls, className);
  return (
    <View className={wrapCls} {...restProps}>
      {Boolean(renderHeader) && (
        <View className={`${prefixCls}-header`}>
          {typeof renderHeader === "function" ? renderHeader() : renderHeader}
        </View>
      )}
      {children && <View className={`${prefixCls}-body`}>{children}</View>}
      {Boolean(renderFooter) && (
        <View className={`${prefixCls}-footer`}>
          {typeof renderFooter === "function" ? renderFooter() : renderFooter}
        </View>
      )}
    </View>
  );
};

List.defaultProps = {
  prefixCls: "ram-list"
};

type ListType = FC<ListProps> & {
  Item: typeof ListItem;
};

(List as ListType).Item = ListItem;

export default List as ListType;
