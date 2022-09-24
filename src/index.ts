import { SubnetConfiguration, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export interface IVpcProps {
  readonly vpcName: string;
  readonly cidrBlock: string;
  readonly publicSubnets: string[];
  readonly privateSubnets: string[];
}

export class CustomVpc extends Construct {
  subnetConfiguration: SubnetConfiguration[] = [];
  vpc: Vpc;

  constructor(scope: Construct, id: string, props: IVpcProps) {
    super(scope, id);

    this.setSubnetConfiguration(props);

    this.vpc = new Vpc(this, props.vpcName, {
      cidr: props.cidrBlock,
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: this.subnetConfiguration,
    });
  }

  private setSubnetConfiguration(props: IVpcProps) {
    this.subnetConfiguration = [];
    props.privateSubnets.forEach((_element, index) => {
      this.subnetConfiguration.push({
        name: `SubnetPrivate-${index + 1}`,
        subnetType: SubnetType.PRIVATE_ISOLATED,
        cidrMask: 25,
      });
    });
    props.publicSubnets.forEach((_element, index) => {
      this.subnetConfiguration.push({
        name: `SubnetPublic-${index + 1}`,
        subnetType: SubnetType.PUBLIC,
        cidrMask: 25,
        mapPublicIpOnLaunch: true,
      });
    });
  }


}
