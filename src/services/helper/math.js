export const getNearestObject = (objects) => (
  objects
    .reduce(
      (prevObject, currObject) =>
        currObject.close_approach_data[0].miss_distance.kilometers
        <
        prevObject.close_approach_data[0].miss_distance.kilometers
        ? currObject : prevObject
    )
);
