const fs=require('fs');

const fileName='project.env';
const key='assembly';
const dev='development';
const pro='production';

const oldData=fs.readFileSync(fileName, 'utf-8');



const newData=String(oldData.split('\n',1)).trim();


if (newData.split("=")[0]===key||newData.split("=")[1]==dev) {console.log(true)} else {console.log(false)}

console.log(newData.split("=")[0]);
console.log(newData.split("=")[1]);

fs.writeFileSync('project.env', `${key}=${dev}`)


setTimeout(()=>console.log(''),3000)


