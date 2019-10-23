import React from 'react';
import axios from 'axios'
class JSWT extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        console.log("00000")
        console.log(this.inputRef)
        this.textRef = React.createRef();
        this.state = {
            data: []
        }
    }
    
    componentDidMount(){
        this.getdate();
    }
    getdate(){
        axios.get("/bsystem/getjswt").then(res => {
            //console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }
    add() {
        let timer = new Date().toLocaleString();
        let aa = this.inputRef.current.value;
        let bb = this.textRef.current.value;
        let user = { name: aa, ques: bb, time: timer, res: '(0)' };
        axios.post("/bsystem/insert_jswt", user).then( (s) =>{
            //console.log(s.data);
            this.getdate();
        });

        this.inputRef.current.value = '';
        this.textRef.current.value = '';


    }

    render() {
        
        let lis = this.state.data.map((item) => {
            return (
                <tr key={item.time}>
                    <td style={{ width: '150px', border: 'solid 1px gray', textAlign: 'center' }}>{item.name}</td>
                    <td style={{ width: '500px', border: 'solid 1px gray' }}>{item.ques}</td>
                    <td style={{ width: '200px', border: 'solid 1px gray' }}>{item.time}</td>
                    <td style={{ width: '150px', border: 'solid 1px gray', textAlign: 'center' }}>{item.res}</td>
                </tr>
            )
        })
        return (
            <div>
                <div style={{ position: 'relative', border: 'solid 1px blue', width: '1060px', height: '300px' }}>
                    <div style={{ position: 'absolute', color: 'red', left: '100px', top: '50px' }}><p>学员姓名:</p></div>
                    <div style={{ position: 'absolute', top: '50px', left: '200px' }}><input ref={this.inputRef} type='text' placeholder='请输入名字' style={{ background: '#f5f5f5' }} /></div>
                    <div style={{ position: 'absolute', color: 'red', left: '100px', top: '100px' }}><p>问题内容:</p></div>
                    <textarea ref={this.textRef} style={{ position: 'absolute', top: '100px', left: '200px', width: '500px', height: '100px' }} placeholder='请输入问题内容'></textarea>
                    <div onClick={() => { this.add() }} style={{ background: 'lightblue', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '200px', bottom: '30px' }}>√ 提问</div>
                    <div style={{ background: 'gray', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '400px', bottom: '30px' }}>○ 返回</div>
                </div>

                <table style={{ border: 'solid 1px gray', marginTop: '50px', marginLeft: '50px' }}>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th style={{ width: '150px', border: 'solid 1px gray', background: '#f5f5f5' }}>学员姓名</th>
                            <th style={{ width: '500px', border: 'solid 1px gray', background: '#f5f5f5' }}>问题内容</th>
                            <th style={{ width: '150px', border: 'solid 1px gray', background: '#f5f5f5' }}>时间</th>
                            <th style={{ width: '150px', border: 'solid 1px gray', background: '#f5f5f5' }}>回复</th>
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

export default JSWT;