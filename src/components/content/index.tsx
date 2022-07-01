import { h } from "preact";

import { OjOicSchemaCurator } from '../oj-oic-schema-curator/loader';

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <OjOicSchemaCurator />
    </div>
  );
};
