// generics 
// 汎用的な型を作成する

const echo = <T>(args: T):T => args
console.log(echo<number>(100))
console.log(echo<boolean>(true))
console.log(echo<string>('mana'))
console.log(echo('manasan')) // stringLiteralになる

class Mirro<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value
  }
}
console.log(new Mirro<string>('rikusan').echo())




