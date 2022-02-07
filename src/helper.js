import moment from "moment";
export const minutesHoursHelper = (date, format = 'HH:mm') => {
    return moment(date, 'hh:mm:ss').format(format);
}

export const daysMonthsYearsHelper = (date, format = 'DD.MM.YYYY') => {
    return moment(date, 'DD.MM.YYYY').format(format);
}

export const fullDateHelper = (date, format = 'DD.MM.YYYY hh:mm:ss') => {
    return moment(date, 'DD.MM.YYYY hh:mm:ss').format(format);
}