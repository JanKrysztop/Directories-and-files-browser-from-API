const responseToJson = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Invalid server response');
};

const baseUrl = `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories`;

const fetchRootData = () => {
  return fetch(baseUrl).then(responseToJson);
};

const fetchDirectoryData = (dirId) => {
  return fetch(`${baseUrl}/${dirId}`).then(responseToJson);
};

export const fetchData = (dirId) => {
  if (dirId === undefined) {
    return fetchRootData();
  }
  return fetchDirectoryData(dirId);
};
