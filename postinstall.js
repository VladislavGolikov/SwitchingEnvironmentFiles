const path=require('path');
const fs=require('fs');
const colors=require('colors');

const fileName=path.resolve(__dirname, `package.json`);

const command=`start node ./node_modules/mychange/my_change_mode.js`;
const key=`sw`;
const scriptName=`mychange`;
//const fileName2=path.join(__dirname,`..`,`.bin`, `my_change_mode.cmd`);

try{
    let jsonFromFile=JSON.parse(fs.readFileSync(fileName));


    jsonFromFile.scripts.sw=command;

    console.log(`В ${fileName} был добавлен ключ ${key.bgGreen} для запуска пакета ${scriptName.bgGreen}`.yellow);

    fs.writeFileSync(fileName,JSON.stringify(jsonFromFile,null,`  `))

    console.log(`\n\n Для запуска скрипта ${scriptName.bgGreen} использовать команду: `.yellow+`npm run sw`.green);

}
catch(err){
    console.log(err);
    console.log('Не удалось добавить ключ для запуска'.red);
}



/* задержка закрытия консоли */
setTimeout(()=>console.log(''),5000);


