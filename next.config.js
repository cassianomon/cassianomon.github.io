const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  assetPrefix: ghPages ? "/cassianomon.github.io/" : "", // customize this value
};
