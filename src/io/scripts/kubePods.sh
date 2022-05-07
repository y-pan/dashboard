flag=$1

echo "flag: $flag"

check() {
  namespace=$1
  echo "[${namespace}] ===>>>\n"
  if [ "$flag" = "off" ]
  then
    lines=`kubectl get pods --namespace ${namespace} | tail -n +2 | grep -v "Running"`
    echo "$lines"
  else
    lines=`kubectl get pods --namespace ${namespace} | tail -n +2`
    echo "$lines"
  fi
}

check dev-blue

echo ""

check demo-blue

echo ""

check prod-red
