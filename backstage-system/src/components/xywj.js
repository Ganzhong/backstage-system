/*
 * @Author: your name
 * @Date: 2019-10-22 19:09:46
 * @LastEditTime: 2019-10-23 19:30:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \backstage-system\backstage-system\src\components\xywj.js
 */
import React from "react";
import axios from 'axios';
import '../mcss/xywj.css';

class XYWJ extends React.Component {
    constructor(props) { 
        super(props)
        this.state = {
            datalist: [],
            count: 100,
            i:5
        }
    }
      
 
    // this.dec = mdec(5);
   

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
    return (
      <div>
        <div>
          <table>
            <tr>
              <th className="th1">姓名</th>
              <th className="th2">类型</th>
              <th className="th3">扣除(分数)</th>
              <th className="th4">剩余分数</th>
              <th className="th5">理由</th>
              <th className="th6">操作人</th>
              <th className="th7">操作时间</th>
            </tr>
                    {this.state.datalist.map((list,i) => {
                       
                        console.log(list);
                        
                        
                // console.log(getcount());
                // console.log(getcount());
                
              return (
                  <tr key={list._id}>
                  <td>{list.uname}</td>
                  <td>事假</td>
                  <td>5</td>
                      <td>{this.state.count - (i+1)*5}</td>
                  <td>
                    {list.context}
                  </td>
                  <td>星爷</td>
                  <td>{list.nowtime}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default XYWJ;
