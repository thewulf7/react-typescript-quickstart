import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
storiesOf("Welcome", module).add("to Storybook", () => (React.createElement(Welcome, { showApp: linkTo("Button") })));
storiesOf("Button", module)
    .add("with text", () => (React.createElement(Button, { onClick: action("clicked") }, "Hello Button")))
    .add("with some emoji", () => (React.createElement(Button, { onClick: action("clicked") }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF")));
//# sourceMappingURL=index.stories.js.map