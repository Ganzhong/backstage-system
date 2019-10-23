/*
 * @LastEditTime: 2019-10-23 17:46:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-10-21 17:01:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\qf\Desktop\backstage-system\src\utils\getid.js
 */
 function getid(i) {
    return function () {
        return i++;
    }
    
}
    
export default getid(100)