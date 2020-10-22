import _ from 'lodash';

export function currencyFilter(currency) {
    if (!_.isEmpty(currency))
        return {currency_id: currency.id}
    else
        return {currency_id: ''}
}

export default {currencyFilter}
