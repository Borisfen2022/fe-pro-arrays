/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Это используется для удобного быстрого перебора массива, она ничего не возвращает, просто обрабатывает коллбеком каждый элемент массива,
  фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который получается в результате вычисления callback для каждого элемента.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(arr[i], i, arr);
    newArray.push(callbackResult);
  }
  return newArray;
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который включает в себя элементы только те, для которых callback вернул true.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/ 0;
function filter(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(arr[i], i, arr);
    if (callbackResult) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

/* Функция принимает в себе первым  ,mmmmmx+,аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива, 3 аргумент изначальный вариант
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Это используется для удобного быстрого перебора массива. Функция должна результат.
 Функция возвращает результат вычислений. В callback передаем 4 аргумента.
 Первый это предыдущий элемент(для первой итерации как раз используется initialValue), второй это текущий элемент перебора, 3 индекс и 4 сам массив.
 Смотрите на пример в example.js
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function reduce(array, callback, initialValue) {
  const withInitialValue = inintialValue !== underfind;
  let accumulator = withInitialValue ? initialValue : arr[0];

  for (let i = withInitialValue ? 0 : 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет true, то вся функция возвращает true/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function some(array, callback) {
  let result = false;

  for (let i = 0; i < array.length; i++) {
    result = callback(arr[i], i, arr);
    if (result) break;
  }
  return result;
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет false, то вся функция возвращает false/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function every(array, callback) {
  let result = false;

  for (let i = 0; i < array.length; i++) {
    result = callback(arr[i], i, arr);
    if (!result) break;
  }
  return result;
}

// Эту часть не удаляем, она важна для проверки результата
module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
};
