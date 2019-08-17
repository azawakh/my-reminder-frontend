export default {
  namespaced: true,
  actions: {
    create({ error, err }, { root }) {
      console.log(`error: ${error}`);
      console.log(`err: ${err}`);
      console.log(`root: ${root}`);
    }
  }
};
