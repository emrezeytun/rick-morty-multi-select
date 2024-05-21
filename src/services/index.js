import { baseUrl } from '../constants';
import { makeGetRequest } from '../helper/httpHelper';

async function getCharacterByName(name) {
  const url = `${baseUrl}/character/?name=${name}`;
  return makeGetRequest(url);
}

export { getCharacterByName };
