const pi = Math.PI;

const circleArea = (r) => {
    return pi * (r ** 2);
}

const circleCircumference = (r) => {
    return (pi * r) * 2;
}

module.exports = {
    circleArea,
    circleCircumference
}