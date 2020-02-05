import React, { FC } from "react";
import WingBlank from "@/components/WingBlank";
import Button from "@/components/Button";
import WhiteSpace from "@/components/WhiteSpace";
import { Image, View } from "@/components/universe";

const ButtonBasicDemo: FC = () => {
  return (
    <WingBlank>
      <Button>default</Button>
      <WhiteSpace />
      <Button disabled>default disabled</Button>
      <WhiteSpace />

      <Button type="primary">primary</Button>
      <WhiteSpace />
      <Button type="primary" disabled>
        primary disabled
      </Button>
      <WhiteSpace />

      <Button type="warning">warning</Button>
      <WhiteSpace />
      <Button type="warning" disabled>
        warning disabled
      </Button>
      <WhiteSpace />

      <Button loading>loading button</Button>
      <WhiteSpace />
      <Button icon="check-circle">with icon</Button>
      <WhiteSpace />
      <Button
        icon={
          <Image src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" />
        }
      >
        with custom icon
      </Button>
      <WhiteSpace />
      <View>
        <Button
          icon="check-circle"
          inline
          size="small"
          style={{ marginRight: "8rpx" }}
        >
          with icon and inline
        </Button>
        <Button icon="check-circle" inline size="small">
          with icon and inline
        </Button>
      </View>
      <WhiteSpace />

      <WhiteSpace />
      <Button type="primary" inline style={{ marginRight: "8rpx" }}>
        inline primary
      </Button>
      <Button
        type="ghost"
        inline
        style={{ marginRight: "8rpx" }}
        className="am-button-borderfix"
      >
        inline ghost
      </Button>

      <WhiteSpace />
      <Button
        type="primary"
        inline
        size="small"
        style={{ marginRight: "8rpx" }}
      >
        primary
      </Button>
      <Button type="primary" inline size="small" disabled>
        primary disabled
      </Button>
      <WhiteSpace />
      <Button type="ghost" inline size="small" style={{ marginRight: "8rpx" }}>
        ghost
      </Button>
      <Button
        type="ghost"
        inline
        size="small"
        className="am-button-borderfix"
        disabled
      >
        ghost disabled
      </Button>
    </WingBlank>
  );
};

export default ButtonBasicDemo;
