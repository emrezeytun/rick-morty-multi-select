import axios from 'axios';

async function makeGetRequest(url) {
  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export { makeGetRequest };
