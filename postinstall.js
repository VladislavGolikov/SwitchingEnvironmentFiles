﻿const path=require('path');
const fs=require('fs');

const fileName1=path.resolve(__dirname, `my_change_mode.cmd`);
const fileName2=path.join(__dirname,`..`,`.bin`, `my_change_mode.cmd`);

try{
    fs.copyFileSync(fileName1, fileName2);
    console.log('Для запуска скрипта использовать команду: "npm run sw"');
}
catch(err){
    console.log(err);
    console.log('Не удалось скопировать скрипт для запуска');
}



/* задержка закрытия консоли */
setTimeout(()=>console.log(''),5000);

