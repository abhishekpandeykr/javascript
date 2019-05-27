// function pow(base, expo) {
//     if(expo === 1) return base;
//     return base * pow(base, expo-1);
// }

// Shorthand for this code is

const pow = (base, expo) => expo === 1 ? base : base * pow(base, expo-1);

console.log(pow(2,2))