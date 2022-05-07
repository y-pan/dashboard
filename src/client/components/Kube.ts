import { getKubeImages, getKubeLog, getKubePods } from "../../io/kube";
import { h1, pre } from "../tags";
import { Header } from "./Header";

interface Props {
  withHeader?: boolean;
  isDifOnly?: boolean;
}

export async function KubeImagesComp(props: Props = {}): Promise<string> {
  const { withHeader, isDifOnly } = props;
  const { stderr, stdout } = await getKubeImages(isDifOnly);
  return [
    withHeader ? Header() : "",
    h1(isDifOnly ? "KubeImages Dif" : "KubeImages"),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}

interface KubePodsCompProps {
  withHeader?: boolean;
  isOffOnly?: boolean;
}

export async function KubePodsComp(
  props: KubePodsCompProps = {}
): Promise<string> {
  const { withHeader, isOffOnly } = props;
  const { stderr, stdout } = await getKubePods(isOffOnly);
  return [
    withHeader ? Header() : "",
    h1(isOffOnly ? "KubePods Off" : "KubePods"),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}

interface KubeLogCompProps {
  withHeader?: boolean;
  namespace: string;
  serviceName: string;
}

export async function KubeLogComp(props: KubeLogCompProps): Promise<string> {
  const { withHeader, namespace, serviceName } = props;
  const { stderr, stdout } = await getKubeLog(namespace, serviceName);
  return [
    withHeader ? Header() : "",
    h1(`namespace: ${namespace};   service: ${serviceName}`),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}
