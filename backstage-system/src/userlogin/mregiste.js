/*
 * @Author: your name
 * @Date: 2019-10-21 20:19:47
 * @LastEditTime: 2019-10-21 21:50:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\qf\Desktop\aaaaaaaaaaaaa\backstage-system\src\userlogin\mregiste.js
 */
import React from "react";
import axios from "axios";
export class Registe extends React.Component {
  btn() {
    console.log(this.username.value);
    console.log(this.pw.value);

    let user = {
      username: this.username.value,
      pw: this.pw.value + ""
    };
    console.log(user);
    axios.post("/bsystem/registe", user).then(function(s) {
      console.log(s.data);
    });
  }
  btn2() {
    let user = {
      username: this.username.value,
      pw: this.pw.value + ""
    };
    axios.post("/bsystem/login", user).then(function(s) {
      console.log(s.data);
    });
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
      </div>
    );
  }
}
