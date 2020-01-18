import React, { FC, ReactNode } from "react";
import BasicDialog from "../BasicDialog";
import Animate from "../Animate";
import classNames from "@/utils/classnames";
import { View } from "../universe";
import "./style/index.less";

export interface ModalProps {
  prefixCls?: string;
  className?: string;
  popup?: boolean;
  visible?: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({
  prefixCls,
  className,
  popup,
  visible,
  children
}) => {
  const wrapCls = classNames({
    [`${prefixCls}-wrap-popup`]: popup,
    [`${prefixCls}-wrap`]: visible
  });

  const cls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-popup`]: popup
    },
    `${prefixCls}-popup-slide-up`
  );
  const maskCls = classNames(`${prefixCls}-mask`);
  const contentCls = classNames(`${prefixCls}-content`);

  return (
    <View>
      <Animate timeout={200} in={visible} transitionName="ram-fade">
        <View className={maskCls}></View>
      </Animate>
      <View className={wrapCls}>
        <Animate timeout={200} in={visible} transitionName="ram-slide-up">
          <View className={cls}>
            <View className={contentCls}>{children}</View>
          </View>
        </Animate>
      </View>
    </View>
  );
};

Modal.defaultProps = {
  prefixCls: "ram-modal",
  popup: true
};

export default Modal;
