//项目工程化：格式化显示样式
export default {
    formateDate(time){
        if(!time) return '';
        let date=new Date(time);
        let month=date.getMonth();
        month=(month+1)<10 ? "0"+(month+1) : month+1;
        let day=date.getDate();
        day=day<10 ? '0'+day : day;
        let hour=date.getHours();
        hour=hour<10 ?'0'+hour : hour;
        let minutes=date.getMinutes();
        minutes=minutes<10 ? '0'+minutes : minutes;
        let seconds=date.getSeconds();
        seconds=seconds<10 ? '0'+seconds : seconds;
        return date.getFullYear()+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    },
    pagination(data,callback){
        let page={
            onChange:(current)=>{
                callback(current)
            },
            current:data.page,
            pageSize:data.page_size,
            total:data.total,
            showTotal:()=>{
                return `共${data.total}条数据`
            },
            showQuickJumper:true
        }
        return page;
    }
}