const baseUrl = 'https://api.github.com/users';

export const fetchData = (id) => {
  return fetch(`${baseUrl}/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error('failed request');
    }
    return response.json();
  });
};
