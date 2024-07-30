let date = new Date();
let hour = date.getHours(),minute=date.getMinutes(),day=date.getDay();
let am = true
if(hour >= 12)
    {
        am = false;
        if(hour >= 13)
            hour -= 12;   
    }
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if(minute < 10)
    minute = '0' + minute;

document.getElementById('clock').innerHTML=daysOfWeek[day].substring(0,3) + ' ' + hour +':'+ minute + (am?' AM':' PM');

setInterval(()=>{
    let date = new Date();
    let hour = date.getHours(),minute=date.getMinutes(),day=date.getDay();
    let am = true
    if(hour >= 12)
        {
            am = false;
            if(hour >= 13)
                hour -= 12;   
        }
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('clock').innerHTML=daysOfWeek[day].substring(0,3) + ' ' + hour +':'+ minute + (am?' AM':' PM');
},1000*60)