import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [{
    name: "Margherita",
    ingredients: [
      "Traditional Sauce",
      "Mozzarella"
    ]
  }, {
    name: "Pepperoni",
    ingredients: [
      "Traditional Sauce",
      "Mozzarella",
      "Pepperoni"
    ]
  }, {
    name: "Four Seasons",
    ingredients: [
      "Traditional Sauce",
      "Mozzarella",
      "Mushrooms",
      "Ham",
      "Black Olives",
      "Artichokes"
    ]
  }, {
    name: "Romana",
    ingredients: [
      "Traditional Sauce",
      "Mozzarella",
      "Anchovies",
      "Capers",
      "Oregano"
    ]
  }, {
    name: "Capricciosa",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Mushrooms",
      "Ham",
      "Eggs",
      "Artichoke",
      "Cocktail Sausages",
      "Green Olives"
    ]
  }, {
    name: "Calzone",
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Ham",
      "Mushrooms"
    ]
  }
  ],
  loading: false,
  openModal: false,
  openLogModal: false,
  showName: "",
  order: {}
};

function dataFetchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.CLEAR:
      return INITIAL_STATE;
    case actionTypes.GET_DATA: {
      return Object.assign({}, state, {
        loading: true
      });
    }


    case actionTypes.FETCH_ORDER: {
      return Object.assign({}, state, {
        order: action.payload,
        openModal: true,
      });
    }

    case actionTypes.FETCH_LOG: {
      return Object.assign({}, state, {
        order: action.payload,
        openLogModal: true,
      });
    }

    case actionTypes.UPDATE: {
      return Object.assign({}, state, {
        ...state,
        ...action.payload
      });
    }
    default:
      return state;
  }
}

export default dataFetchReducer;
