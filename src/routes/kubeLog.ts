import { Header } from "../client/components/Header";
import { KubeLogComp } from "../client/components/Kube";
import { div } from "../client/tags";
import { Log } from "../util/log";

export async function respondKubeLog(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding kubeLog...");
  const { namespace, serviceName } = req.query;
  res.write(Header());
  res.write(
    await KubeLogComp({
      withHeader: false,
      namespace,
      serviceName,
    })
  );
  res.end();
}
