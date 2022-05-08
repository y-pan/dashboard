selfFileName=`echo $0 | sed "s/.*\///" | sed "s/\.sh//"`

projectsContainerDir=$1
showFlag=$2

echo "Dir: $projectsContainerDir"
echo "Flag: main - show main(develop|master) branch only, other - show non-main branch only; otherwise - show all"

showMainBranch=true
showOtherBranch=true
if [ "$showFlag" = "main" ]
then 
  showMainBranch=true
  showOtherBranch=false
fi
if [ "$showFlag" = "other" ]
then
  showMainBranch=false
  showOtherBranch=true
fi

# echo "showMainBranch  : $showMainBranch"
# echo "showOtherBranch : $showOtherBranch"

findBranch() {
  filePath=$1
  
  cd $filePath

  if [ -d .git ]; then
    branch=`git rev-parse --abbrev-ref HEAD`
    gitHash=`git rev-parse HEAD`
    
    if [ "$branch" = "develop" -o "$branch" = "master" ]; then
      if [ "$showMainBranch" = true ]; then
        echo $filePath | sed 's/\.\///g'
        echo "  * $branch" 
        echo "    $gitHash"
        echo ""
      fi
    else
      if [ "$showOtherBranch" = true ]; then
        echo $filePath | sed 's/\.\///g' 
        echo "    $branch"  
        echo "    $gitHash" 
        echo "" 
      fi
    fi
  fi
  cd - > /dev/null
}

echo "" 

cd $projectsContainerDir
allFilesOrDirs=`find . -maxdepth 1 -type d`
for f in $allFilesOrDirs; do

  if [ -d "$f" ] ; then
    # echo "dir: " $f
    findBranch $f
  fi

done

