import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type ErrorResponse = {
  errorData: { message: string };
  hasError: boolean;
};

export default {
  async makeGetRequest(
    url: string,
    errorMessageBuilder: (res: AxiosResponse | ErrorResponse) => any = (res) => res,
    opts: AxiosRequestConfig = {}
  ): Promise<AxiosResponse | ErrorResponse> {
    const headers = {
      Accept: 'application/json',
    };

    const options: AxiosRequestConfig = {
      headers,
      timeout: 120000,
      ...opts,
    };

    const instance = axios.create(options);

    try {
      const response: AxiosResponse = await instance.get(url);
      return response;
    } catch (error) {
      return this.getErrorResponse(error, errorMessageBuilder);
    }
  },

  getErrorResponse(
    error: any,
    errorMessageBuilder: (res: AxiosResponse | ErrorResponse) => any
  ): ErrorResponse {
    let response: ErrorResponse = { errorData: { message: error.message }, hasError: true };

    if (error.response) {
      response = { errorData: error.response.data, hasError: true, ...error.response };
    } else if (error.request) {
      response = { errorData: {}, hasError: true, ...error.request };
    }

    const errorMessage = errorMessageBuilder(response);
    response.errorData = { ...response.errorData, ...errorMessage };
    return response;
  },
};
