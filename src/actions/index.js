import { GET_NETOPIA_SIGN } from '@plone-collective/volto-netopia/actionTypes';

/**
 * getNetopiaSign function.
 * @function getNetopiaSign
 * @param {url} url URL.
 * @returns {Object} Object.
 */
export function getNetopiaSign(url) {
  return {
    type: GET_NETOPIA_SIGN,
    request: {
      op: 'get',
      path: `${url}/@netopia.sign`,
      headers: {
        Accept: 'application/json',
      },
    },
  };
}
