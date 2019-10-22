/*
 * @Author: your name
 * @Date: 2019-10-21 16:00:41
 * @LastEditTime: 2019-10-22 09:56:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\qf\Desktop\backstage-system\src\components\Layout.js
 */
import React from "react";
import "../mcss/mlayout.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import CJKS from './cjks';
import JFMX from './jfmx';
import JSWT from './jswt';
import JXCP from './jxcp';
import NMTS from './nmts';
import VIP from './vip';
import WDZL from './wdzl';
import XMSC from './xmsc';
import XYPJ from './xypj';
import XYQJ from './xyqj';
import XYWJ from './xywj';
import XYZB from './xyzb';
import getid from "../utils/getid";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class Mlayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob:'匿名投诉',
      layoutlist: [
        {
          id: getid(),
          title: "学员后台",
          typename: "user",
          data01: [
              {id:getid(),src:'/nmts',decs:'匿名投诉'},
              {id:getid(),src:'/jswt',decs:'技术问题'},
              {id:getid(),src:'/xmsc',decs:'项目上传'},
              {id:getid(),src:'/vip',decs:'vip'},
              {id:getid(),src:'/xyzb',decs:'学员周报'},
              {id:getid(),src:'/wdzl',decs:'我的资料'},
              {id:getid(),src:'/jfmx',decs:'交费明细'},
              {id:getid(),src:'/cjks',decs:'参加考试'},
              {id:getid(),src:'/xypj',decs:'学员评价'},
              {id:getid(),src:'/jxcp',decs:'教学测评'}
            ]
        },
        {
          id: getid(),
          title: "学员考勤",
          typename: "dashboard",
          data01: [
            {id:getid(),src:'/xyqj',decs:'学员请假'},
              {id:getid(),src:'/xywj',decs:'学员违纪'}
          ]
        }
      
      ]
    };
  }
  dianji(data1){
    this.setState({
       dob:data1.decs
    })
  }
  render() {
    console.log('**/*------------');
    console.log(this.state.layoutlist);
    const menulist = this.state.layoutlist.map(item => {
      return (
        <SubMenu
          key={item.id}
          title={
            <span>
              <Icon type={item.typename} />
              {item.title}
            </span>
          }
        >
          {item.data01.map(i => {
            return (
              <Menu.Item onClick={()=>{this.dianji(i)}} key={i.id}>
                    {i.decs}
                    <HashRouter>
                    <Link to={i.src}>xx</Link>
                    </HashRouter>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    });
    return (
      <Layout>
       <Header className="header" style={{background:'#428bca'}}>
        <div className='logo'>这是我写的后台管理系统</div>
      </Header>

        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {menulist}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>学员后台</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.dob}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
          <HashRouter>
            <Switch>
              <Route path={'/cjks'} exact component={CJKS}/>
              <Route path={'/jfmx'} exact component={JFMX}/>
              <Route path={'/jswt'} exact component={JSWT}/>
              <Route path={'/jxcp'} exact component={JXCP}/>
              <Route path={'/nmts'} exact component={NMTS}/>
              <Route path={'/vip'} exact component={VIP}/>
              <Route path={'/wdzl'} exact component={WDZL}/>
              <Route path={'/xmsc'} exact component={XMSC}/>
              <Route path={'/xypj'} exact component={XYPJ}/>
              <Route path={'/xyqj'} exact component={XYQJ}/>
              <Route path={'/xywj'} exact component={XYWJ}/>
              <Route path={'/xyzb'} exact component={XYZB}/>
            </Switch>
            </HashRouter>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
