import { LogingSignin } from ".";

export default {
  title: "Components/LogingSignin",
  component: LogingSignin,
  argTypes: {
    property1: {
      options: ["SING-IN", "LOG-IN"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "SING-IN",
    className: {},
    SINGInClassName: {},
    overlapGroupClassName: {},
  },
};
