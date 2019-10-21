/*
 * @Author: your name
 * @Date: 2019-10-21 15:47:27
 * @LastEditTime: 2019-10-21 21:42:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editm
 * @FilePath: /c:\Users\qf\Desktop\backstage-system\src\App.js
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Mlayout } from "./components/Layout";
import { Registe } from "./userlogin/mregiste";
import { gettoken } from "./utils/gettoken";

class App extends React.Component {
  render() {
    console.log("---------------");
    console.log(gettoken(document.cookie.substr(6)));
    console.log(gettoken(document.cookie.substr(6)));
    console.log("---------------");
    const b = gettoken(document.cookie.substr(6)); //判断是否已登录
    const show = b ? <Mlayout /> : <Registe />;
    return (
      <div className="App">
        xxxxxxxxxxx
        {show}
      </div>
    );
  }
}

export default App;
