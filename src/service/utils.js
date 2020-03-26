const getDoubleNumb = numb => (numb < 9 ? `0${numb}` : numb);

const getDateString = (date = new Date()) => (
  `${date.getFullYear()}-${getDoubleNumb(
    1 + date.getMonth()
  )}-${getDoubleNumb(date.getDate())}`
);

export default {
  getDateString,
  getDoubleNumb
};
