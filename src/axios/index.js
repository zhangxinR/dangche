import JsonP from 'jsonp';

//项目工程化：异步请求及跨域处理

export default class Axios{
    static jsonp(options){
        return new Promise((reslove,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,res){
                if(res.status == 'success'){
                    reslove(res);
                }else{
                    reject(res.message)
                }
            })
        })
    }
}