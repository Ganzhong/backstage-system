/*
 * @Author: your name
 * @Date: 2019-10-21 16:00:41
 * @LastEditTime: 2019-10-21 18:08:16
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
import { Jishu } from "../components/jishu";
import { Tousu } from "../components/tousu";
import { Xiangmu } from "../components/xiangmu";
import { Qingjia } from "../components/qingjia";
import { Weiji } from "../components/weiji";
import getid from "../utils/getid";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class Mlayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutlist: [
        {
          id: getid(),
          title: "学员后台",
          typename: "user",
          studentlist: [
            { id: getid(), msg: "匿名投诉", mrouter: "tousu" },
            { id: getid(), msg: "技术问题", mrouter: "jishu" },
            { id: getid(), msg: "项目上传", mrouter: "xiangmu" }
          ]
        },
        {
          id: getid(),
          title: "学员考勤",
          typename: "dashboard",
          studentlist: [
            { id: getid(), msg: "学员请假",mrouter: "qingjia" },
            { id: getid(), msg: "学员违纪",mrouter: "weiji" },
            // { id: getid(), msg: "xxx" },
            // { id: getid(), msg: "技术问题" },
            // { id: getid(), msg: "项目上传" }
          ]
        }
      ]
    };
  }
  render() {
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
          {item.studentlist.map(i => {
            return (
              <Menu.Item key={i.id}>
                    {i.msg}
                    <HashRouter>
                    <Link to={`/${i.mrouter}`}>GoTo=>pro</Link>
                    </HashRouter>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    });
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
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
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
              <HashRouter>
                <Switch>
                  <Route path={"/jishu"} exact component={Jishu}></Route>
                  <Route path={"/tousu"} exact component={Tousu}></Route>
                  <Route path={"/xiangmu"} exact component={Xiangmu}></Route>
                  <Route path={"/qingjia"} exact component={Qingjia}></Route>
                  <Route path={"/weiji"} exact component={Weiji}></Route>
                </Switch>
              </HashRouter>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
