const path = require('path');

const applicationFolder = path.resolve(__dirname, '..', '..', 'client', 'Application');
const srcDir = path.resolve(__dirname, '..', '..');

module.exports = {
  buildPath: path.join(__dirname, '..', '..', '..', 'public'),
  entry: path.join(applicationFolder, 'index.jsx'),
  src: srcDir,
  htmlPluginTemplate: path.join(applicationFolder, 'index.html'),
};
