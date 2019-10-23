import React from 'react';
import axios from 'axios'
class CJKS extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            data :[
               
                
            ]
        }
    }
    // b1(){
    //   console.log('--------------');
    //   let user =  {id:5,
    //     name:"SZ-HTML5-1909班-一升三考试题+2019-08-30+考试",
    //     time:90,
    //     state:"未考",
    //     fenshu:50,
    //     fanwei:`HTML5（考试大纲）-->第21周-->JS第五周
    //     HTML5（考试大纲）-->第32周-->JS第六周
    //     HTML5（考试大纲）-->第33周-->JS第七周`,
    //     ktime:"2019-07-09"
    //    }
    //   axios.post("/bsystem/insert_cjks ", user).then(function(s) {
    //     console.log(s.data);
    //   });
    //     // let user = { name: aa, ques: bb, time: timer, res: '(0)' };
    //     // axios.post("/bsystem/insert_cjks", user).then( (s) =>{
           
    //     //     this.getdate();
    //     // });
    // }
    componentDidMount(){
        this.getdate();
    }
    getdate(){
        axios.get("bsystem/getcjks").then(res => {
            //console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }
    render(){
        // 
        let lis = this.state.data.map((item) => {
            return (
                <div key={item.id} style={{width:'530px',height:'230px',border:'1px solid black',padding:'20px',boxSizing:'border-box',marginTop:'20px',position:'relative'}}>
                    <h1 style={{fontSize:'22px',fontWeight:'600',lineHeight:'24px'}}>{item.name}</h1>
                    <span style={{position:'absolute',right:'10px',top:'29px',fontSize:'22px',color:'#ccc'}}>{item.state}</span>
                   <p>考试时间: {item.time}分钟</p>
                   <p>总分数: {item.fenshu}分</p>
                   <p>考试范围: {item.fanwei}</p>
                   <p>考试时间:{item.ktime}</p>

                </div>
            )
        })
        return(
            <div>
               <h1 style={{fontSize:'20px' ,color:'black',fontWeight:'900'} } onClick={() => { this.b1() }}>参加考试</h1>
                {lis}
                
            </div>
        )
    }
}

export default CJKS;