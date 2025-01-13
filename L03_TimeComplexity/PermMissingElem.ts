function solution(A: number[]): number {
  let maximum: number = A.length + 1;
  let arithmeticProgression: number = (maximum/2) * (1 + maximum);

  for (let element of A) {
    arithmeticProgression -= element;
  }

  return arithmeticProgression;
}
