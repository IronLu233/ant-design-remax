import React from "react";
import { View, Text } from "@/components/universe";
import WingBlank from "@/components/WingBlank";
import WhiteSpace from "@/components/WhiteSpace";
import Card from "@/components/Card";

const CardDemo: React.FC = () => {
  return (
    <View className="bg-gray">
      <View className="demoTitle">Default</View>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<Text>this is extra</Text>}
          />
          <Card.Body>
            <View>This is content of `Card`</View>
          </Card.Body>
          <Card.Footer
            content="footer content"
            extra={<View>extra footer content</View>}
          />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
      <WhiteSpace size="lg" />
      <View className="demoTitle">Full</View>
      <Card full>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<Text>this is extra</Text>}
        />
        <Card.Body>
          <View>This is content of `Card`</View>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<View>extra footer content</View>}
        />
      </Card>
    </View>
  );
};
export default CardDemo;
