function VectorUtils() {}

VectorUtils.vect = (x, y, l) => {
    const ratio = l / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    return [x * ratio, y * ratio]
}

// Slow
// const vect2 = (x, y, l) => {
//     const a = Math.atan2(y, x)
//     return [l * Math.cos(a), l * Math.sin(a)]
// }
