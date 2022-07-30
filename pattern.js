
class PatternPuzzle {
  constructor(init) {
    this.w = init.w;
    this.h = init.h;
    this.colGoals = [...Array(this.w)];
    this.rowGoals = [...Array(this.h)];
    this.data = Arrray(this.h).fill(undefined).map(e => Array(this.w).fill(0));
  }

  

  getPattern(a) {
    let curPattern = [];
    let curVal = 0;
    let curCount = 0;
    for(let i=0; i<a.length; i++) {
      if (curVal == 0) {
        if (a[i] == 0) continue;
        else { /* a[i] == 1 */
          curVal = 1;
          curCount = 1;
        }
      } else { /* curVal == 1 */
        if (a[i] == 1) curCount++;
        else { /* a[i] == 0 */
          curPattern.push(curCount);
          curCount = 0;
          curVal = 0;
        }
      }
    }
    if (curCount > 0) curPattern.push(curCount);
    return curPattern;
  }
  checkCol(i) {
    let target = this.colGoals[i];
    let curPattern = getPattern(this.col(i));
  }
}
