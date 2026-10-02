const fs = require('fs');

const paths = [
    'c:/Users/HIEUPHAM/000067-container-ecs-fargate/amazon-ecs-mythicalmysfits-workshop/workshop-2/script/populate-dynamodb.json',
    'c:/Users/HIEUPHAM/000067-container-ecs-fargate/amazon-ecs-mythicalmysfits-workshop/workshop-3/script/populate-dynamodb.json'
];

for (const p of paths) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/_hover\.png/g, '_thumb.png');
    fs.writeFileSync(p, content);
    console.log('Updated ' + p);
}

const shPath = 'c:/Users/HIEUPHAM/000067-container-ecs-fargate/amazon-ecs-mythicalmysfits-workshop/workshop-1/script/load-ddb';
let shContent = fs.readFileSync(shPath, 'utf8');
shContent = shContent.replace(/_hover\.png/g, '_thumb.png');
fs.writeFileSync(shPath, shContent);
console.log('Updated ' + shPath);
