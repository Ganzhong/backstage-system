/*
 * @Author: your name
 * @Date: 2019-10-21 20:19:47
 * @LastEditTime: 2019-10-22 15:32:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\qf\Desktop\aaaaaaaaaaaaa\backstage-system\src\userlogin\mregiste.js
 */
import React from "react";
import axios from "axios";
import '../mcss/denglu.css';
import {
	BrowserRouter,
	HashRouter,
	Route,
	Switch,
	Link,
	Redirect
  } from "react-router-dom";
export class Registe extends React.Component {
  btn() {
    console.log(this.username.value);
    console.log(this.pw.value);

    let user = {
      username: this.username.value,
      pw: this.pw.value + "",
    
    };
    console.log(user);
    axios.post("/bsystem/registe", user).then(function(s) {
      console.log(s.data);
	});
	alert("注册成功,请直接点击登录")
  }
  btn2() {
    let user = {
      username: this.username.value,
      pw: this.pw.value + ""
    };
    axios.post("/bsystem/login", user).then(function(s) {
	  console.log(s.data);
    window.location.reload();
    
    });
  }
 
  

  render() {
    return (
      <div>
      <div className="big">
		  <div className="box">
			  <h1>学生后台管理系统</h1>
        <input className="input1" placeholder="身份证/学号"
          type="text"
          ref={username => {
            this.username = username;
          }}
        />
        <input className="input2" placeholder="密码" 
          type="password"
          ref={pw => {
            this.pw = pw;
          }}
        />
        <button className="b1"
          onClick={() => {
            this.btn();
          }}
        >
          注册
        </button>
        <button className="b2"
          onClick={() => {
            this.btn2();
          }}
        >
          登录
        </button>
       
        
		</div>
    </div>
      </div>
    );
  }
}
