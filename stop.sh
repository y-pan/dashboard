serverPort=`cat src/config.json | grep "serverPort" | sed 's/[^0-9]*//g'`
echo "Stopping dashboard on port: $serverPort"
kill `lsof -ti:$serverPort`
