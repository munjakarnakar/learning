const a = {ards:'a',bsdae:'b'}


// forin can be used iterate on both array(retrun indexes) and json(return keys) 
// forof can be used iterate only on array(retrun values) 

for (const key in a) {
    console.log(key)
}

for (const iterator in ["a","b","c"]) {
    console.log(iterator)
}