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
    axios.post("/bsystem/bsystem/insert_jswt", user).then(function(s) {
      console.log(s.data);
    });
  }
  btn3() {
    axios
      .get("/bsystem/getjswt") 
      .then(res => {
     console.log(res.data);
        
      })
    }
  

  render() {
    return (
      <div>
        <input
          type="text"
          ref={username => {
            this.username = username;
          }}
        />
        <input
          type="text"
          ref={pw => {
            this.pw = pw;
          }}
        />
        <button
          onClick={() => {
            this.btn();
          }}
        >
          注册
        </button>
        <button
          onClick={() => {
            this.btn2();
          }}
        >
          登录
        </button>
       
        <button
          onClick={() => {
            this.btn3();
          }}
        >
          recedata
        </button>
      </div>
    );
  }
}
