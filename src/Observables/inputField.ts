import { fromEvent } from "rxjs";
import { startWith, map, tap } from "rxjs/operators";

const rangeEl: HTMLInputElement = document.querySelector("input[name=range]");
const rangeValueEl: HTMLInputElement = document.querySelector(".range-value");
const doubleValueEl: HTMLInputElement = document.querySelector(".double-value");

const range$ = fromEvent(rangeEl, "input").pipe(
  map((e) => e.target.value),
  startWith(rangeEl.value),
  tap((val) => (rangeValueEl.innerText = val))
);

const double = range$
  .pipe(
    map((val) => val * 2),
    tap(console.log),
    tap((val) => (doubleValueEl.innerText = val.toString()))
  )
  .subscribe();

console.log("fdfd");

range$.subscribe();
