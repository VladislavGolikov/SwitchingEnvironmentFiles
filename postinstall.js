const path=require('path');
const fs=require('fs');



let fileName1=path.resolve(__dirname, `project.env`);
let fileName2=path.resolve(__dirname+`/node_modules/.bin/`, `project2.env`);

fs.copyFileSync(fileName1, fileName2)



/* задержка закрытия консоли */
setTimeout(()=>console.log(''),5000);


