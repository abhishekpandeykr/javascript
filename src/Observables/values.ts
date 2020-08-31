import { Observable } from "rxjs";

import { startWith, map, filter, take, tap } from "rxjs/operators";

export const data = new Observable((observer) => {
  setInterval(() => observer.next(Math.floor(Math.random() * 100)), 100);
}).pipe(
  startWith(Math.floor(Math.random() * 100)),
  map((val: number) => val * val),
  filter((val) => val > 100),
  take(10)
);
