/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 16:50:58
 * @LastEditTime: 2019-10-21 19:44:27
 * @LastEditors: Please set LastEditors
 */
const jwt = require('jsonwebtoken');
const token =jwt.sign('hello', 'word');//word要好好保存
console.log(token); //eyJhbGciOiJIUzI1NiJ9.aGVsbG8.omMLchycqmMaqGr5Q4OUro6kQg-cEntyhtgdiTyqVBE
const source =  jwt.verify(token, 'word');
console.log(source); //hello
