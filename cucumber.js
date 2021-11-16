let common = [
  'Features/Login.feature',                // Specify our feature files
  '--require-module ts-node/register',    // Load TypeScript module
  '--require Steps/stepDefinitions.ts',   // Load step definitions
  '--format progress-bar'              // Load custom formatter
].join(' ');

module.exports = {
  default: common
};