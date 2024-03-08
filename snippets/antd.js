
module.exports = {
  Button: `<Button type="primary">Primary Button</Button>`,

  Icon: `
<HomeOutlined />
<SettingFilled />
<SmileOutlined />
<SyncOutlined spin />
<SmileOutlined rotate={180} />
<LoadingOutlined />
  `,

  Grid: `
<Row>
  <Col span={12}>col-12</Col>
  <Col span={12}>col-12</Col>
</Row>
  `,

  Layout: `
<Layout>
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
</Layout>
  `,

  Breadcrumb: `
<Breadcrumb>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item>
    <a href="">Application Center</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    <a href="">Application List</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item>An Application</Breadcrumb.Item>
</Breadcrumb>
  `,

  Dropdown: `
<Dropdown overlay={menu}>
  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    Hover me <DownOutlined />
  </a>
</Dropdown>
  `,

  Menu: `
<Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
  <Menu.Item key="1">Option 1</Menu.Item>
  <Menu.Item key="2">Option 2</Menu.Item>
  <SubMenu key="sub1" title="Navigation One">
    <Menu.Item key="3">Option 3</Menu.Item>
    <Menu.Item key="4">Option 4</Menu.Item>
  </SubMenu>
</Menu>
  `,

  Table: `
<Table dataSource={dataSource} columns={columns} />
  `,

  Form: `
<Form name="basic" onFinish={onFinish}>
  <Form.Item
    label="Username"
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    <Input.Password />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
  `,

  Input: `<Input placeholder="Basic usage" />`,

  Tooltip: `
<Tooltip title="prompt text">
  <span>Tooltip will show on mouse enter.</span>
</Tooltip>
  `,

  Popover: `
<Popover content={content} title="Title" trigger="hover">
  <Button type="primary">Hover me</Button>
</Popover>
  `,

  // ...此处省略了其他组件的代码片段，可按需定义
}