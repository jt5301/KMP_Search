//openasset regex q

const files = ['\\server1\\images\\Healthcare\\8342-St Botolphs Corner\\photographs\\foo.tif', '\\server1\\images\\Commercial\\9453-Range Grove\\rendered\\bar.jpg']

let regex = /\\server1\\images\\(\w+)\\([\w-\s]+)\\(\w+)\\(\w+)/
let
// let match = regex.exec(file)
//   console.log(match)
for (let i = 0; i < files.length; i++) {
  let file = files[i]
  let match = regex.exec(file)
  console.log(match[1])
  console.log(match[2])
  console.log(match[3])
  console.log(match[4])
}
