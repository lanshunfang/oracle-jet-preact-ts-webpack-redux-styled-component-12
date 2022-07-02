import Context from "ojs/ojcontext";
import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { Component, ComponentChild, h } from "preact";
import { Content } from "./content/index";
import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  appName?: string;
  userLogin?: string;
}

@customElement("app-root")
export class App extends Component<ExtendGlobalProps<Props>> {
  static defaultProps: Props = {
    appName: 'App Name',
    userLogin: "john.hancock@oracle.com"
  };

  render(props: ExtendGlobalProps<Props>): ComponentChild {
    return (
      <div id="appContainer" class="oj-web-applayout-page">
        <Header
          appName={props.appName} 
          userLogin={props.userLogin} 
        />
        <Content />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();
  }
}
