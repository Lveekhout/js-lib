// https://www.youtube.com/watch?v=WRl0SRSF3BU&t=6s
const solveRoot = (a, b, c) => {
    if (a != 0) {
        const b_ = b / a, c_ = c / a, D = b_ * b_ - 4 * c_
        if (D == 0) return [-b_ / 2]
        else if (D > 0) return [(-b_ - Math.sqrt(D)) / 2, (-b_ + Math.sqrt(D)) / 2]
        else return []
    } else return [-c / b]
}
