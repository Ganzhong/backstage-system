import React from 'react';
import { Upload, Button, Icon } from 'antd';

class XMSC extends React.Component{
    render(){
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
              if (file.status !== 'uploading') {
                console.log(file, fileList);
              }
            },
            defaultFileList: [],
          };
        return(
            <div>
                <h1 style={{color:'black',fontSize:'26px',textAlign:'center'}}>学员项目上传</h1>
                <div style={{border:'solid 1px blue',width:'1060px',height:'200px',position:'relative',marginTop:'50px'}}>
                <div style={{color:'red',position:'absolute',top:'50px',left:'100px'}}><p>项目文件:</p></div>
                <div style={{position:'absolute',top:'48px',left:'180px'}}><Upload {...props}><Button>选择文件</Button></Upload></div>
                <div style={{position:'absolute',top:'50px',left:'500px',color:'red'}}><p>注:请上传格式为[zip.rar]的压缩包，上传大小不能超过10M</p></div>
                <div style={{ background: 'lightblue', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '250px', bottom: '20px' }}>√ 提交</div>
                <div style={{ background: 'gray', width: '80px', height: '40px', color: 'white', textAlign: 'center', lineHeight: '40px', position: 'absolute', left: '450px', bottom: '20px' }}>○ 返回</div>            
                </div>
            </div>
        )
    }
}

export default XMSC;