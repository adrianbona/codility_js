function solution(N: number): number {
  let size: number = 0;
  let binary: string = String(N.toString(2));

  let first: number = binary.indexOf('1');
  if (first == -1) {
    return size;
  }

  let second: number = binary.indexOf('1', first + 1);
  if (second == -1) {
    return size;
  }

  while (second != -1) {
    if (size < second - first) {
      size = second - first - 1;
    }

    first = second;
    second = binary.indexOf('1', first + 1);
  }

  return size;
}
