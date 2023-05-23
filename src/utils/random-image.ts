const getRandomNumber = () => (Math.random() * 10).toFixed(0);

export const getRandomProfilePicture = () =>
  `https://source.unsplash.com/random/48?portrait&sig=${getRandomNumber()}`;

export const getRandomFoodPicture = () =>
  `https://source.unsplash.com/random/128?food&sig=${getRandomNumber()}`;
