const pi = Math.PI;

class getArea {
    getAreaOfTheCircle(r) {
        const result = (Math.PI) * (r**2);
        console.log(result.toFixed(2));
    }
}

circle = new getArea();
circle.getAreaOfTheCircle(15);