function solution(A: number[]): number {
  let aLength: number = A.length;
  let value: number = A[0];

  if (aLength == 1) {
    return value;
  }

  A.sort();

  for (let i: number = 0; i < aLength - 1; i = i + 2) {
    if (A[i] != A[i + 1]) {
      return A[i];
    }
  }

  return A[aLength - 1];
}