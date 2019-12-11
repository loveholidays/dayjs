import dayjs from '@loveholidays/dayjs'

const locale = {
  name: 'uk',
  weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
  weekdaysShort: 'ндл_пнд_втр_срд_чтв_птн_сбт'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
  monthsShort: 'сiч_лют_бер_квiт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: 'через %s',
    past: '%s тому',
    s: 'декілька секунд',
    m: 'хвилина',
    mm: '%d хвилин',
    h: 'година',
    hh: '%d годин',
    d: 'день',
    dd: '%d днів',
    M: 'місяць',
    MM: '%d місяців',
    y: 'рік',
    yy: '%d роки'
  },
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY р.',
    LLL: 'D MMMM YYYY р., HH:mm',
    LLLL: 'dddd, D MMMM YYYY р., HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

