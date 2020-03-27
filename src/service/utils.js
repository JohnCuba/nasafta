const getDoubleNumb = numb => (numb < 9 ? `0${numb}` : numb);

const getDateString = (date = new Date()) => (
  `${date.getFullYear()}-${getDoubleNumb(
    1 + date.getMonth()
  )}-${getDoubleNumb(date.getDate())}`
);

const getNearest = (objects) => (
  objects
    .reduce(
      (prevObject, currObject) =>
        currObject.close_approach_data[0].miss_distance.kilometers
        <
        prevObject.close_approach_data[0].miss_distance.kilometers
        ? currObject : prevObject
    )
)

export default {
  getDateString,
  getDoubleNumb,
  getNearest
};
