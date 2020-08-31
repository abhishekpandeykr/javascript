import { p, o } from "./Observables/promise";
import { data } from "./Observables/values";
import { logColor, logError } from "../colorConsole";
import "./Observables/inputField";

const blue = "color:blue;font-size:40px";
const red = "color:red;font-size:40px";
const height = "font-size:20px";

data.subscribe(console.log);
