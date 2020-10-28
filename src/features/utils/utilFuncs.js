const range = (from, to, step = 1) => {
    let itr = from;
    let returnArr = [];
    while(itr<=to){
        returnArr.push(itr);
        itr += step;
    }
    return returnArr;
}

const capitalFirstLetter = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


export {
    range, 
    capitalFirstLetter,
}