interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

interface Employee extends Person {
  company: string;
}

/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
export function getPersons(): Person[] {
  return [];
}

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' | 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' | 'female'
   - company- строка
 */
export function personToString(person: Person | Employee): string {
  return '';
}
