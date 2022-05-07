import { Log } from "../util/log";
import { KubeImagesComp, KubePodsComp } from "../client/components/Kube";
import { Header } from "../client/components/Header";

export async function respondKubeImages(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding kubeImagesPage...");
  res.write(Header());
  res.write(await KubeImagesComp({ isDifOnly: false }));
  res.end();
}

export async function respondKubeImagesDifOnly(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding kubeImagesPage...");
  res.write(Header());
  res.write(await KubeImagesComp({ isDifOnly: true }));
  res.end();
}

export async function respondKubePods(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding kubePods...");
  res.write(Header());
  res.write(await KubePodsComp({ isOffOnly: false }));
  res.end();
}

export async function respondKubePodsOff(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding kubePodsOff...");
  res.write(Header());
  res.write(await KubePodsComp({ isOffOnly: true }));
  res.end();
}
