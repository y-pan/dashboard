import { RouteType } from "../../types/enums/routeType";
import { nowEst } from "../../util/time";
import { div, hr, a } from "../tags";

export function Header(): string {
  const elem = [div(`Last updated: ${nowEst()}`, { color: "green" })];

  Object.entries(RouteType).forEach(([key, value]) =>
    elem.push(
      a(key, value, {
        color: "blue",
        margin: "0 5px 0 0",
      })
    )
  );

  elem.push(hr());
  elem.push(div("It might take a while to display result bellow...", {fontStyle: "italic"}));
  return elem.join("");
}
