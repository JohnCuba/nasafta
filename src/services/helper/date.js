export const getDoubleNumb = numb => (numb < 9 ? `0${numb}` : numb);

export const getStringDate = (date = new Date()) =>
  `${date.getFullYear()}-${getDoubleNumb(
    1 + date.getMonth()
  )}-${getDoubleNumb(date.getDate())}`;
