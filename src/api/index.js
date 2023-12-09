import CONFIG from "./../config";

export function loadUsers(options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    baseUrl: CONFIG.BASE_URL,
    resultsOrder: CONFIG.RESULTS_ORDER,
  };
  const realOptions = { ...defaultOptions, ...options };

  return fetch(
    `${realOptions.baseUrl}?results=${realOptions.results}&page=${realOptions.page}&seed=${realOptions.resultsOrder}`
  ).then((response) => response.json());
}
