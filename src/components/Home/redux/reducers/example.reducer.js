import { EXAMPLE_REQUEST, EXAMPLE_REQUEST_SUCCESS, EXAMPLE_REQUEST_FAILURE } from "../constants/example.constant";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const Example_reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case EXAMPLE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case EXAMPLE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};