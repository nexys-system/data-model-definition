// snowpack.config.js
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/",
  },
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
};
