import { RouteType } from "../../types/enums/routeType";
import { capitalize } from "../../util/stringUtil";
import { nowEst } from "../../util/time";
import { div, hr, a } from "../tags";

export function Header(): string {
  const elem = [div(`Last updated: ${nowEst()}`, { color: "green" })];

  const entriesSimple: string[][] = [];
  const entriesKube: string[][] = [];
  
  Object.entries(RouteType).forEach(([routeName, routeValue]) => {
    if (routeValue.startsWith("/kube/")) {
      entriesKube.push([routeName, routeValue]); // need vpn
    } else {
      entriesSimple.push([routeName, routeValue]);
    }
  })
  
  entriesSimple.forEach(([key, value]) =>
    elem.push(
      a(capitalize(key), value, {
        color: "#7b2191",
        margin: "0 5px 0 0",
        textDecoration: "none",
      })
    )
  );

  elem.push(div(""));
  entriesKube.forEach(([key, value]) =>
    elem.push(
      a(capitalize(key), value, {
        color: "blue",
        margin: "0 5px 0 0",
        textDecoration: "none",
      })
    )
  );

  elem.push(hr());
  elem.push(div("It might take a while to display result bellow...", {fontStyle: "italic"}));
  return elem.join("");
}
