import "css!./oj-oic-schema-curator-styles.css";
import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { Component, ComponentChild, h } from "preact";
import componentStrings = require("ojL10n!./resources/nls/oj-oic-schema-curator-strings");

import ArrayDataProvider = require('ojs/ojarraydataprovider');

const mockData = [
  {
    "EmployeeId": 10,
    "FirstName": "Frank",
    "LastName": "Stout",
    "Revenue": 33200,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 5,
    "Status": "Pending",
    "Salary": 159000,
    "Bonus": 47900,
    "DepartmentId": 320
  },
  {
    "EmployeeId": 20,
    "FirstName": "Mara",
    "LastName": "Rivers",
    "Revenue": 17200,
    "TargetComplete": 40,
    "TargetIncomplete": 60,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 200000,
    "Bonus": 45300,
    "DepartmentId": 40
  },
  {
    "EmployeeId": 30,
    "FirstName": "Karina",
    "LastName": "Cameron",
    "Revenue": 30100,
    "TargetComplete": 30,
    "TargetIncomplete": 70,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 279000,
    "Bonus": 79700,
    "DepartmentId": 370
  },
  {
    "EmployeeId": 40,
    "FirstName": "Marilyn",
    "LastName": "Short",
    "Revenue": 48800,
    "TargetComplete": 90,
    "TargetIncomplete": 10,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 106000,
    "Bonus": 77500,
    "DepartmentId": 310
  },
  {
    "EmployeeId": 50,
    "FirstName": "Audra",
    "LastName": "Long",
    "Revenue": 40700,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 123000,
    "Bonus": 39900,
    "DepartmentId": 490
  },
  {
    "EmployeeId": 60,
    "FirstName": "Woods",
    "LastName": "Jefferson",
    "Revenue": 29000,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 145000,
    "Bonus": 49600,
    "DepartmentId": 160
  },
  {
    "EmployeeId": 70,
    "FirstName": "Spears",
    "LastName": "Howe",
    "Revenue": 32900,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 5,
    "Status": "Approved",
    "Salary": 120000,
    "Bonus": 30300,
    "DepartmentId": 460
  },
  {
    "EmployeeId": 80,
    "FirstName": "Kelsey",
    "LastName": "Gomez",
    "Revenue": 34200,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 1,
    "Status": "Pending",
    "Salary": 147000,
    "Bonus": 79800,
    "DepartmentId": 330
  },
  {
    "EmployeeId": 90,
    "FirstName": "Miriam",
    "LastName": "Branch",
    "Revenue": 42800,
    "TargetComplete": 90,
    "TargetIncomplete": 10,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 117000,
    "Bonus": 43000,
    "DepartmentId": 50
  },
  {
    "EmployeeId": 100,
    "FirstName": "Tisha",
    "LastName": "Parks",
    "Revenue": 17800,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 1,
    "Status": "Pending",
    "Salary": 136000,
    "Bonus": 33800,
    "DepartmentId": 200
  },
  {
    "EmployeeId": 110,
    "FirstName": "Dollie",
    "LastName": "Pittman",
    "Revenue": 15700,
    "TargetComplete": 40,
    "TargetIncomplete": 60,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 121000,
    "Bonus": 60600,
    "DepartmentId": 500
  },
  {
    "EmployeeId": 120,
    "FirstName": "Leticia",
    "LastName": "Goodman",
    "Revenue": 16200,
    "TargetComplete": 80,
    "TargetIncomplete": 20,
    "Rating": 5,
    "Status": "Pending",
    "Salary": 295000,
    "Bonus": 74900,
    "DepartmentId": 300
  },
  {
    "EmployeeId": 130,
    "FirstName": "Harrison",
    "LastName": "Jarvis",
    "Revenue": 32500,
    "TargetComplete": 30,
    "TargetIncomplete": 70,
    "Rating": 1,
    "Status": "Pending",
    "Salary": 125000,
    "Bonus": 59600,
    "DepartmentId": 80
  },
  {
    "EmployeeId": 140,
    "FirstName": "Salinas",
    "LastName": "Richardson",
    "Revenue": 49600,
    "TargetComplete": 80,
    "TargetIncomplete": 20,
    "Rating": 5,
    "Status": "Pending",
    "Salary": 228000,
    "Bonus": 50500,
    "DepartmentId": 50
  },
  {
    "EmployeeId": 150,
    "FirstName": "Barry",
    "LastName": "Maxwell",
    "Revenue": 42800,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 5,
    "Status": "Pending",
    "Salary": 269000,
    "Bonus": 52200,
    "DepartmentId": 400
  },
  {
    "EmployeeId": 160,
    "FirstName": "Diaz",
    "LastName": "Velazquez",
    "Revenue": 24100,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 242000,
    "Bonus": 45000,
    "DepartmentId": 370
  },
  {
    "EmployeeId": 170,
    "FirstName": "Minnie",
    "LastName": "Riley",
    "Revenue": 12000,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 2,
    "Status": "Approved",
    "Salary": 107000,
    "Bonus": 67500,
    "DepartmentId": 250
  },
  {
    "EmployeeId": 180,
    "FirstName": "Fulton",
    "LastName": "Bernard",
    "Revenue": 29400,
    "TargetComplete": 80,
    "TargetIncomplete": 20,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 259000,
    "Bonus": 37400,
    "DepartmentId": 170
  },
  {
    "EmployeeId": 190,
    "FirstName": "Chandler",
    "LastName": "Mccarty",
    "Revenue": 30100,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 1,
    "Status": "Approved",
    "Salary": 185000,
    "Bonus": 74000,
    "DepartmentId": 250
  },
  {
    "EmployeeId": 200,
    "FirstName": "Flowers",
    "LastName": "Hernandez",
    "Revenue": 20700,
    "TargetComplete": 70,
    "TargetIncomplete": 30,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 135000,
    "Bonus": 39300,
    "DepartmentId": 260
  },
  {
    "EmployeeId": 210,
    "FirstName": "Donaldson",
    "LastName": "Sharp",
    "Revenue": 42300,
    "TargetComplete": 70,
    "TargetIncomplete": 30,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 176000,
    "Bonus": 67600,
    "DepartmentId": 250
  },
  {
    "EmployeeId": 220,
    "FirstName": "Melanie",
    "LastName": "Gamble",
    "Revenue": 30100,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 219000,
    "Bonus": 52400,
    "DepartmentId": 230
  },
  {
    "EmployeeId": 230,
    "FirstName": "Leona",
    "LastName": "Erickson",
    "Revenue": 11400,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 1,
    "Status": "Pending",
    "Salary": 185000,
    "Bonus": 57300,
    "DepartmentId": 160
  },
  {
    "EmployeeId": 240,
    "FirstName": "Dionne",
    "LastName": "Howell",
    "Revenue": 44200,
    "TargetComplete": 90,
    "TargetIncomplete": 10,
    "Rating": 1,
    "Status": "Approved",
    "Salary": 211000,
    "Bonus": 65800,
    "DepartmentId": 130
  },
  {
    "EmployeeId": 250,
    "FirstName": "June",
    "LastName": "Warren",
    "Revenue": 39500,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 222000,
    "Bonus": 65200,
    "DepartmentId": 260
  },
  {
    "EmployeeId": 260,
    "FirstName": "Carey",
    "LastName": "Johns",
    "Revenue": 36000,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 233000,
    "Bonus": 69500,
    "DepartmentId": 190
  },
  {
    "EmployeeId": 270,
    "FirstName": "Estelle",
    "LastName": "Bowers",
    "Revenue": 27600,
    "TargetComplete": 40,
    "TargetIncomplete": 60,
    "Rating": 2,
    "Status": "Approved",
    "Salary": 212000,
    "Bonus": 37700,
    "DepartmentId": 120
  },
  {
    "EmployeeId": 280,
    "FirstName": "Rena",
    "LastName": "Blanchard",
    "Revenue": 16000,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 135000,
    "Bonus": 51000,
    "DepartmentId": 380
  },
  {
    "EmployeeId": 290,
    "FirstName": "Hinton",
    "LastName": "Tillman",
    "Revenue": 42400,
    "TargetComplete": 80,
    "TargetIncomplete": 20,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 134000,
    "Bonus": 49600,
    "DepartmentId": 40
  },
  {
    "EmployeeId": 300,
    "FirstName": "Gloria",
    "LastName": "Everett",
    "Revenue": 42100,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 278000,
    "Bonus": 38400,
    "DepartmentId": 180
  },
  {
    "EmployeeId": 310,
    "FirstName": "Ware",
    "LastName": "Simon",
    "Revenue": 49500,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 142000,
    "Bonus": 43900,
    "DepartmentId": 190
  },
  {
    "EmployeeId": 320,
    "FirstName": "Carolina",
    "LastName": "Holmes",
    "Revenue": 22700,
    "TargetComplete": 80,
    "TargetIncomplete": 20,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 181000,
    "Bonus": 52000,
    "DepartmentId": 320
  },
  {
    "EmployeeId": 330,
    "FirstName": "Day",
    "LastName": "Newman",
    "Revenue": 46000,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 5,
    "Status": "Approved",
    "Salary": 117000,
    "Bonus": 66700,
    "DepartmentId": 290
  },
  {
    "EmployeeId": 340,
    "FirstName": "Nielsen",
    "LastName": "Harrell",
    "Revenue": 13800,
    "TargetComplete": 30,
    "TargetIncomplete": 70,
    "Rating": 5,
    "Status": "Pending",
    "Salary": 212000,
    "Bonus": 39600,
    "DepartmentId": 70
  },
  {
    "EmployeeId": 350,
    "FirstName": "Barbara",
    "LastName": "Moore",
    "Revenue": 37600,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 185000,
    "Bonus": 61800,
    "DepartmentId": 340
  },
  {
    "EmployeeId": 360,
    "FirstName": "Reese",
    "LastName": "Green",
    "Revenue": 27500,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 168000,
    "Bonus": 72500,
    "DepartmentId": 30
  },
  {
    "EmployeeId": 370,
    "FirstName": "Paige",
    "LastName": "Gregory",
    "Revenue": 22300,
    "TargetComplete": 70,
    "TargetIncomplete": 30,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 270000,
    "Bonus": 33500,
    "DepartmentId": 360
  },
  {
    "EmployeeId": 380,
    "FirstName": "Jaclyn",
    "LastName": "Mann",
    "Revenue": 29700,
    "TargetComplete": 40,
    "TargetIncomplete": 60,
    "Rating": 1,
    "Status": "Approved",
    "Salary": 224000,
    "Bonus": 76400,
    "DepartmentId": 120
  },
  {
    "EmployeeId": 390,
    "FirstName": "Lula",
    "LastName": "Fowler",
    "Revenue": 40700,
    "TargetComplete": 60,
    "TargetIncomplete": 40,
    "Rating": 3,
    "Status": "Approved",
    "Salary": 211000,
    "Bonus": 57000,
    "DepartmentId": 320
  },
  {
    "EmployeeId": 400,
    "FirstName": "Regina",
    "LastName": "Watson",
    "Revenue": 10600,
    "TargetComplete": 50,
    "TargetIncomplete": 50,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 211000,
    "Bonus": 31600,
    "DepartmentId": 470
  },
  {
    "EmployeeId": 410,
    "FirstName": "Candice",
    "LastName": "Hardin",
    "Revenue": 48200,
    "TargetComplete": 90,
    "TargetIncomplete": 10,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 191000,
    "Bonus": 73400,
    "DepartmentId": 110
  },
  {
    "EmployeeId": 420,
    "FirstName": "Pate",
    "LastName": "Haney",
    "Revenue": 12600,
    "TargetComplete": 90,
    "TargetIncomplete": 10,
    "Rating": 2,
    "Status": "Approved",
    "Salary": 247000,
    "Bonus": 71600,
    "DepartmentId": 200
  },
  {
    "EmployeeId": 430,
    "FirstName": "Snider",
    "LastName": "Shepard",
    "Revenue": 30900,
    "TargetComplete": 30,
    "TargetIncomplete": 70,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 230000,
    "Bonus": 59200,
    "DepartmentId": 20
  },
  {
    "EmployeeId": 440,
    "FirstName": "Fleming",
    "LastName": "Torres",
    "Revenue": 13500,
    "TargetComplete": 40,
    "TargetIncomplete": 60,
    "Rating": 5,
    "Status": "Approved",
    "Salary": 111000,
    "Bonus": 69800,
    "DepartmentId": 120
  },
  {
    "EmployeeId": 450,
    "FirstName": "Terrie",
    "LastName": "Grimes",
    "Revenue": 47200,
    "TargetComplete": 40,
    "TargetIncomplete": 60,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 118000,
    "Bonus": 42900,
    "DepartmentId": 460
  },
  {
    "EmployeeId": 460,
    "FirstName": "Hallie",
    "LastName": "Frye",
    "Revenue": 20900,
    "TargetComplete": 60,
    "TargetIncomplete": 40,
    "Rating": 4,
    "Status": "Approved",
    "Salary": 218000,
    "Bonus": 50000,
    "DepartmentId": 340
  },
  {
    "EmployeeId": 470,
    "FirstName": "Jerry",
    "LastName": "Salazar",
    "Revenue": 43300,
    "TargetComplete": 90,
    "TargetIncomplete": 10,
    "Rating": 5,
    "Status": "Approved",
    "Salary": 103000,
    "Bonus": 49800,
    "DepartmentId": 440
  },
  {
    "EmployeeId": 480,
    "FirstName": "Sally",
    "LastName": "Barnett",
    "Revenue": 39500,
    "TargetComplete": 30,
    "TargetIncomplete": 70,
    "Rating": 3,
    "Status": "Pending",
    "Salary": 132000,
    "Bonus": 80000,
    "DepartmentId": 160
  },
  {
    "EmployeeId": 490,
    "FirstName": "Goldie",
    "LastName": "Kelly",
    "Revenue": 32600,
    "TargetComplete": 20,
    "TargetIncomplete": 80,
    "Rating": 5,
    "Status": "Approved",
    "Salary": 102000,
    "Bonus": 39000,
    "DepartmentId": 10
  },
  {
    "EmployeeId": 500,
    "FirstName": "Brianna",
    "LastName": "Compton",
    "Revenue": 30400,
    "TargetComplete": 60,
    "TargetIncomplete": 40,
    "Rating": 4,
    "Status": "Pending",
    "Salary": 114000,
    "Bonus": 78200,
    "DepartmentId": 280
  }
];

