const Config = {
  get PUBLIC_URL() {
    return process.env.PUBLIC_URL;
  },

  get SERVER_URL() {
    return `https://jsonplaceholder.typicode.com`;
  },
};

export default Config;
