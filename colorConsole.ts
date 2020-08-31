const blue = "color:blue";
const red = "color:red";

export function logColor(val: string, color: any) {
  console.log(`%c${val}`, color);
}

export function logError(val: any, color: any = red) {
  console.log(`%c${val}`, color);
}
