# allImages=`kubectl get pods --all-namespaces -o jsonpath="{.items[*].spec.containers[*].image}"`
difOnly=`[[ "$1" == "dif" ]] && echo true || echo false`

devImages=`kubectl get pods --namespace dev-blue -o jsonpath="{.items[*].spec.containers[*].image}"` 
devImagesLines=`echo "${devImages}" | sed "s/ /\n/g" | sed "s/^.*\///g"`

demoImages=`kubectl get pods --namespace demo-blue -o jsonpath="{.items[*].spec.containers[*].image}"`
demoImagesLines=`echo ${demoImages} | sed "s/ /\n/g" | sed "s/^.*\///g"`

prodImages=`kubectl get pods --namespace prod-red -o jsonpath="{.items[*].spec.containers[*].image}"`
prodImagesLines=`echo ${prodImages} | sed "s/ /\n/g" | sed "s/^.*\///g"`

selfFileName=`echo ${0} | sed "s/.*\///" | sed "s/\.sh//"`
echo "##### ${selfFileName} - `date +"%Y-%m-%d %H:%M:%S"` #####\n"

env1="$devImagesLines"
namespace1=dev-blue

env2="$demoImagesLines"
namespace2=demo-blue

env3="$prodImagesLines"
namespace3=prod-red

# get distinct images
allImages=$()

for line in $env1; do
  imageName=`echo $line | sed "s/:.*$//"`
  allImages+="$imageName\n"
done

for line in $env2; do
  imageName=`echo $line | sed "s/:.*$//"`
  allImages+="$imageName\n"
done

for line in $env3; do
  imageName=`echo $line | sed "s/:.*$//"`
  allImages+="$imageName\n"
done

allImages=`echo "$allImages" | sort -u`

for imageName in $allImages
do 
  
  lineInEnv1=`echo "${env1}" | grep "${imageName}" | head -n 1`
  lineInEnv2=`echo "${env2}" | grep "${imageName}" | head -n 1`
  lineInEnv3=`echo "${env3}" | grep "${imageName}" | head -n 1`

  tag1=`echo $lineInEnv1 | sed "s/^.*://" | sed "s/${namespace1}-*//"`
  tag2=`echo $lineInEnv2 | sed "s/^.*://" | sed "s/${namespace2}-*//"`
  tag3=`echo $lineInEnv3 | sed "s/^.*://" | sed "s/${namespace3}-*//"`
  
  dif12=`[[ "$tag1" == "$tag2" ]] && echo "" || echo "<--"`
  dif13=`[[ "$tag1" == "$tag3" ]] && echo "" || echo "<--"`

  echo "[${namespace1}]\t${lineInEnv1}"

  ! ${difOnly} || [ ! -z "${dif12}" ] && echo "[${namespace2}]\t${lineInEnv2}\t${dif12}" || echo "[${namespace2}]\t= ${namespace1}"
  ! ${difOnly} || [ ! -z "${dif13}" ] && echo "[${namespace3}]\t${lineInEnv3}\t${dif13}" || echo "[${namespace3}]\t= ${namespace1}"

  echo ""
done
