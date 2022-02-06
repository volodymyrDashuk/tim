import moment from "moment";
export const dateHelper = (date, format = 'H:mm') => {
    let a = moment(date, 'hh:mm:ss').format(format);
    return a
}