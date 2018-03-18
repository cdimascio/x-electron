rsync -avz -e ssh test.js pi@10.0.0.210:git/ecl-bot-client/test.js

rsync -avz -e ssh index.js pi@10.0.0.210:git/ecl-bot-client/index.js
rsync -avz -e ssh client/ pi@10.0.0.210:git/ecl-bot-client/client
rsync -avz -e ssh ./.env pi@10.0.0.210:git/ecl-bot-client/.env
rsync -avz -e ssh ./.npmrc pi@10.0.0.210:git/ecl-bot-client/.npmrc
rsync -avz -e ssh package.json pi@10.0.0.210:git/ecl-bot-client/package.json
rsync -avz -e ssh yarn.lock pi@10.0.0.210:git/ecl-bot-client/yarn.lock
rsync -avz -e ssh scripts/ecl-bot pi@10.0.0.210:git/ecl-bot-client/scripts/ecl-bot