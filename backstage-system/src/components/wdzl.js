import React from 'react';
import imgUrl from '../mcss/shuai.jpg';
import axios from 'axios';
class WDZL extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

   componentDidMount(){
       axios.get("/bsystem/getwdzl").then((result)=>{
            this.setState({
                data:result.data
            })
       })
   }

    render(){
        let lis = this.state.data.map((item)=>{
            return(
                <div key={item.card}>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'45px',left:'500px',lineHeight:'30px'}}>{item.card}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'85px',left:'500px',lineHeight:'30px'}}>{item.phone}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'125px',left:'500px',lineHeight:'30px'}}>{item.qq}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'165px',left:'500px',lineHeight:'30px'}}>{item.xh}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'205px',left:'500px',lineHeight:'30px'}}>{item.school}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'245px',left:'500px',lineHeight:'30px'}}>{item.zt}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'285px',left:'500px',lineHeight:'30px'}}>{item.xl}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'325px',left:'500px',lineHeight:'30px'}}>{item.class}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'365px',left:'500px',lineHeight:'30px'}}>{item.tea}</div>
                <div style={{position:'absolute',width:'200px',height:'30px',background:'#f5f5f5',top:'405px',left:'500px',lineHeight:'30px'}}>{item.time}</div>
            </div>
            )
        })
        return(
            <div style={{position:'relative',width:'1000px',height:'500px'}}>
                <div style={{position:'absolute',width:'180px',height:'240px',border:'solid 2px gray',top:'50px',left:'80px',overflow:'hidden'}}><img style={{width:'100%',height:'100%'}} src={imgUrl}/></div>
                <div style={{position:'absolute',top:'300px',left:'130px',color:'black'}}><p>姓名:李某某</p></div>
                <div style={{position:'absolute',top:'50px',left:'400px',color:'black'}}><p>身份证号:</p></div>
                <div style={{position:'absolute',top:'90px',left:'400px',color:'black'}}><p>手机号:</p></div>
                <div style={{position:'absolute',top:'130px',left:'400px',color:'black'}}><p>QQ:</p></div>
                <div style={{position:'absolute',top:'170px',left:'400px',color:'black'}}><p>学号:</p></div>
                <div style={{position:'absolute',top:'210px',left:'400px',color:'black'}}><p>毕业学校:</p></div>
                <div style={{position:'absolute',top:'250px',left:'400px',color:'black'}}><p>在校状态:</p></div>
                <div style={{position:'absolute',top:'290px',left:'400px',color:'black'}}><p>学历:</p></div>
                <div style={{position:'absolute',top:'330px',left:'400px',color:'black'}}><p>班级:</p></div>
                <div style={{position:'absolute',top:'370px',left:'400px',color:'black'}}><p>招生老师:</p></div>
                <div style={{position:'absolute',top:'410px',left:'400px',color:'black'}}><p>招生日期:</p></div>

                {lis}
           
            </div>
        )
    }
}

export default WDZL;