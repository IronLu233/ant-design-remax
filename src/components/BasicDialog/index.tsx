import React, { FC } from "react";
import { View } from "../universe";
import CSSTransition from "../Animate";

interface BaseDialogProps {
  visible?: boolean;
  className?: string;
  maskClassName?: string;
  maskTransitionName?: string;
  contentClassName?: string;
  contentTransitionName?: string;
  timeout: number;
}

const BasicDialog: FC<BaseDialogProps> = ({
  timeout,
  visible,
  children,
  className,
  maskClassName,
  maskTransitionName: maskTransitionName,
  contentClassName,
  contentTransitionName
}) => {
  // const child = React.Children.only(children);
  return (
    <CSSTransition
      className={maskClassName}
      transitionName={maskTransitionName}
      timeout={timeout}
      in={visible}
    >
      <View />
    </CSSTransition>
  );
};

export default BasicDialog;
