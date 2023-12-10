import queryString from "query-string";

import CONFIG from "./../config";

export function loadUsers(options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    baseUrl: CONFIG.BASE_URL,
    seed: CONFIG.RESULTS_ORDER,
  };
  const { baseUrl, ...realOptions } = {
    ...defaultOptions,
    ...options,
  };

  return fetch(`${baseUrl}?${queryString.stringify(realOptions)}`).then(
    (response) => response.json()
  );
}
