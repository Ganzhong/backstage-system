/*
 * @Author: your name
 * @Date: 2019-10-22 19:09:46
 * @LastEditTime: 2019-10-23 19:35:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \backstage-system\backstage-system\src\components\xyqj.js
 */
import React from "react";
import { Button, Input, DatePicker, Select, Icon } from "antd";
import $ from "jquery";
import axios from "axios";
import "antd/dist/antd.css";
import "../mcss/xyqj.css";
const { TextArea } = Input;
const { Option } = Select;

class XYQJ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: [],
      mdate1: "",
      mdate2: "",
      h1: "08",
      h2: "08",
      s1: "00",
      s2: "00"
    };
  }

  v1(v) {
    console.log(v);
    this.setState({
      h1: v
    });
  }
  v2(v) {
    console.log(v);
    this.setState({
      s1: v
    });
  }
  v3(v) {
    console.log(v);
    this.setState({
      h2: v
    });
  }
  v4(v) {
    console.log(v);
    this.setState({
      s2: v
    });
  }
  sure() {
    // let t = new Date().toLocaleString();
    
    let updata = {
      uname: this.yname.state.value,
      context: $(".mtextArea").val(),
      timestart: $(".mdate div input")[0].value,
      timeend: $(".mdate2 div input")[0].value,
      hourstart: this.state.h1,
      hourend: this.state.h2,
      s_start: this.state.s1,
      s_end: this.state.s2,
      nowtime: new Date().toLocaleString()
    };
    axios.post("/bsystem/insert_xyqj", updata).then((s)=> {
      console.log(s.data);
      this.getdata();
    });
  }
  componentDidMount() {
    this.getdata();
  }
  getdata() { 
    axios.get("/bsystem/getxyqj").then(res => {
      this.setState({
        datalist: res.data
      });
    });
  }
  render() {
    // 
    return (
      <div>
        <div className="xyqjbox">
          <span className="mspan">你的名字:</span>
          <Input
            className="nameinput"
            placeholder="xxx"
            ref={yname => {
              this.yname = yname;
            }}
          />
          <br />
          <span className="mspan">请假理由:</span>
          <TextArea
            rows={4}
            className="mtextArea"
            placeholder="请输入请假理由"
          />
          <br />
          <span className="mspan">请假时间:</span>
          <DatePicker className="mdate" />
          <Select
            className="ms1"
            defaultValue="8"
            style={{ width: 60 }}
            onChange={v => {
              this.v1(v);
            }}
          >
            <Option value="08">8</Option>
            <Option value="09">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
            <Option value="13">13</Option>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
            <Option value="19">19</Option>
            <Option value="20">20</Option>
            <Option value="21">21</Option>
            <Option value="22">22</Option>
          </Select>
          <Select
            className="ms2"
            defaultValue="00"
            onChange={v => {
              this.v2(v);
            }}
          >
            <Option value="00">00</Option>
            <Option value="30">30</Option>
          </Select>
          ---
          <DatePicker className="mdate2" />
          <Select
            className="ms11"
            defaultValue="8"
            style={{ width: 60 }}
            onChange={v => {
              this.v3(v);
            }}
          >
            <Option value="08">8</Option>
            <Option value="09">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
            <Option value="13">13</Option>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
            <Option value="19">19</Option>
            <Option value="20">20</Option>
            <Option value="21">21</Option>
            <Option value="22">22</Option>
          </Select>
          <Select
            className="ms22"
            defaultValue="00"
            onChange={v => {
              this.v4(v);
            }}
          >
            <Option value="00">00</Option>
            <Option value="30">30</Option>
          </Select>
          {/* <Button.Group size={size}> */}
          <br />
          <Button
            className="btnsure"
            onClick={() => {
              this.sure();
            }}
            type="primary"
          >
            <Icon type="check" />
            确定
          </Button>
          <Button className="btnback" type="primary">
            <Icon type="reload" />
            返回
          </Button>
        </div>
        <div>
          <table>
            <tr>
              <th className="th1">姓名</th>
              <th className="th2">请假理由</th>
              <th className="th3">班主任审批</th>
              <th className="th4">讲师审批</th>
              <th className="th5">请假时间</th>
              <th className="qth6">创建时间</th>
            </tr>
            {
              this.state.datalist.map((list) => { 
                return (
                  <tr key={list._id}>
                    <td>{list.uname}</td>
                    <td>{list.context}</td>
                  <td>星爷</td>
                  <td>刘老板</td>
                  <td>{list.timestart+' '+list.hourstart+':'+list.s_start+':00'+"~~"+list.timeend+' '+list.hourend+':'+list.s_end+":00"}</td>
                    <td>{list.nowtime}</td>
                </tr>
                )
              })
            }
         
          </table>
        </div>
      </div>
    );
  }
}

export default XYQJ;
