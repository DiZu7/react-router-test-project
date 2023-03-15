const baseUrl = 'https://api.github.com/users';

export const fetchUserData = userId => {
  return fetch(`${baseUrl}/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error. Can't display data");
      }
      return response.json();
    })
    .catch(err => alert(err));
};
