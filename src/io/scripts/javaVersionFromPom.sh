# Need to pass in the target lib name
projectsContainerDir=$1
#test
# projectsContainerDir=~/Documents/yun

selfFileName=$(echo $0 | sed "s/.*\///" | sed "s/\.sh//")

trim() {
  echo $* | sed "s/ //g" | sed "s/\n//g" | sed "s/\t//g"
}

extractLibFromPomXml() {
  filePath=$1

  lines=$(cat $projectsContainerDir/$filePath | grep "<java.version>")
  lines=$(trim $lines)
  if [ ! -z "$lines" ]; then
    echo "$filePath"
    echo "\t$lines"
    echo ""
  fi
}

cd $projectsContainerDir

allPom=$(ls */pom.xml)

echo "##### ${selfFileName} - $(date +"%Y-%m-%d %H:%M:%S") - under dir: ${projectsContainerDir} #####"

for filePath in $allPom; do
  extractLibFromPomXml $filePath $libName
done
