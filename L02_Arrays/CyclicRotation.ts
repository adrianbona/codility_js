function solution(A: number[], K: number): number[] {
  let length: number = A.length;

  if (K == 0 || length < 2) {
    return A;
  }

  while (K > 0) {
    let first: number = A[0];
    let second: number = A[1];

    for (let i: number = 0; i < length; i++) {
      A[(i + 1) % length] = first;
      first = second;
      second = A[(i + 2) % length];
    }

    K = K-1;
  }

  return A;
}