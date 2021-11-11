const fs=require('fs');

const fileName='project.env';
const key='assembly';
const dev='development';
const pro='production';


/* берется только первая строка из читаемого файла и очищается от мусорных символов */
const newData=String(fs.readFileSync(fileName, 'utf-8').split('\n',1)).trim();

/* только если сборка уже установлена в девелопмент - она становится продакшен, во всех остальных случаях - станет девелопмент! */
const result=(newData.split("=")[0]===key&&newData.split("=")[1]==dev) ? pro : dev;


console.log(`Предыдущее состояние: ${newData}`);
console.log(`Переменная среды: ${key} установлена в значение ${result}`);

fs.writeFileSync('project.env', `${key}=${result}`);

/* не закрываем консоль 3 сек */
setTimeout(()=>console.log(''),3000);


