function add(a, b, callback) {
    const res = a+b;
    callback(res)
}

add(2, 3, (res) => {
    console.log(res)
})