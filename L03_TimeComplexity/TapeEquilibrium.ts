function solution(A: number[]): number {

  let length: number = A.length;
  let firstPart: number = A[0];
  let secondPart: number = 0;

  for (let i = 1; i < length; i++) {
    secondPart += A[i];
  }

  let minDiff: number = Math.abs(firstPart - secondPart);

  for (let i = 1; i < length - 1; i++) {
    firstPart += A[i];
    secondPart -= A[i];

    let diff: number = Math.abs(firstPart - secondPart);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}
