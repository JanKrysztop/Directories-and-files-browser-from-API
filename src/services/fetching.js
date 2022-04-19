const responseToJson = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Invalid server response');
};

const baseUrl = `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories`;

export const fetchRootData = () => {
  return fetch(baseUrl).then(responseToJson);
};

export const fetchDirRootData = (dirId) => {
  return fetch(`${baseUrl}/${dirId}`).then(responseToJson);
};
