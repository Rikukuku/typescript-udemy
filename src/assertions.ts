export {};
let name: any = 'Riku'
let len = name.length as number // プログラマが型の責任をとるということ
let len2 = (name as string).length
let len3 = (<string>name).length

len = 289
len2 = 289
len3 = 222

// const assertion

let firstName = 'Atsushi'
firstName = 'Ham'

let nickname = 'Riku' as const // 文字列リテラルになる => readonlun

let profile = {
  height: 178,
  name: 'Atushi'
} as const








