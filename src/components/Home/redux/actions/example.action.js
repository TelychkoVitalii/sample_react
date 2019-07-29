import { EXAMPLE_REQUEST, EXAMPLE_REQUEST_SUCCESS, EXAMPLE_REQUEST_FAILURE} from "../constants/example.constant";

export const getExample = data => ({ type: EXAMPLE_REQUEST, data });
export const getExampleSuccess = payload => ({ type: EXAMPLE_REQUEST_SUCCESS, payload });
export const getExampleFailure = error => ({ type: EXAMPLE_REQUEST_FAILURE, error });