//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw 'Negative totals are not allowed.';
    }
    const result = [[]];
    for (let i = 1; i <= target; i++) {
      result[i] = coinArray.map(el => {
        return result[i - el] ? [el, ...result[i - el]] : undefined;
      }).sort((a, b) => {
        return a.length - b.length
      })[0]
    }
    if (!result[target]) {
      throw `The total ${target} cannot be represented in the given currency.`;
    }
    return result[target];
  }

}