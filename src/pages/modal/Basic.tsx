import React, { FC } from "react";
import WingBlank from "@/components/WingBlank";
import WhiteSpace from "@/components/WhiteSpace";
import Modal from "@/components/Modal/Modal";
import { useList } from "react-use";
import { ScrollView, Button, View } from "@/components/universe";
import List from "@/components/List";

const Basic: FC = () => {
  const [[modal1Visible, modal2Visible], { updateAt }] = useList([
    false,
    false
  ]);

  return (
    <WingBlank>
      <Button onTap={() => updateAt(0, true)}>Basic</Button>
      <WhiteSpace />
      <Modal
        visible={modal1Visible}
        transparent
        maskClosable={false}
        onClose={() => {
          console.log("close");
          updateAt(0, false);
        }}
        title="Title"
        footer={[
          {
            text: "Ok",
            onTap: () => {
              console.log("ok");
              updateAt(0, false);
            }
          }
        ]}
        // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        afterClose={() => {
          alert("afterClose");
        }}
      >
        <ScrollView style={{ height: "200rpx", overflow: "scroll" }} scrollY>
          <View>prprpr.....</View>
          <View>prprpr.....</View>
          <View>prprpr.....</View>
          <View>prprpr.....</View>
          <View>prprpr.....</View>
          <View>prprpr.....</View>
        </ScrollView>
      </Modal>

      <Button onClick={() => updateAt(1, true)}>popup</Button>
      <WhiteSpace />
      <Modal
        popup
        visible={modal2Visible}
        onClose={() => {
          updateAt(1, false);
        }}
        animationType="slide-up"
        afterClose={() => {
          alert("afterClose");
        }}
      >
        <List renderHeader={() => <div>委托买入</div>} className="popup-list">
          {["股票名称", "股票代码", "买入价格"].map((i, index) => (
            <List.Item key={index}>{i}</List.Item>
          ))}
          <List.Item>
            <Button
              type="primary"
              onClick={() => {
                updateAt(1, false);
              }}
            >
              买入
            </Button>
          </List.Item>
        </List>
      </Modal>
    </WingBlank>
  );
};

export default Basic;
