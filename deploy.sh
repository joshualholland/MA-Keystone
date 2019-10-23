echo 'Deploying to production repo'
rm -rf ~/vs-workspace/morganAshleyDeploy/.gitignore
rm -rf ~/vs-workspace/morganAshleyDeploy/.env
rm -rf ~/vs-workspace/morganAshleyDeploy/*
cp -avr client ../morganAshleyDeploy/client
cp -avr customModules ../morganAshleyDeploy/customModules
cp -avr models ../morganAshleyDeploy/models
cp -avr pages ../morganAshleyDeploy/pages
cp -avr public ../morganAshleyDeploy/public
cp -avr updates ../morganAshleyDeploy/updates
cp -avr routes ../morganAshleyDeploy/routes
cp -av keys.json ../morganAshleyDeploy/keys.json
cp -av .env ../morganAshleyDeploy/.env
cp -av keystone.js ../morganAshleyDeploy/keystone.js
cp -av next.config.js ../morganAshleyDeploy/next.config.js
cp -av package.json ../morganAshleyDeploy/package.json
printf "node_modules\npackage-lock.json\n.next\npublic/stylists/\npublic/team/\n" >> ../morganAshleyDeploy/.gitignore
