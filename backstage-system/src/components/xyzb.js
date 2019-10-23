import React from 'react';
import axios from 'axios';
class XYZB extends React.Component{
    constructor(props){
        super(props);
        this.input01Ref = React.createRef();
        this.input02Ref = React.createRef();
        this.textRef = React.createRef();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.getdata();
    }
    getdata(){
        axios.get("/bsystem/getxyzb").then((result)=>{
            this.setState({
                data:result.data
            })
        })
    }

    addto(){
        let timer = new Date().toLocaleString();
        let aa = this.input01Ref.current.value;
        let bb = this.input02Ref.current.value;
        let cc = this.textRef.current.value;
        let user = {name:aa,topic:bb,content:cc,zt:'无',time:timer};
        axios.post("/bsystem/insert_xyzb", user).then((result)=>{
            //console.log(result.data);
            this.getdata();
        })
        this.input01Ref.current.value = '';
        this.input02Ref.current.value = '';
        this.textRef.current.value = '';
    }
    render(){
        let lis = this.state.data.map((item)=>{
            return(
                <tr key={item.time}>
                    <td style={{ width: '150px', border: 'solid 1px gray', textAlign: 'center' }}>{item.name}</td>
                    <td style={{ width: '150px', border: 'solid 1px gray' }}>{item.topic}</td>
                    <td style={{ width: '450px', border: 'solid 1px gray' }}>{item.content}</td>
                    <td style={{ width: '150px', border: 'solid 1px gray', textAlign: 'center' }}>{item.zt}</td>
                    <td style={{ width: '100px', border: 'solid 1px gray' }}>{item.time}</td>
                </tr>
            )
        })
        return(
            <div>
                <div style={{position:'relative',border:'solid 1px blue',width:'1060px',height:'400px'}}>
                <div style={{position:'absolute',color:'red',top:'50px',left:'100px'}}><p>学员姓名:</p></div>
                <div style={{position:'absolute',top:'50px',left:'200px'}}><input ref={this.input01Ref} type='text' placeholder='请输入姓名' style={{background:'#f5f5f5'}}/></div>
                <div style={{position:'absolute',color:'red',top:'100px',left:'100px'}}><p>周报标题:</p></div>
                <div style={{position:'absolute',top:'100px',left:'200px'}}><input ref={this.input02Ref} type='text' placeholder='请填写周报标题' style={{background:'#f5f5f5'}}/></div>
                <div style={{position:'absolute',color:'red',top:'150px',left:'100px'}}><p>周报内容:</p></div>
                <textarea ref={this.textRef} placeholder='请输入周报内容' style={{position:'absolute',top:'150px',left:'200px',width:'500px',height:'150px'}}></textarea>
                <div onClick={()=>{this.addto()}} style={{ background: 'lightblue', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '300px', bottom: '30px' }}>√ 提交</div>
                <div style={{ background: 'gray', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '500px', bottom: '30px' }}>○ 返回</div>
                </div>

                <table style={{ border: 'solid 1px gray', marginTop: '50px', marginLeft: '50px' }}>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th style={{ width: '150px', border: 'solid 1px gray', background: '#f5f5f5' }}>学员姓名</th>
                            <th style={{ width: '150px', border: 'solid 1px gray', background: '#f5f5f5' }}>周报标题</th>
                            <th style={{ width: '450px', border: 'solid 1px gray', background: '#f5f5f5' }}>周报内容</th>
                            <th style={{ width: '150px', border: 'solid 1px gray', background: '#f5f5f5' }}>周报状态</th>
                            <th style={{ width: '200px', border: 'solid 1px gray', background: '#f5f5f5' }}>创建时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lis}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default XYZB;