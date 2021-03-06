namespace=$1
serviceName=$2

if [ -z "$namespace" ]
then
  echo "Missing arguments. Example like: kubeLog dev-blue <search-word-for-service-name>"
  exit
fi

timestamp=`date +"%Y%m%d_%H%M%S"`
outdir=~/Downloads/kubelog_$timestamp
mkdir -p $outdir

echo "outdir: $outdir namespace: $namespace, service name: ${serviceName} "

# discard the top line (header), take first column which is the pod name.
podNames=`kubectl get pods -n "$namespace" | tail -n +2 | grep "${serviceName}" | awk '{print $1}'`

logPod() {
  _podname=$1
  
  outfile=$outdir/$namespace.$_podname.log
  echo "Logging starts: ${namespace}.${_podname}  > $outfile"
  kubectl logs $_podname -n $namespace > $outfile
  echo "Done"
}

for podName in $podNames
do 
  logPod "$podName" 
done
