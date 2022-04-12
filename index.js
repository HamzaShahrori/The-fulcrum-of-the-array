//The fulcrum of a array is the point at which the sum of the numbers before it equals the sum of the numbers after it

const fulcrum = (array) => {
  let sumNumberBeforeFulcrum = array[0];
  let sumNumberAfterFulcrum = 0;
  for (let i = 1; i < array.length; i++) {
    sumNumberAfterFulcrum += array[i];
  }

  for (let i = 1; i < array.length; i++) {
    sumNumberAfterFulcrum -= array[i];
    if (i > 1) {
      sumNumberBeforeFulcrum += array[i - 1];
    }
    if (sumNumberAfterFulcrum == sumNumberBeforeFulcrum) {
      console.log(i);
      return i;
    }
  }
  console.log(`Sorry, there is no fulcrum`);
  return `Sorry, there is no fulcrum`;
};
fulcrum([4, 2, -3, 1, 8, 3, 1]);
fulcrum([4, 2, -3, 1, 2, 3, 1]);
fulcrum([4, -3, 5, 10, -9, 0]);
fulcrum([4, -3, 5, 10, 9, 0]);
