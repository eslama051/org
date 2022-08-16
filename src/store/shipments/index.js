import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      shipments: [
        {
          id: 5478955454,
          // canDelete: true,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          package: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "45",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "40",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 54789452564,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "10",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "45",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 547895666544,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "230",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "56",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 547895675664,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "650",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "4540",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 547895667754,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "40",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "40",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 54789767657564,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "450",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "48",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 5478976865564,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "31",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "421",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
        {
          id: 547895687684,
          date: "17/9/2020",
          state: "stored In",
          customer: {
            firstName: "mohamed",
            lastName: "Ebrahim",
            id: 214789,
          },
          //delivering details
          delivering: {
            flight: "Dlight Date",
            destination: "Destination",
            type: "Destination",
            status: "Flight Date",
          },
          pagekage: [
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "40",
            },
            {
              title: "iphone 12 Pro Max",
              size: "2TB",
              color: "Gold",
              mount: "30",
            },
            {
              title: "iphone 12 Pro Max",
              size: "500GB",
              color: "Gold",
              mount: "60",
            },
            {
              title: "iphone 12 Pro Max",
              size: "1TB",
              color: "Gold",
              mount: "40",
            },
            {
              title: "iphone 12 Pro Max",
              size: "7TB",
              color: "Gold",
              mount: "80",
            },
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
