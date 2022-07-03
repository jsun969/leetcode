export function twoSum(nums: number[], target: number): number[] {
  let ans = [-1, -1];
  const flag = new Map<number, number>();
  nums.forEach((num, index) => {
    const tmp = target - num;
    if (flag.has(tmp)) {
      ans = [flag.get(tmp)!, index];
      return;
    } else {
      flag.set(num, index);
    }
  });
  return ans;
}
