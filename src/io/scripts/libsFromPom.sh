# Need to pass in the target lib name
projectsContainerDir=$1
LIB1=$2
LIB2=$3

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

cd $projectsContainerDir
allPom=`ls */pom.xml`

echo "##### ${selfFileName} - `date +"%Y-%m-%d %H:%M:%S"` #####"
for libName in "$@"
do
  if [ "$libName" != "$projectsContainerDir" ]; then
    echo "\n=== [$libName] in all pom.xml, under $projectsContainerDir ===\n" 
    for filePath in $allPom
    do 
      extractLibFromPomXml $filePath $libName
    done
  fi
done

