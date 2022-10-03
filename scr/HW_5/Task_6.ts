/*#### Task 6 💻

Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

+ булевое значение
+ функцию **foo** которая выводит в консоль свое имя
+ функцию **boo** которая выводит в консоль свое имя

> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo***/

const foo = (): string => {
    return "foo";
};
const boo = (): string => {
    return "boo";
};

function fooboo(a: boolean, foo: () => string, boo: () => string) {
    if (a) {
        return foo();
    } else {
        return boo();
    }
}

console.log(fooboo(false, foo, boo));
