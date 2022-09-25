import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CustomVpc } from '../src/index';

const mockApp = new App();
const stack = new Stack(mockApp);
new CustomVpc(stack, 'testing-stack', {
  cidrBlock: '10.0.0.0/20',
  privateSubnets: ['qlo', 'kk', 'pedo'],
  publicSubnets: ['dsadsa', 'dsads'],
  vpcName: 'newVPC',
});
const template = Template.fromStack(stack);

test('VPC should be configured with properties', () => {
  template.hasResourceProperties('AWS::EC2::VPC', {
    CidrBlock: '10.0.0.0/20',
  });

});
