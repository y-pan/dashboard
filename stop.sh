serverPort=`cat src/config.json | grep "port" | sed 's/[^0-9]*//g'`
echo "Stopping dashboard on port: $serverPort"
kill `lsof -ti:$serverPort`
