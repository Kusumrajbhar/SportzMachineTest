import axios from "axios";

export const buildHeader = (headerParams) => {
  const token = localStorage.getItem("token");
  const header = {
    Accept: "application/json",
    "mintgenie-client-type": "web",
    Authorization: `${token}`,
    ...headerParams,
  };

  return header;
};

//request called in api
export const request = (
  onResponse,
  featureURL,
  data,
  params = {},
  type,
  headerParams
) => {
  const callApi = axios({
    url: featureURL,
    method: type,
    data: data,
    params: params,
    headers: buildHeader(headerParams),
  });

  if (!onResponse) return callApi;

  callApi
    .then((response) => {
      if (
        Array.isArray(response) &&
        response.every((arr) => arr.status === 200)
      ) {
        onResponse.success(response);
      } else if (response.status !== 200 && response.status !== 201) {
        onResponse.error(response);
      } else {
        onResponse.success(response.data);
      }
    })
    .catch((error) => {
      onResponse.error(error?.response?.data);
      if (error.response) {
        console.log("Error Response", error);
      }
    });
};
