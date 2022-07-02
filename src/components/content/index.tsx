import { h } from "preact";

// import { OjOicSchemaCurator } from '../oj-oic-schema-curator/loader';
import Counter from '../counter/counter';

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <Counter name="Preact Function COMP for OIC" />
    </div>
  );
};
