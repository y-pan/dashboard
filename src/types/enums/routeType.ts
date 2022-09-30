export enum RouteType {
  home = "/",
  branches = "/branches",
  branchesOher = "/branches/other",

  libs = "/libs",
  javaVersion = "/javaVersion",

  ports = "/ports",
  portsDown = "/ports/down",
  notes = "/notes",

  kubeImages = "/kube/images",
  kubeImagesDif = "/kube/images/dif",

  kubePods = "/kube/pods",
  kubePodsOff = "/kube/pods/off",

  kubeLogDev = "/kube/log?namespace=dev-blue&serviceName=",
  kubeLogDemo = "/kube/log?namespace=demo-blue&serviceName=",
  kubeLogProd = "/kube/log?namespace=prod-red&serviceName=",
}
