let str:string = 'Hello World!!'
console.log(str)

const obj:object = { message: "Hello ts-node"}
console.log(obj)

const num:number = 2
console.log(num)

const two:number = 2
console.log(num)

const magic = ():void => {
  console.log('test')
}

const someArray: (string | boolean | number)[] = ["hoge", false, 2]

let profile_1: {name: string} = {
  name: 'riku'
}

type Mozi = string
let name_1: Mozi = "riku"
const exsample: User2 = {
  name: 'riku',
  isGod: true
}

type User = {
  name: string;
  age: string;
}

type Riku = typeof exsample

interface User2 {
  name: string
  isGod: boolean
}

let isFinished: boolean = true

const kasu = (): number => 43

let numberAny: any = kasu()
let numberUnknown: unknown = kasu()

let someAny = numberAny + 10;

// type gard
if (typeof numberUnknown === 'number') {
  let sumNumber = numberUnknown + 10
  console.log(sumNumber)
}

// type alias
type Pitcher1 = {
  thorowingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const sasaki: Pitcher1 = {
  thorowingSpeed: 154
}

const Ochiai: Batter1 = {
  battingAverage: 0.36
}

const Otani: TowWayPlayer = {
  thorowingSpeed: 144,
  battingAverage: 0.2
}
// insersection
type TowWayPlayer = Batter1 & Pitcher1

// リテラル型
let japanNumber:81 = 81

// enum
enum Months {
  January = 1,
  Febrary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  Septenber,
  October,
  November,
  December
}

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFF'
}
// 引数と戻り値にアノテーションをつける

function bmi(height:number, weight:number){
  return weight / (height * height)
}
console.log(bmi(1.71, 55))


const bim_2 = (height: number, weight: number, printable?: boolean): void =>  {
  if (printable) {
    console.log(`You bim is ${weight / (height * height)}`)
  }
}

bim_2(1.71, 55, true)

const nextYear = (currntRate:number, rate:number = 2.9) => {
  return currntRate * rate
}

console.log(nextYear(1000))

// スプレッド演算子 
const sum = (...values: number[]) => {
  console.log(values.reduce((acc, crr) => acc + crr, 10))
}

sum(1,2,3)

// シグネーチャーによるoverfide
function double(value :number): number
function double(value :string): string

function double(value: any): any {
  if (typeof value ===  'number') {
    return value * 2
  } else {
    return value + value
  }
}

console.log(double(11))
console.log(double("Riku"))

class Person {
  
  constructor(public name: string, protected age: number,  protected nationality: string){
    this.name = name
    this.age = age
    this.nationality = nationality
  }
  profile():string {
    return `name: ${this.name} age:${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality:string) {
    super(name, age, nationality)
  }

  profile(): string {
    return `name: ${this.name} age:${this.age} nationaritly:${this.nationality}`
  }
}
let taro = new Person('Taro', 22, 'japan')
console.log(taro.name)
console.log(taro.profile())



// アクセス修飾子
// public
// private
//protected
let ai = new Android('kizunaai', 11000, 'jp')
console.log(ai.profile())

// getter and setter

class MyNumberCard {
  constructor(
    private _owner: string, 
    private _secretNumber: number
  ) {
    this._owner = _owner
    this._secretNumber = _secretNumber
  }
  get owner() {
    return this._owner
  } 
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }
  printeSecretecode() {
    console.log(this._secretNumber)
  }
}

let card = new MyNumberCard('rikusan', 1234)
console.log(card.owner)
card.secretNumber = 9876
card.printeSecretecode()

// readonly修飾子

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('riku')
console.log(myVisaCard)

// 静的メンバ変数(クラス変)
class Me {
  static isProgrammer: boolean = true
  static firstName: string = 'Riku'

  static work () {
    return `This is static method and your name is ${this.firstName} !!`
  }
}

console.log(Me.isProgrammer)
console.log(Me.work())

// namespace
namespace Japan {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string)  {}
    }
  }
  export namespace Osak {
    export class Person {
      constructor(public name: string)  {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string, 
      public lastName: string
    )  {}
  }
}

const i = new Japan.Tokyo.Person('rikushan')
console.log(i.name)

const michael = new English.Person('michael', 'hpseph', 'jackson')
console.log(michael)

// 継承
// 単一継承しかできない
class Animal {
  constructor (public name: string) {}
  run():string {
    return 'I can run'
  }
}

class Rion extends Animal {
  public speed: number
  constructor(name: string, speed: number) {
    super(name)
    this.speed = speed
  }
  run():string {
    return `${super.run()} ${this.speed}km/h `
  }
}

let rion = new Rion('Shiba', 89)
console.log(rion.run())

// 抽象メソッド(signature シグネチャー)
// 大規模な開発には使える
abstract class Human {
  abstract cry(): string
}

class Japanese extends Human {
  cry() {
    return 'えーん'
  }
}

class White extends Human {
  cry() {
    return 'Ohpsss...' 
  }
}

// interface と実装

class Mahoutukai {}
class Souryo {}
class Taro extends Mahoutukai {}

interface Kenja {
  ionazun(): string
}
interface Sensi {
  kougeki(): string
}

class Jiro implements Kenja, Sensi {
  ionazun():string {
    return 'Damege 80 hp'
  }

  kougeki():string {
    return 'damege 10 hp'
  }
}

const jiro = new Jiro()
console.log(jiro.ionazun())
console.log(jiro.kougeki())

// 型の互換性

let fooCompatible: any
let barCompatible: string = 'riku'
console.log(typeof fooCompatible)
fooCompatible = barCompatible
console.log(typeof fooCompatible)

let fooString: string
let barLiteralString: 'hoge' = 'hoge'
