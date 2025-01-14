function solution(A: number[]): number {
  let length: number = A.length;
  let value: number = A[0];

  if (length == 1) {
    return value;
  }

  A.sort();

  for (let i: number = 0; i < length - 1; i = i + 2) {
    if (A[i] != A[i + 1]) {
      return A[i];
    }
  }

  return A[length - 1];
}