const favouriteBeersReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVOURITE_BEER:
        return {
          ...state,
          favouriteBeers: [...state.favouriteBeers, action.payload],
        };
      case REMOVE_FAVOURITE_BEER:
        return {
          ...state,
          favouriteBeers: state.favouriteBeers.filter(
            (beer) => beer.id !== action.payload
          ),
        };
      case ERROR_FETCHING_BEER:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default favouriteBeersReducer;