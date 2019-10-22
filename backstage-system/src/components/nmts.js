import React from 'react';

class NMTS extends React.Component{


    render(){
        return(
            <div style={{border:'solid 1px blue',width:'1065px',height:'400px',position:'relative'}}>
                <div style={{position:'absolute',left:'150px',top:'50px',color:'red',fontSize:'16px'}}><p>投诉内容:</p></div>
                <textarea style={{position:'absolute',left:'250px',top:'50px',border:'solid 1px gray',width:'500px',height:'280px'}} placeholder='本投诉是匿名投诉，不会暴露您的信息'></textarea>
            <div style={{background:'lightblue',width:'80px',height:'40px',color:'white',textAlign:'center',lineHeight:'40px',position:'absolute',left:'300px',bottom:'10px'}}>√ 添加</div>
            <div style={{background:'gray',width:'80px',height:'40px',color:'white',textAlign:'center',lineHeight:'40px',position:'absolute',left:'600px',bottom:'10px'}}>○ 返回</div>
            </div>
        )
    }
}

export default NMTS;