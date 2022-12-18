import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs:any) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if(timestampDayjs.isBefore(nowDayjs)) {
        return {
            milliseconds:'00',
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    
    return {
        milliseconds: getRemainingmilliseconds(nowDayjs,timestampDayjs),
        seconds : getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes : getRemainingMinutes(nowDayjs, timestampDayjs),
        hours : getRemainingHours(nowDayjs, timestampDayjs),
        days : getRemainingDays(nowDayjs, timestampDayjs)
    } ;
}
type getRemainingTimeUntilMsTimestamp = {
    millisecond: string,
    seconds: string,
    minutes: string,
    hours: string,
    days: string,
  };

function getRemainingmilliseconds(nowDayjs:any, timestampDayjs:any) {
    const milliseconds = timestampDayjs.diff(nowDayjs, 'milliseconds') % 1000;
    return padWithZeros(milliseconds, 3);
}


function getRemainingSeconds(nowDayjs:any, timestampDayjs:any) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs:any, timestampDayjs:any) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs:any, timestampDayjs:any) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs:any, timestampDayjs:any) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function padWithZeros(number:any, minLength:any) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) +  numberString;
}