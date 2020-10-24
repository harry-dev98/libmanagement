export const funcs =  {
    range: (from, to, step = 1) => {
        let itr = from;
        let returnArr = [];
        while(itr<=t0){
            returnArr.push(itr);
            itr += step;
        }
        return returnArr;
    }
}