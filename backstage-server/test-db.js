/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 21:33:23
 * @LastEditTime: 2019-10-21 20:00:14
 * @LastEditors: Please set LastEditors
 */
//mongodb数据库 增 删 查 改 的封装 并链接数据库
const mongodb = require('mongodb');  // 映入 mongodb 官方依赖模块   npm install mongodb --save
var ObjectId = require('mongodb').ObjectID;//Work
const MongoClient = mongodb.MongoClient;  // 返回 mongodb 客户端对象
const DB_URL = 'mongodb://localhost:27017';   // mongodb 数据库连接字符串
const mydb = 'bsystem';//库名
const biao = 'datalist';//表名

// 用户登录用
const biao2 = 'userlist';//表名

let cacheClient;  // 设置一个 客户端连接 缓存对象

function getClient() {
    return new Promise(function (resolve, reject) {
        if (cacheClient) { // 如果缓存对象 有效 直接返回
            resolve(cacheClient);
            return;
        }
        MongoClient.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true }, function (err, client) {  // client 表示连接成功后的客户端对象
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('一个连接客户端建立');
            cacheClient = client;  // 将 客户端对象 赋值给缓存对象
            resolve(cacheClient);
        });
    });
}
//查 {sex: '女'},2,3
//跳到第二条开始显示(2),每页显示三条(3)
async function getgoodslist(filter, pageNo, pageSize) {
    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao).find(filter).skip(pageNo * pageSize).limit(pageSize).toArray(function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    })
}
async function getgoodslist2(filter) {
    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao).find(filter).toArray(function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    })
}
//改 {name: '小小'}, {$set: {name: '小郭'}}
async function updategoodslist(filter, setObj) {

    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao).updateMany(filter, setObj, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({
                ok: true,
                count: cmdResult.modifiedCount
            })
        })
    });
}
//删
async function removegoodslist(filter) { //给条件 通过 id 来删除

    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao).remove({ "_id": ObjectId(filter._id)}, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({
                ok: true,
                count: cmdResult.deletedCount
            })
        });
    });
}
//增单条数据
async function insertgoodslist(list) { //给json {name:"xx",age:11}

    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao).insertOne(list, function (err, cmdResult) {
        // testDB.collection(biao).inser{
            if (err) {
                return reject(err)
            }

            resolve({
                success: cmdResult.insertedCount === 1,
                id: cmdResult.insertedId
            })
        })
    });
}
//增多条数据
async function insertgoodslist2(list) { //给json 
    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao).insertMany(list, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }
            resolve({
                success: cmdResult.result.ok===1,
                id: cmdResult.result.n
            })
        })
    });
}

//
async function insertuser(user) { //给json {name:"xx",age:11}

    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao2).insertOne(user, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({ //
                ok: true,
                id: cmdResult.insertedId,
                id2: cmdResult.insertedCount
            })
        })
    });
}
//查
async function userlogin(filter, pageNo, pageSize) {
    const client = await getClient();
    const testDB = client.db(mydb);
    return new Promise(function (resolve, reject) {
        testDB.collection(biao2).find(filter).skip(pageNo * pageSize).limit(pageSize).toArray(function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    })
}

module.exports = {
    getgoodslist, //查
    getgoodslist2,//查2
    updategoodslist,//改
    insertgoodslist, //增
    insertgoodslist2, //增2
    removegoodslist, //删

    userlogin, //用户登录
    insertuser, //用户注册
};
