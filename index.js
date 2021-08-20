// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius 
    }
         
get diameter() {
    return this.radius * 2 
}
set diameter(newD) {
    this.radius = newD / 2
}


get circumference() {
    return Math.PI * this.diameter
}

set circumference(newCirc) {
    this.radius = newCirc / (Math.PI * 2)
}


get area() {
    return Math.PI * this.radius * this.radius
}
set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI)
}
}