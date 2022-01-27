function AllStateTimeDate(e)
{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    

    let event = "Asia/Dhaka" ;
    if (e === '' || e === undefined) {
        event = "Asia/Dhaka" ;
    }
    else{
        event = e ;
    }
    let date1 = ''
    try {
        date1 = new Date().toLocaleString('en-US', {timeZone: event});    
    } catch (error) {
        console.log("Wrong Parameter")
    }
    let date = JSON.stringify(date1);
    let TodayTime = new Date().toLocaleTimeString(['en-US'], {timeZone: event}, { hour: '2-digit', minute: '2-digit',second:'2-digit' });
    let TodayDate = date.slice(1,11);
    let TodayDay = new Date(date1).getDay();
    let TodayDayString = weekday[new Date(date1).getDay()];
    let TodayTimeString = new Date(date1).getTime();
    let onlyDate = new Date(date1).getDate();
    let onlyYear = new Date(date1).getFullYear();
    let onlyHour = new Date(date1).getHours();
    let onlyMinutes = new Date(date1).getMinutes();
    let onlyMonth = new Date(date1).getMonth();
    let onlyMonthString = month[new Date(date1).getMonth()];
    let getTimezoneOffset = new Date(date1).getTimezoneOffset();
    let toDateString = new Date(date1).toDateString();
    
    

const timeDateDay = {
    "TimeZone":event  ,
    "TodayTime" : TodayTime,
    "TodayDate" : TodayDate,
    "TodayDay" : TodayDay,
    "onlyDate" : onlyDate,
    "TodayDayString" :TodayDayString,
    "onlyYear":onlyYear,
    "onlyHour":onlyHour,
    "onlyMinutes":onlyMinutes,
    "onlyMonth":onlyMonth,
    "onlyMonthString":onlyMonthString,
    "getTimezoneOffset":getTimezoneOffset,
    "toDateString":toDateString,
    "TodayTimeString" : TodayTimeString/1000
}
return timeDateDay
}

module.exports = AllStateTimeDate