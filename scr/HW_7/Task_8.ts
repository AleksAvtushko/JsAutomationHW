/* #### Task 1 👨‍🏫

Реализуйте функцию которая будет проверять, является ли слово палиндромом. */

function palindrome(world1: string) {
    let world2 = "";
    for (let i = world1.length - 1; i >= 0; i--) {
        world2 += world1[i];
    }
    return world1 === world2;
}

console.log(palindrome("goga"));
