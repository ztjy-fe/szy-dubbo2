import React, { Component } from 'react';
import { Button,Input } from 'antd';


import styled from 'styled-components';



export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="form">
      <Input addonBefore="groupID" defaultValue="com.qianmi" />
      <Input addonBefore="artifactId" defaultValue="admin-order-api" />
      <Input addonBefore="version" defaultValue="2.0.13-RELEASE" />
      <Input addonBefore="entry" defaultValue="2.0.13-RELEASE" />
      <Input addonBefore="entry" defaultValue="2.0.13-RELEASE" />
      <Button type="primary">提交</Button>
    </div>
      ;
  }
}
