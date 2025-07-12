function fibs(num) {
    const result = [];

    for (let i = 0; i < num; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }

    return result;
}


function fibsRec(num) {
    if (num <= 0) {
        return [];

    } else if (num === 1) {
        return [0];

    } else if (num === 2) {
        return [0, 1];

    }

    const prev = fibsRec(num - 1);
    const prevLength = prev.length;
    const nextValue = prev[prevLength - 1] + prev[prevLength - 2];

    return [...prev, nextValue];
}

console.log(fibs(7));