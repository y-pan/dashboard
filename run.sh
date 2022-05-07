serverPort=`cat src/config.json | grep "port" | sed 's/[^0-9]*//g'`
./stop.sh

echo "Running dashboard server on port: $serverPort"

npm i
npm run serve
