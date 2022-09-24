# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomVpc <a name="CustomVpc" id="vpc-carlosrv.CustomVpc"></a>

#### Initializers <a name="Initializers" id="vpc-carlosrv.CustomVpc.Initializer"></a>

```typescript
import { CustomVpc } from 'vpc-carlosrv'

new CustomVpc(scope: Construct, id: string, props: IVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vpc-carlosrv.CustomVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#vpc-carlosrv.CustomVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vpc-carlosrv.CustomVpc.Initializer.parameter.props">props</a></code> | <code><a href="#vpc-carlosrv.IVpcProps">IVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="vpc-carlosrv.CustomVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="vpc-carlosrv.CustomVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="vpc-carlosrv.CustomVpc.Initializer.parameter.props"></a>

- *Type:* <a href="#vpc-carlosrv.IVpcProps">IVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vpc-carlosrv.CustomVpc.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="vpc-carlosrv.CustomVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vpc-carlosrv.CustomVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="vpc-carlosrv.CustomVpc.isConstruct"></a>

```typescript
import { CustomVpc } from 'vpc-carlosrv'

CustomVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="vpc-carlosrv.CustomVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vpc-carlosrv.CustomVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#vpc-carlosrv.CustomVpc.property.subnetConfiguration">subnetConfiguration</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | *No description.* |
| <code><a href="#vpc-carlosrv.CustomVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="vpc-carlosrv.CustomVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `subnetConfiguration`<sup>Required</sup> <a name="subnetConfiguration" id="vpc-carlosrv.CustomVpc.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="vpc-carlosrv.CustomVpc.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IVpcProps <a name="IVpcProps" id="vpc-carlosrv.IVpcProps"></a>

- *Implemented By:* <a href="#vpc-carlosrv.IVpcProps">IVpcProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vpc-carlosrv.IVpcProps.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vpc-carlosrv.IVpcProps.property.privateSubnets">privateSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#vpc-carlosrv.IVpcProps.property.publicSubnets">publicSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#vpc-carlosrv.IVpcProps.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="vpc-carlosrv.IVpcProps.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="vpc-carlosrv.IVpcProps.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: string[];
```

- *Type:* string[]

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="vpc-carlosrv.IVpcProps.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: string[];
```

- *Type:* string[]

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="vpc-carlosrv.IVpcProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

