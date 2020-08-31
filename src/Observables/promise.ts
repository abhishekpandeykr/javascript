import { Observable } from "rxjs";

const p = new Promise((resolve, reject) => {
  resolve("This is test");
}).then(
  (res) => console.log(res),
  (err) => console.error(err)
);

const o = new Observable((observer) => {
  observer.next("This is an Observable");
}).subscribe(
  (res) => console.log("success", res),
  (err) => console.error("err"),
  () => console.log("complete")
);

export { p, o };
