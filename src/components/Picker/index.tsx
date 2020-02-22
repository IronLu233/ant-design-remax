import React, { FC, useCallback } from "react";
import { View } from "../universe";
import Modal from "../Modal/Modal";
import { useToggle, usePrevious } from "react-use";
import PickerView, { PickerViewProps } from "../PickerView";
import classNames from "@/utils/classnames";
import "./index.less";

export interface PickerProps extends PickerViewProps {
  visible?: boolean;
  title?: string;
  popupPrefixCls?: string;
}

const Picker: FC<PickerProps> = ({
  children,
  visible: propsVisible,
  popupPrefixCls,
  prefixCls,
  title,
  ...restProps
}) => {
  const [visible, setVisible] = useToggle(propsVisible || false);
  const onOpenPicker = useCallback(() => {
    setVisible(true);
  }, []);
  const prevPropsVisible = usePrevious(propsVisible);
  if (
    prevPropsVisible !== undefined &&
    propsVisible !== undefined &&
    prevPropsVisible !== propsVisible
  ) {
    setVisible(propsVisible);
  }

  return (
    <View>
      <Modal
        prefixCls={prefixCls}
        visible={visible}
        popup
        animationType="slide-up"
      >
        <View className={popupPrefixCls}>
          <View className={`${popupPrefixCls}-header`}>
            <View
              className={classNames(
                `${popupPrefixCls}-item`,
                `${popupPrefixCls}-header-left`
              )}
            >
              取消
            </View>
            <View
              className={classNames(
                `${popupPrefixCls}-item`,
                `${popupPrefixCls}-title`
              )}
            >
              {title}
            </View>
            <View
              className={classNames(
                `${popupPrefixCls}-item`,
                `${popupPrefixCls}-header-right`
              )}
            >
              确定
            </View>
          </View>
          <PickerView {...restProps} />
          {/* <PickerView>
            <PickerViewColumn>
              <View>1</View>
              <View>2</View>
            </PickerViewColumn>
          </PickerView> */}
        </View>
      </Modal>
      <PickerView {...restProps} />
      <View onClick={onOpenPicker}>{children}</View>
    </View>
  );
};

Picker.defaultProps = {
  popupPrefixCls: "ram-picker-popup"
  // prefixCls:
};

export default Picker;
