import * as cdk from 'aws-cdk-lib';
import { CustomVpc } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new CustomVpc(stack, 'Cdk-Sample-Lib', {
  cidrBlock: '10.0.0.0/20',
  privateSubnets: ['qlo', 'kk', 'pedo'],
  publicSubnets: ['dsadsa', 'dsads'],
  vpcName: 'newVPC',
});
