# Need to pass in the target lib name
LIB1=$1
LIB2=$2

selfFileName=`echo $0 | sed "s/.*\///" | sed "s/\.sh//"`

trim() {
  echo $* | sed "s/ //g" | sed "s/\n//g" | sed "s/\t//g";
}

extractLibFromPomXml() {
  filePath=$1
  libName=$2

  lines=`cat $projectsContainerDir/$filePath | grep -A 1 "<artifactId>${libName}</artifactId>"`
  lines=`trim $lines`
  if [ ! -z "$lines" ]
  then
    echo "$filePath"
    echo "\t$lines"
  fi
}

projectsContainerDir=~/Documents/yun
cd $projectsContainerDir
allPom=`ls */pom.xml`

echo "##### ${selfFileName} - `date +"%Y-%m-%d %H:%M:%S"` #####"
for libName in "$@"
do
    echo "\n=== [$libName] in all pom.xml, under $projectsContainerDir ===\n" 
    for filePath in $allPom
    do 
      extractLibFromPomXml $filePath $libName
    done
done

