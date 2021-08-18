//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export class Change {
class Change {
  calculate(coinArray, target) {
    if (target === 0) {
      return [];
    }
    const isSmallest = !!coinArray.find(el => target >= el);
    if (!isSmallest) {
      throw `The total ${target} cannot be represented in the given currency.`
    }
    const result = [];
    const maxSmaller = this.getMaxSmaller(coinArray, target);
    const index = coinArray.findIndex(el => el === maxSmaller);
    for (let i = index; i >= 0; i--) {
      result.push(this.getChangeByTarget(coinArray.slice(0, i + 1), target));
    }
    console.log('result: ', result);
    return result.reduce((prev, next) => prev.length > next.length ? next : prev);
  }

  getChangeByTarget(list, target) {
    if (!list.length) {
      return [];
    }
    const result = [];
    const tempList = [...list];
    let targetRemain = target;
    const maxSmaller = this.getMaxSmaller(tempList, target);
    targetRemain -= maxSmaller;
    const nextStepMaxSmaller = this.getMaxSmaller(tempList, targetRemain);
    if (targetRemain === 0) {
      result.unshift(maxSmaller);
    } else {
      if (nextStepMaxSmaller) {
        result.unshift(maxSmaller);
        result.unshift(...this.getChangeByTarget(tempList, targetRemain));
      } else {
        const index = tempList.findIndex(el => el === maxSmaller);
        result.unshift(...this.getChangeByTarget(tempList.slice(0, index), target));
      }
    }
    return result;
  }

  getMaxSmaller(list, target) {
    const listTemp = [...list];
    const maxSmaller = listTemp.reverse().find(el => target >= el);
    return maxSmaller;
  }
}



const change = new Change();
const result = change.calculate([4, 5], 27);
console.log('result: ', result);