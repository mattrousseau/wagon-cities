const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" };
  }

  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
