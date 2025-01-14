function solution(X: number, A: number[]): number {
  let length: number = A.length;
  let counter: number = -1;
  let bag: Set<number> = new Set<number>();

  for (let i: number = 0; i < length && bag.size < X; i++) {
    counter = i;
    if (A[i] <= X) {
      bag.add(A[i]);
    }
  }

  if (bag.size != X) {
    counter = -1;
  }

  return counter;
}
