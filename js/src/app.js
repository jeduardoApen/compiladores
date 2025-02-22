import dictionary from "./utils/RegEx.js"

// dictionary





console.log(dictionary.getList())

console.log(dictionary.checkExp("$hello", 0))
console.log(dictionary.checkExp("if:", 1))
console.log(dictionary.checkExp("endif", 2))
console.log(dictionary.checkExp("1234234", 3))
console.log(dictionary.checkExp("1.21312", 4))
console.log(dictionary.verifyText("$hello", 0))


function checkString(text = ""){
    let textTrim = text.trim()
    let arrayText =  textTrim.split(" ")
    console.log(arrayText)
    let result = []

    arrayText.map((elm)=>{
      let data = {}
      let noSpacesText = elm.trim()
      // console.log(noSpacesText)
      // console.log(dictionary.getLen())

    if(noSpacesText){

        for (let i = 0; i < dictionary.getLen(); i++) {
         
          if(dictionary.verifyText(noSpacesText, i)){

            data = dictionary.checkExp(noSpacesText, i)
            // console.log("this",i, data)
            result.push(data)
            return
          }

        }
      
        
        result.push(
          {
            tokenType: 'UNKNOWNTOKEN',
            matchText:noSpacesText,
            tokenDetail: "This string does not match any token"
        }
      )

  
      }
    })


    console.log(result)
    return result

}



let textTest = `
if: $x  == 10 then: { 
  $value = 3.3 / 2 + 1

  $array = [ 123 ]

  }
  abc

  endif `


  

checkString(textTest)



export default checkString