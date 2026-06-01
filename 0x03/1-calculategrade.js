function calculategrade(score) {
    if (score >= 80) {
        return "A";
    }
    else if (score >= 65) {
        return "B";
    }
    else if (score >= 55) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else if (score >= 40) {
        return "E";
    }
    else {
        return "F";
    }   
}
console.log(calculategrade(30))