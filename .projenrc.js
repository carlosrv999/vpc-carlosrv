const { awscdk } = require('projen');

const cdkVersion = '2.43.1';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Carlos Ramirez',
  authorAddress: 'carlosrv125@icloud.com',
  cdkVersion,
  defaultReleaseBranch: 'main',
  name: 'vpc-carlosrv',
  repositoryUrl: 'https://github.com/carlosrv125/vpc-carlosrv.git',
  keywords: ['sample', 'awscdk', 'aws-cdk'],
  releaseWorkflow: true,
  releaseToNpm: true,
  releaseEveryCommit: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
