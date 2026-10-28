let arr = [1, 3, 4, 3, 5, 6, 7, 2, 7, 3, 5, 1, 6, 5, 3];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1)
    } else {
        map.set(arr[i], 1)
    }
}
console.log(map)

let maxfreq = 0;
let mode = arr[0];
for (let [key, val] of map) {
    if (val > maxfreq) {
        maxfreq = val;
        mode = key;
    }
}

console.log(mode);