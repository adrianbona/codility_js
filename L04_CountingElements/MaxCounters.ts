function solution(N: number, A: number[]): number[] {
    const length: number = A.length;
    let counters: number[] = new Array<number>(N).fill(0);

    let newMax: boolean = false;
    let max: number = 0;

    for (let i: number = 0; i < length; i++) {
        if (A[i] > N) {
            if (newMax) {
                for (let j: number = 0; j < N; j++) {
                    counters[j] = max;
                }
                newMax = false;
            }
        }
        else {
            let value: number = counters[A[i] - 1] + 1;
            counters[A[i] - 1] = value;
            if (value > max) {
                max = value;
            }
            newMax = true;
        }
    }

    return counters;
}