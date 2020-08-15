/**
 * Shuffles array in place.
 * @param {Array} array items An array containing the items.
 */
function shuffle(array: any) {
    const coppiedArray = [...array];
    var j, x, i;
    for (i = coppiedArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = coppiedArray[i];
        coppiedArray[i] = coppiedArray[j];
        coppiedArray[j] = x;
    }
    return coppiedArray;
}

export default shuffle;