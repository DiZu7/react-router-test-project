const baseUrl = 'https://api.github.com/users';

export const fetchData = (userId) => {
  return fetch(`${baseUrl}/${userId}`).then((response) => {
    if (!response.ok) {
      throw new Error('failed request');
    }
    return response.json();
  });
};
