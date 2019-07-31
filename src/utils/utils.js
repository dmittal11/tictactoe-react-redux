function hasSubArray(master, sub){
    return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}

export default hasSubArray;