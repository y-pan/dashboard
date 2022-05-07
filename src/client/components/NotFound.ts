import { div, pre } from "../tags";
import { Header } from "./Header";

function NotFound(req?: any): string {
  return [
    Header(),
    div("~~~ 404 Not Found ~~~", { margin: "50px auto" }),
    pre("req.query: " + JSON.stringify(req.query)),
  ]
    .filter(Boolean)
    .join("");
}

export default NotFound;
