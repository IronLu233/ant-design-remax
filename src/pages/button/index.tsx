import React, { FC } from "react";
import WingBlank from "@/components/WingBlank";
import Button from "@/components/Button";
import WhiteSpace from "@/components/WhiteSpace";
import { Image, View } from "@/components/universe";

const ButtonDemo: FC = () => {
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
      <Button icon="check-circle-o">with icon</Button>
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
          icon="check-circle-o"
          inline
          size="small"
          style={{ marginRight: "8rpx" }}
        >
          with icon and inline
        </Button>
        <Button icon="check-circle-o" inline size="small">
          with icon and inline
        </Button>
      </View>
      <WhiteSpace />

      {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
      {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

      <WhiteSpace />
      <Button type="primary" inline style={{ marginRight: "8rpx" }}>
        inline primary
      </Button>
      {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
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
      {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
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

export default ButtonDemo;
