const ghPages = process.env.DEPLOY_TARGET === 'deploy';

module.exports = {
  assetPrefix: ghPages ? '/cassianomon.github.io/' : '',
};