type Props = {
  message?: string;
}

/**
 * 
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/
@customElement("oj-oic-schema-curator")
export class OjOicSchemaCurator extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
  message: "Hello from oj-oic-schema-curator!"
};

readonly dataprovider = new ArrayDataProvider(mockData, {
    keyAttributes: 'EmployeeId'
});

  readonly columnArray: any[] = [
    {
      headerText: 'Employee Id',
      footerTemplate: 'revenueLabelTemplate',
      sortable: 'enabled',
      sortProperty: 'EmployeeId',
      id: 'id'
    },
    {
      headerText: 'Employee Name',
      sortable: 'enabled',
      sortProperty: 'FirstName',
      id: 'name'
    },
    {
      headerText: 'Sales Revenue',
      footerTemplate: 'revenueTotalTemplate',
      sortProperty: 'Revenue',
      id: 'revenue'
    },
    { headerText: 'Rating', sortable: 'disabled', id: 'rating' },
    { headerText: 'Sales Target Achievement', sortable: 'disabled', id: 'target' }
  ];

render(props: Readonly<Props>): ComponentChild {
  return <p>
    Test
      <oj-table
            id="table"
            aria-label="Sales Representative Table"
            data={this.dataprovider}
            rowRenderer={(context) => {return ''}}
            columns={this.columnArray}
            class="demo-table-container">
            <template slot="rowTemplate" data-oj-as="row" />
            {/* <template slot="revenueLabelTemplate">
              <span class="oj-typography-subheading-xs">Total Revenue</span>
            </template>
            <template slot="revenueTotalTemplate">
              <oj-input-text
                id="table:revenue_total"
                value="[[revenue_total_func()]]"
                readonly="true"
                converter="[[revenueConverter]]"></oj-input-text>
            </template> */}
          </oj-table>
    </p>;
  }
}
