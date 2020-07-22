/**
 * Создает новый массив объектов со всеми элементами, прошедшими проверку
 * @method filterArrayObjects

  * @param {array} [array] массив исходных объектов
  * @param {string} [key] имя свойства по которому выполняется проверка
  * @param {string} [argument] аргумент по которому выполняется проверка
  * @return {array}
  */
const filterArrayObjects = (array, key, argument) => {
  return array.filter((item) => item[key] === argument);
};

export {filterArrayObjects};
