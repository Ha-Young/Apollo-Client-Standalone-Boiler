import { storiesOf } from "@storybook/react";
import React from "react";

import Button from ".";

storiesOf("Button", module)
  .add("default", () => <Button>Hello</Button>)
  .add("reverse", () => <Button reverse>Hello</Button>)
  .add("another palette", () => <Button palette="secondary">Hello</Button>)
  .add("disabled", () => <Button disabled>Hello</Button>)
  .add("transparent", () => <Button transparent>Hello</Button>)
  .add("height", () => <Button height={100}>Hello</Button>)
  .add("width", () => <Button width={"300px"}>Hello</Button>)
  .add("height width", () => <Button height={200} width={"300px"}>Hello</Button>)
  .add("link", () => (
    <Button href="https://github.com/ha-young">My github</Button>
  ));
