import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

//项目工程化：异步请求及跨域处理

export default class Axios{
    static jsonp(options){
        return new Promise((reslove,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,res){
                if(res.status === 'success'){
                    reslove(res);
                }else{
                    reject(res.message)
                }
            })
        })
    }

    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading!==false){
            loading=document.getElementById('ajaxLoading');
            loading.style.display='block';
        }
        let baseURL='https://www.easy-mock.com/mock/5ba0a557c517213600c26648/mockapi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                baseURL,
                method:'get',
                timeout:5000,
                params:(options.data && options.data.params) || '',
            }).then((response)=>{
                if(options.data && options.data.isShowLoading!==false){
                    loading=document.getElementById('ajaxLoading');
                    loading.style.display='none';
                }
                if(response.status===200){
                    let res=response.data;
                    if(res.code===0){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}