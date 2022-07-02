import { h } from "preact";

import styled from 'styled-components';

import componentStrings = require("ojL10n!./resources/nls/oj-oic-schema-curator-strings");

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

function PreactOicSchemaCurator(props: {
  name: string;
}) {
  return <Title>My name is {props.name}. {JSON.stringify(componentStrings)}</Title>;
}

export default PreactOicSchemaCurator;