import 'whatwg-fetch';


export default () => {
  const BASE_PATH = 'https://api.github.com';

  const DEFAULT_HEADERS = {
    'Origin': 'http://localhost',
  }

  const searchRepositories = textQuery =>
    fetch(
      `${BASE_PATH}/search/repositories?q=${textQuery}`,
      { method: 'GET', headers: DEFAULT_HEADERS }
    );

  return { searchRepositories };
}
