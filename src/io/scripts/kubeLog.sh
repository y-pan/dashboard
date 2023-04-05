namespace=$1
serviceName=$2

if [ -z "$namespace" ]; then
  echo "Missing arguments. Example like: kubeLog dev-blue <search-word-for-service-name>"
  exit
fi

timestamp=$(date +"%Y%m%d_%H%M%S")
outdir=~/Downloads/kubelogs/kubelog_${timestamp}_${namespace}
mkdir -p $outdir

echo "[outdir]: \n\t$outdir"
echo "[namespace]: \n\t$namespace"
echo "[service name]: \n\t${serviceName}"

echo "\n\n"

# discard the top line (header), take first column which is the pod name.
# podNames=`kubectl get pods -n "$namespace" | tail -n +2 | grep "${serviceName}" | awk '{print $1}'`
podNames=$(kubectl get pods -n "$namespace" | tail -n +2 | grep -v "rabbitmq-\|zipkin-\|datadog-" | grep "${serviceName}" | awk '{print $1}')

logPod() {
  _podname=$1

  outfile=$outdir/$namespace.$_podname.log
  echo "Logging starts: ${namespace}.${_podname}  > \n\t$outfile"
  kubectl logs $_podname -n $namespace >$outfile
  echo "\tDone\n"
}

for podName in $podNames; do
  logPod "$podName"
done
