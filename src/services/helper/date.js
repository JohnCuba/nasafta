export const getDoubleNumb = numb => (numb < 9 ? `0${numb}` : numb);

export const getStringDate = date =>
  `${date.getFullYear()}-${getDoubleNumb(
    1 + date.getMonth()
  )}-${date.getDate()}`;
