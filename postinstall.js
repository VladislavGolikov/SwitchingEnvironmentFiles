const path=require('path');
const fs=require('fs');
const colors=require('colors');

const fileNameOurs=path.join(__dirname, `package.json`); /* берем с своего джейсона имена скрипта */
try{
    const jsonOursFile=JSON.parse(fs.readFileSync(fileNameOurs));

    const scriptName=jsonOursFile.main;
    const scriptPathName=jsonOursFile.name;

    const command=`start node ./node_modules/${scriptPathName}/${scriptName}`;
    const key=`sw`;

    const fileName=path.join(__dirname,`..`,`..`, `package.json`);

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


