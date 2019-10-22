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
		console.log('-------------');
	  console.log(s.data.login_ok);
	  if (s.data.login_ok) {
		window.location.reload();
		  
	  }
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

				<div className="box">
					<h1>学员后台系统</h1>
					
					<input className="input1" placeholder="身份证号码/学号"
					type="text"
					ref={username => {
						this.username = username;
					}}
					/>
					<br/>
					<input className="input2" placeholder="密码"
					type="text"
					ref={pw => {
						this.pw = pw;
					}}
					/>
					<br/>
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
    );
  }
}
