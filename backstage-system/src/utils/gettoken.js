/*
 * @Author: your name
 * @Date: 2019-10-21 21:09:23
 * @LastEditTime: 2019-10-21 21:31:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\qf\Desktop\aaaaaaaaaaaaa\backstage-system\src\utils\gettoken.js
 */
// import { jwt } from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
export function gettoken(mtoken) {  //用来判断 是否登录
    let obj;
    jwt.verify(mtoken, "abcdef", async function (err, user) { 
     
        if (err) {
            return false;
        }
        obj = user
    })
    return obj;
}