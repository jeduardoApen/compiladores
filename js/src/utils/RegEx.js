/**
 * @class Token
 * Estructura básica del token
 * @param {string} token - Nombre del tipo de Token creado
 * @param {object} exp - Instancia un objeto del tipo RegExp(), recibe una expresión Regular
 */
 
class Token {

    constructor(token="", exp) {
        this.token  = token.toLocaleUpperCase()
        this.exp = exp
    }
}



/**
 * @class Dictionary
 * Estructura que almacena los tokens registrados y la logica empleada en los mismos
 */


class Dictionary{

    /**
     * @type {Array} dic - Arreglo para almacenar los tokens
     */
    constructor(){
        this.dic = []
    }


    /**
     * Crea y agrega un token al arreglo
     * @param {string} name - Identificador del tipo para el token
     * @param {object} exp -  Expresión regular asociada al token
     * 
     * @returns {object} Devuelve la lista actualizada
     */

    addToken(name ='', exp){
        let newToken = new Token(name, exp)
        this.dic.push(newToken)
        return this.dic
    }


    /**
     * 
     * @returns {Object} Devuelve la lista actual
     */

    getList(){
        return this.dic
    }


    /**
     * 
     * @returns {Number} Devuelve la longitud de la lista
     */

    getLen(){
      return this.dic.length
    }


    /**
     * 
     * @param {text} text - Recibe el texto que se quiere analizar con la expresión 
     * @param {Number} index - Indice del token que se quiere comprobar
     * @returns {Boolean} - Devuelve Verdadero si la expresión coincide, 
     *  de lo contrario devuelve Falso
     */

    verifyText(text ='', index){
        return this.dic[index].exp.test(text)
    }

    /**
     * 
     * @param {String} text - Recibe el texto que desea analizar con la expresión 
     * @param {Number} index - Indice del token a comprobar
     * @returns {Object} - Devuelve un objeto que contiene el tipo del token, 
     *  la cadena que coincide con la expresión y un detalle relacionado con 
     *  la expresión regular
     */

    checkExp(text = "", index){
        
        if( this.verifyText(text, index) ){
            
            let matchToken = text.match(this.dic[index].exp)

            let result = {
                tokenType: this.dic[index].token,
                matchText: matchToken.shift(),
                tokenDetail: matchToken,
                idToken: index
            }
            return result
        }
    }
}


let dictionary = new Dictionary()

/**
 * Listado de tokens registros para el analisis correspondiente
 */

dictionary.addToken('variable', /\$[a-zA-Z0-9_-]+/)
dictionary.addToken('KeywordBegin', /\b(if|else|while|for|then)\b\:/)
dictionary.addToken('KeywordEnd', /\b(endif|endwhile|endfor)\b/)
dictionary.addToken('OtherKeywords', /\b(return|const)\b/)
dictionary.addToken('number', /\d+(\.\d+)?/)
dictionary.addToken('Assing', /^=$/)
dictionary.addToken('Equal', /^==$/)
dictionary.addToken('EqualStr', /^===$/)
dictionary.addToken('Plus', /^\+$/)
dictionary.addToken('Minus', /^\-$/)
dictionary.addToken('Multiply', /^\*$/)
dictionary.addToken('Divide', /^\/$/)
dictionary.addToken('Divide', /^\%$/)
dictionary.addToken('InitCurlBracket', /^\{$/)
dictionary.addToken('EndCurlBracket', /^\}$/)
dictionary.addToken('InitSqrBracket', /^\[$/)
dictionary.addToken('InitSqrBracket', /^\]$/)


/**
 * Devuelve la lista para su uso en otro modulo
 */
export default dictionary