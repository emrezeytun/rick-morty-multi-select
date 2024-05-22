import { baseUrl } from '@constants';
import { httpHelper } from '@helper';

async function getCharacterByName(name: string): Promise<any> {
  const url = `${baseUrl}/character/?name=${name}`;
  return httpHelper.makeGetRequest(url);
}

export { getCharacterByName };
