//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  // class Change {
  calculate(coinArray, target) {
    if (target === 0) {
      return [];
    }
    const isSmallest = !!coinArray.find(el => target >= el);
    if (!isSmallest) {
      throw `The total ${target} cannot be represented in the given currency.`
    }
    const result = [];
    let targetRemain = target;
    const coinArrayTemp = [...coinArray];
    const maxSmaller = coinArrayTemp.reverse().find(el => target >= el);
    targetRemain -= maxSmaller;
    result.unshift(maxSmaller)
    if (targetRemain !== 0) {
      result.unshift(...this.calculate(coinArray, targetRemain));
    }
    return result;
  }
}


const change = new Change();
const result = change.calculate([1, 4, 15, 20, 50], 23);
console.log('result: ', result);