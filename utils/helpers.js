import moment from 'moment';

export const formatDate = (date, format = "MMM Do, YYYY") => {
    if (_.isEmpty(date)) return 'N/A';
    return moment(date).format(format);
}

export const resetObj = (obj, exclude) => {
    let keys = Object.keys(obj);
    keys.forEach(key => {
        if (!exclude.includes(key)) {
            obj[key] = null
        }
    });
    return obj;
}

export function getValueByPath(obj, path, valueDefault = '') {
    const value = path.split('.').reduce((o, i) => o ? o[i] : null, obj);
    return _.isEmpty(value) ? valueDefault : value;
}

export function transformColumnDef(columns) {
    let cols = [];
    columns.forEach(item => {
        let column = {
            label: item.label,
            key: item.key,
            renderHtml: item.renderHtml,
            type: item.type,
            hideOnCompany: item.hideOnCompany,
        };
        cols.push(column);
    });
    return cols;
}