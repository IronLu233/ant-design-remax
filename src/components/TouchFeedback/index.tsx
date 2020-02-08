import React, { FC, ReactElement, CSSProperties } from "react";
import { useToggle } from "react-use";
import classnames from "@/utils/classnames";

export interface TouchProps {
  onTouchStart?: (event: any) => any;
  onTouchMove?: (event: any) => any;
  onTouchEnd?: (event: any) => any;
  onTouchCancel?: (event: any) => any;
}

interface StyleProps {
  style?: CSSProperties;
  className?: string;
}

export interface TouchFeedbackProps {
  disabled?: boolean;
  activeClassName?: string;
  children: ReactElement<TouchProps & StyleProps>;
}

const TouchFeedback: FC<TouchFeedbackProps> = props => {
  let { children, disabled, activeClassName } = props;

  const child = React.Children.only(children);
  const { className } = child.props;

  return React.cloneElement(child, {
    hoverClass: classnames(className, { [activeClassName || ""]: !disabled }),
    hoverStartTime: 1,
    hoverStayTime: 300
  });
};

TouchFeedback.defaultProps = {
  disabled: false
};

export default TouchFeedback;
