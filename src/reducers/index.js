/**
 * Data Figure reducer.
 * @module reducers/netopiaSign
 */

 import { GET_NETOPIA_SIGN } from '@plone-collective/volto-netopia/actionTypes';

const initialState = {
  get: {
    loaded: false,
    loading: false,
    error: null,
  },
};

/**
 * Get request key
 * @function getRequestKey
 * @param {string} actionType Action type.
 * @returns {string} Request key.
 */
function getRequestKey(actionType) {
  return actionType.split('_')[0].toLowerCase();
}

/**
 * Data figure reducer.
 * @function netopiaSign
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export function netopiaSign(state = initialState, action = {}) {
  let { result } = action;
  switch (action.type) {
    case `${GET_NETOPIA_SIGN}_PENDING`:
      return {
        ...state,
        [getRequestKey(action.type)]: {
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case `${GET_NETOPIA_SIGN}_SUCCESS`:
      return {
        ...state,
        [getRequestKey(action.type)]: {
          loading: false,
          loaded: true,
          error: null,
        },
        ...result,
      };
    case `${GET_NETOPIA_SIGN}_FAIL`:
      return {
        ...state,
        [getRequestKey(action.type)]: {
          loading: false,
          loaded: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
