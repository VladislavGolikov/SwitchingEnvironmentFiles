const path=require('path');
const fs=require('fs');
const colors=require('colors');

const command=`start node ./node_modules/mychange/my_change_mode.js`;
const key=`sw`;
const scriptName=`mychange`;
const fileName=path.join(__dirname,`..`,`..`, `package.json`);

try{
    const jsonFromFile=JSON.parse(fs.readFileSync(fileName));


    jsonFromFile.scripts.sw=command;

    fs.writeFileSync(fileName,JSON.stringify(jsonFromFile,null,`  `))

    console.log(`В ${fileName} был добавлен ключ ${key.bgGreen} для запуска пакета ${scriptName.bgGreen}`.yellow);

    console.log(`\n\n Для запуска скрипта ${scriptName.bgGreen} использовать команду: `.yellow+`npm run sw`.green);

}
catch(err){
    console.log(err);
    console.log('Не удалось добавить ключ для запуска'.red);
}

/* задержка закрытия консоли */
setTimeout(()=>console.log(''),5000);


