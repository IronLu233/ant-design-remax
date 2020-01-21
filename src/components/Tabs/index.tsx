import React, { FC } from "react";

export interface TabData {
  key?: string;
  title: React.ReactNode;
  /** for user's custom extends */
  [key: string]: any;
}

export interface TabBarPropsType {
  /** call this function to switch tab */
  goToTab: (index: number) => void;
  /** tabs data */
  tabs: TabData[];
  /** current active tab */
  activeTab: number;
  /** use animate | default: true */
  animated: boolean;
  /** render the tab of tabbar */
  renderTab?: (tab: TabData) => React.ReactNode;
  /** render the underline of tabbar */
  renderUnderline?: (style: React.CSSProperties | any) => React.ReactNode;
  /** page size of tabbar's tab | default: 5 */
  page?: number;
  /** on tab click */
  onTabClick?: (tab: TabData, index: number) => void;
  /** tabBar's position | defualt: top */
  tabBarPosition?: "top" | "bottom" | "left" | "right";
  /** tabBar underline style */
  tabBarUnderlineStyle?: React.CSSProperties | any;
  /** tabBar background color */
  tabBarBackgroundColor?: string;
  /** tabBar active text color */
  tabBarActiveTextColor?: string;
  /** tabBar inactive text color */
  tabBarInactiveTextColor?: string;
  /** tabBar text style */
  tabBarTextStyle?: React.CSSProperties | any;
  instanceId: number;
}

export interface TabsProps {
  prefixCls?: string;
  /** tabs data */
  tabs: TabData[];
  /** TabBar's position | default: top */
  tabBarPosition?: "top" | "bottom" | "left" | "right";
  /** render for TabBar */
  renderTabBar?: ((props: TabBarPropsType) => React.ReactNode) | false;
  /** initial Tab, index or key */
  initialPage?: number | string;
  /** current tab, index or key */
  page?: number | string;
  /** whether to switch tabs with swipe gestrue in the content | default: true */
  swipeable?: boolean;

  /** whether to change tabs with animation | default: true */
  animated?: boolean;
  /** callback when tab is switched */
  onChange?: (tab: TabData, index: number) => void;
  /** on tab click */
  onTabClick?: (tab: TabData, index: number) => void;
  /** tab paging direction | default: horizontal */
  tabDirection?: "horizontal" | "vertical";
  /** tabBar underline style */
  tabBarUnderlineStyle?: React.CSSProperties;
  /** tabBar background color */
  tabBarBackgroundColor?: string;
  /** tabBar active text color */
  tabBarActiveTextColor?: string;
  /** tabBar inactive text color */
  tabBarInactiveTextColor?: string;
  /** tabBar text style */
  tabBarTextStyle?: React.CSSProperties;
}

const DefaultTabBar: FC<TabBarPropsType> = ({}) => {};

const Tabs: FC<TabsProps> = ({
  prefixCls,
  tabs,
  renderTabBar,
  initialPage,
  page,
  swipeable,
  animated,
  onChange,
  onTabClick,
  tabDirection,
  tabBarUnderlineStyle,
  tabBarBackgroundColor,
  tabBarActiveTextColor,
  tabBarInactiveTextColor,
  tabBarTextStyle
}) => {};

export default Tabs;
