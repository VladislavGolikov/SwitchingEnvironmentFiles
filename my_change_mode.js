const path=require('path');
const fs=require('fs');
const colors=require('colors');

const fileName=path.resolve(__dirname, `project.env`);
const key='assembly';
const dev='development';
const pro='production';

try{
    /* берется только первая строка из читаемого файла и очищается от мусорных символов */
    const newData=String(fs.readFileSync(fileName, 'utf-8').split('\n',1)).trim();

    /* только если сборка уже установлена в девелопмент - она становится продакшен, во всех остальных случаях - станет девелопмент! */
    const result=(newData.split("=")[0]===key&&newData.split("=")[1]==dev) ? pro : dev;

    console.log(`Предыдущее состояние: ${newData.inverse}`.yellow);
    console.log(`\n\nПеременная среды: ${key.inverse} установлена в значение ${result.inverse}`.brightGreen);

    fs.writeFileSync(fileName, `${key}=${result}`);
}
catch(err){
    console.log(err.message.red);
    try{
        fs.writeFileSync(fileName, `${key}=${dev}`);
        console.log(`\nВоссоздание файла переменных среды...\nПеременная среды: ${key.inverse} установлена в значение ${dev.inverse}`.yellow);
    }
    catch(err){console.log(err.message.red)}
}
/* добавить поиск файла окружения - и в имя автоматом */



/* не закрываем консоль */
setTimeout(()=>console.log(''),6000);


