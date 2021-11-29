const path=require('path');
const fs=require('fs');
const colors=require('colors');


const fileName=path.join(__dirname,`..`,`.bin`, `my_change_mode.cmd`);

try{
    fs.unlinkSync(fileName);
    console.log(`Файл ${fileName} был удален!`.blue);



}
catch(err){
    console.log(err);
    console.log(`Не удалось удалить ${fileName}`.red);
}



/* задержка закрытия консоли */
setTimeout(()=>console.log(''),5000);



