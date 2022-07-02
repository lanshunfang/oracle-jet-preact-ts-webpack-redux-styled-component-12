import { h } from "preact";

// import { OjOicSchemaCurator } from '../oj-oic-schema-curator/loader';
import PreactOicSchemaCurator from '../oj-oic-schema-curator/PreactOicSchemaCurator';

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <PreactOicSchemaCurator name="Preact Function COMP for OIC" />
    </div>
  );
};
