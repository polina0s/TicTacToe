export function makeid(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].setAttribute('id', i);
  }
}
