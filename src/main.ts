import * as express from "express";
import * as path from "path";
import { urlencoded, json } from "body-parser";
import { respondHome } from "./routes/home";
import * as cors from "cors";
import { respondBranchesAll, respondBranchesOther } from "./routes/gitBranches";
import {
  respondKubeImages,
  respondKubeImagesDifOnly,
  respondKubePods,
  respondKubePodsOff,
} from "./routes/kubeImages";
import { respondAllPorts, respondDownPorts } from "./routes/ports";
import { RouteType } from "./types/enums/routeType";
import respondNotFound from "./routes/notFound";
import { respondLibs } from "./routes/libs";
import { respondKubeLog } from "./routes/kubeLog";
import { validateConfig } from "./util/config";
import { respondNotes } from "./routes/notes";
import { respondJavaVersion } from "./routes/javaVersion";

let config: any;

try {
  config = require("./config.json");
} catch (e) {
  console.error(
    "config.json is missing. The example here: `src/config.example.json`"
  );
  throw e;
}

validateConfig();

const app: express.Application = express();

// middlewares
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/public/", express.static(path.join(__dirname, "public")));

// routes
app.get(RouteType.home, respondHome);
app.get(RouteType.branches, respondBranchesAll);
app.get(RouteType.branchesOher, respondBranchesOther);
app.get(RouteType.libs, respondLibs);
app.get(RouteType.javaVersion, respondJavaVersion);
app.get(RouteType.ports, respondAllPorts);
app.get(RouteType.portsDown, respondDownPorts);
app.get(RouteType.notes, respondNotes);

app.get(RouteType.kubeImages, respondKubeImages);
app.get(RouteType.kubeImagesDif, respondKubeImagesDifOnly);
app.get(RouteType.kubePods, respondKubePods);
app.get(RouteType.kubePodsOff, respondKubePodsOff);
app.get("/kube/log", respondKubeLog);

app.get("*", respondNotFound);

app.listen(config.serverPort, async function () {
  console.log(`Dashboard is running on port: ${config.serverPort}`);
});
