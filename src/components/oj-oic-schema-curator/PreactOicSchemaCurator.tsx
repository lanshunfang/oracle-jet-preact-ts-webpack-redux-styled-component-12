import { h } from "preact";

import componentStrings = require("ojL10n!./resources/nls/oj-oic-schema-curator-strings");

function PreactOicSchemaCurator(props: {
  name: string;
}) {
  return <div>My name is {props.name}. {JSON.stringify(componentStrings)}</div>;
}

export default PreactOicSchemaCurator;