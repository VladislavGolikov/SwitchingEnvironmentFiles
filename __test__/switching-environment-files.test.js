/* вообще простой тест должен выглядеть так, но пока не понятно, что в принципе тут тестить в пакете... */

const path=require('path');

const fileForTest=require(path.join(__dirname,`..`,`switching-environment-files.js`));

test('пробуем вообще как это все работает', () => {

    /* поэтому пока все это будет заглушкой: */

    expect(fileForTest.functionForTest(true)).toBe(true);

});
