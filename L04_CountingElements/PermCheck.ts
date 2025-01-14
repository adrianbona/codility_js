function solution(A: number[]): number {
  let bag: Set<number> = new Set<number>();
  let length: number = A.length;
  let arithmeticProgression: number = (length * (length + 1)) / 2;

  for (let i = 0; i < length; i++) {
    if (A[i] > length) {
      return 0;
    }
    arithmeticProgression = arithmeticProgression - A[i];
    bag.add(A[i]);
  }

  if (bag.size < length) {
    return 0;
  }

  return arithmeticProgression === 0 ? 1 : 0;
}
