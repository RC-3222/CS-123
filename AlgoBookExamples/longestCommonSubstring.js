const longestCommonSubstring = (x,  y) => {
    const matrix = Array(x.length + 1).fill().map(()=>Array(y.length + 1).fill(0));

    let result = 0;

    for (i = 0; i <= x.length; i++) {

        for (j = 0; j <= y.length; j++) {

            if (i === 0 || j === 0) matrix[i][j] = 0;
            else if (x[i - 1] === y[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                result = Math.max(result, matrix[i][j]);
            } 
            else matrix[i][j] = 0;
            
        }
    }

    return result;
}

console.log(longestCommonSubstring("FISH", "HISH"))