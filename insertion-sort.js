function insertionSort(unSortedData) {
  for (let i = 1; i < unSortedData.length; i++) {
    const key = unSortedData[i];
    for (var j = i - 1; j >= 0; j--) {
      if (unSortedData[j] > key) unSortedData[j + 1] = unSortedData[j];
      else break;
    }
    unSortedData[j + 1] = key;
  }

  return unSortedData;
}

const unSortedData = [90, 15, 21, 4, 0, -1];

console.log(insertionSort(unSortedData));
