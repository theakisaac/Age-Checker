function checkAge(age) {

    if (age < 5) return "A child";
    else if (age >= 5 && age < 17) return "A teenager";
    else return "An adult";
}

console.log(checkAge(9));  // A teenager