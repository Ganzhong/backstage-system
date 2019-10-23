import React from 'react';
import axios from 'axios';
class JFMX extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            all:''
        }
    }
    componentDidMount(){
        this.getdata();
    }
    getdata(){
        let zonggong = 0;
        axios.get("/bsystem/getjfmx").then((result)=>{
            result.data.map((s)=>{
                zonggong += s.money*1;
            })
            this.setState({
                    data:result.data,
                    all:zonggong
            })
           
        })
    }
    // add(){
    //     let timer = new Date().toLocaleString();
    //     let user = {topic:'张三 占座费',money:'200',dh:'',bh:'',port:'深圳',kind:'现金',people:'刘丽',zt:'',time:timer,do:''}
    //     axios.post("/bsystem/insert_jfmx", user).then((result)=>{
    //         //console.log(result);
    //         this.getdata();
    //     })
    // }
    render(){
        let lis = this.state.data.map((item)=>{
            return(
                <tr key={item.time}>
                            <td style={{border:'solid 1px gray'}}>{item.topic}</td>
                            <td style={{border:'solid 1px gray'}}>{item.money}</td>
                            <td style={{border:'solid 1px gray'}}>{item.dh}</td>
                            <td style={{border:'solid 1px gray'}}>{item.bh}</td>
                            <td style={{border:'solid 1px gray'}}>{item.port}</td>
                            <td style={{border:'solid 1px gray'}}>{item.kind}</td>
                            <td style={{border:'solid 1px gray'}}>{item.people}</td>
                            <td style={{border:'solid 1px gray'}}>{item.zt}</td>
                            <td style={{border:'solid 1px gray'}}>{item.time}</td>
                            <td style={{border:'solid 1px gray'}}>{item.do}</td>
                        </tr>
            )
        })
        return(
            <div>
                <h1 style={{color:'black',textAlign:'center',fontSize:'30px'}}>交费明细</h1>
                <table style={{ border: 'solid 1px gray', marginTop: '50px', marginLeft: '50px' }}>
                    <thead style={{ textAlign: 'center' }}>
                        <tr style={{background:'#f5f5f5'}}>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>标题</th>
                            <th style={{width:'80px',border: 'solid 1px gray'}}>金额</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>收据号/订单号</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>收据编号</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>入账地点</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>类型</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>操作人</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>状态</th>
                            <th style={{width:'200px',border: 'solid 1px gray'}}>添加时间</th>
                            <th style={{width:'100px',border: 'solid 1px gray'}}>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lis}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='10' style={{border:'solid 1px gray',height:'50px'}}>交费总额:{this.state.all}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default JFMX;