export {}

let profile: {name?: string, age?:number} = {}
profile.name = 'Riku'
profile.age = 42

// how to write index sigunature

interface Profile {
  [index: string]: string | number | boolean
}
let profile2: Profile = {}
profile2.name = 'Riku'
profile2.age = 42