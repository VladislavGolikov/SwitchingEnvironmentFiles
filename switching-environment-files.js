const path=require('path');
const fs=require('fs');
const colors=require('colors');

const key='assembly';
const dev='development';
const pro='production';
const fileExtension='env';
const directory=path.join(__dirname,`..`,`..`);
let fileName=path.resolve(directory, `project.env`);;

try{
    /* берется только первый файл с совпадающим расширением из текущей папки: */
    fileName=path.resolve(directory,fs.readdirSync(path.resolve(directory)).filter(function(el){
        if (el.split('.')[1]==fileExtension) return el;
    })[0]);
}
catch{
    /* если ни одного файла не нашлось, создается дефолтный: */
    console.log(`Файл с переменными окружения создается...\n`.red);

}
console.log(`Найден файл с переменными окружения: ${fileName}\n\n`.brightGreen);

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


/* задержка закрытия консоли */
setTimeout(()=>console.log(''),5000);

/* пробуем функцию для теста jest: (это заглушка пока будущего тестирования...) */

module.exports.functionForTest=function probe(a) {
    return a;
}
