import React, { FC } from "react";
import { View, Button } from "@/components/universe";
import Modal from "@/components/Modal/Modal";
import { useToggle } from "react-use";

const ModalDemo: FC = () => {
  const [open, setOpen] = useToggle(false);
  return (
    <View>
      <Modal visible={open}>
        <View style={{ height: "500rpx", background: "pink" }}>
          <Button onTap={() => setOpen(false)}>关闭</Button>
        </View>
      </Modal>
      <Button onTap={() => setOpen(true)}>打开</Button>
    </View>
  );
};

export default ModalDemo;
