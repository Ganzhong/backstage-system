import React from 'react';
import axios from 'axios';

class VIP extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.textRef = React.createRef();
    }
    add02(){
        let qq = this.inputRef.current.value;
        let ww = this.textRef.current.value;
        axios.post('/bsystem/insert_vip',{name:qq,content:ww}).then((result)=>{
            console.log(result.data);
        })
        this.inputRef.current.value = '';
        this.textRef.current.value = '';
    }
    render(){
        return(
            <div>
            <h1 style={{color:'red',fontSize:'20px',textAlign:'center'}}>您还不是VIP学员，填写下面的表格可申请VIP学员</h1>
            <div style={{position:'relative',border:'solid 1px blue',width:'1060px',height:'300px',marginTop:'10px'}}>
                <div style={{color:'red',position:'absolute',left:'100px',top:'50px'}}><p>学员姓名:</p></div>
                <div style={{ position: 'absolute', top: '50px', left: '200px' }}><input ref={this.inputRef} type='text' placeholder='请输入名字' style={{ background: '#f5f5f5' }} /></div>
                <div style={{ position: 'absolute', color: 'red', left: '100px', top: '100px' }}><p>申请理由:</p></div>
                    <textarea ref={this.textRef} style={{ position: 'absolute', top: '100px', left: '200px', width: '500px', height: '100px' }} placeholder='请输入申请理由'></textarea>
                    <div onClick={() => { this.add02() }} style={{ background: 'lightblue', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '250px', bottom: '20px' }}>√ 提交</div>
                    <div style={{ background: 'gray', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '450px', bottom: '20px' }}>○ 返回</div>            
            </div>
            </div>
        )
    }
}

export default VIP;