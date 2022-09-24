const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Carlos Ramirez',
  authorAddress: 'carlosrv125@icloud.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'vpc-carlosrv',
  repositoryUrl: 'https://github.com/carlosrv125/vpc-carlosrv.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();