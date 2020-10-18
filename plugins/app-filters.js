import Vue from 'vue';
import moment from 'moment';

export function timeAgo(tim) {
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
        return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' hour')
    } else {
        return pluralize(~~(between / 86400), ' day')
    }
}

export function formatDate(value, format = 'MMMM D, YYYY') {
    if (value && value !== 'N/A') {
        return moment(String(value)).format(format)
    } else {
        return 'N/A'
    }
}

export function formatTime(value) {
    if (value) {
        return moment(String(value)).format('hh:mm')
    }
}

export function capitalize(value) {
    if (value) {
        return _.capitalize(value);
    }
}

const filters = { formatDate, formatTime, capitalize };

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

export default filters;