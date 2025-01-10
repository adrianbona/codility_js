function solution(A: number[], K: number): number[] {
  let aLength: number = A.length;

  if (K == 0 || aLength < 2) {
    return A;
  }

  while (K > 0) {
    let first: number = A[0];
    let second: number = A[1];

    for (let i: number = 0; i < aLength; i++) {
      A[(i + 1) % aLength] = first;
      first = second;
      second = A[(i + 2) % aLength];
    }

    K = K-1;
  }

  return A;
}