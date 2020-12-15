//1. 先导入axios对象
import axios from "axios";

//2. 创建axios的实例
const Server = axios.create({
    baseURL: "", //基础的url地址（前缀域名）https://www.liulongbin.top:8888/api/private/v1/
    timeout: 5000, //超时时间
});

//3. 定义一个请求拦截器
Server.interceptors.request.use((config) => { //request请求   use方法
    // console.log(config);请求对象config
    // 先获取本地存储中的令牌
    config.headers.Authorization = window.sessionStorage.getItem("dryFrom_token");
    config.headers.Authorization = window.sessionStorage.getItem("drylist_token");
    // 最后必须return config
    return config;
}, (error) => {
    return Promise.reject(error)
});


//4.response拦截器
Server.interceptors.response.use((response) => {  //response响应   use方法
    // console.log(response.data);
    //判断如果接口的状态为200的话，返回data数据即可
    if (response.status == 200) {
        return response.data; 
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});

//5. 抛出实例
export default Server;