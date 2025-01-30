function solution(A: number[]): number {
    const positives: number[] = A.filter((number: number) => number > 0);
    positives.sort((first: number, second: number) => first - second);

    let missing: number = 1;

    for (let index = 0; index < positives.length; index++) {
        if (index == 0) {
            if (positives[index] > 1) {
                missing = 1;
                break;
            }
            else {
                missing = 2;
            }
        }
        else {
            if (positives[index] - 1 > positives[index - 1]) {
                missing = positives[index - 1] + 1;
                break;
            }
            else {
                missing = positives[index] + 1;
            }
        }
    }

    return missing;
}
