import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import componentStrings = require("ojL10n!./resources/nls/oj-hello-world-strings");
import "css!./oj-hello-world-styles.css";

type Props = {
  message?: string;
}

/**
 * 
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/
@customElement("oj-hello-world")
export class OjHelloWorld extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
  message: "Hello from oj-hello-world!"
};

render(props: Readonly<Props>): ComponentChild {
  return<p>{ props.message }</p>;
  }
}
