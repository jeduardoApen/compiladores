    /**
     * Representa el parser
     * @param {String} input - Cadena de entrada
     */


/*

    Se definió la siguente gramatica para operaciones aritmeticas
        E  -> T E'
        E' -> + T E' | ε
        T  -> F T'
        T' -> * F T' | ε
        F  -> ( E ) | id | number



*/




class Parser {
    constructor(input) {
        this.input = input; 
        this.index = 0;     // Índice actual en la cadena
        this.currentToken = this.input[this.index]; // Token actual
    }

    /**
     * Avanzar al siguiente token
     */
    advance() {
        this.index++;
        this.currentToken = this.index < this.input.length ? this.input[this.index] : null;
    }

    /**
     * 
     * @param {String} expectedToken - Verificar si el token actual coincide con el esperado
     */
    
    match(expectedToken) {
        if (this.currentToken === expectedToken) {
            this.advance();
        } else {
            throw new Error(`Error de sintaxis: se esperaba ${expectedToken}, pero se encontró ${this.currentToken}`);
        }
    }

    /**
     * Regla para E
     */
    parseE() {
        this.parseT();
        this.parseEPrime();
    }

    /**
     * Regla para E'
     */
    parseEPrime() {
        if (this.currentToken === '+') {
            this.match('+');
            this.parseT();
            this.parseEPrime();
        }
        // ε (no hacer nada)
    }

    /**
     *  Regla para T
     */
    parseT() {
        this.parseF();
        this.parseTPrime();
    }

    /**
     * Regla para T'
     */

    parseTPrime() {
        if (this.currentToken === '*') {
            this.match('*');
            this.parseF();
            this.parseTPrime();
        }
        // ε (no hacer nada)
    }

    /**
     * Regla para F
     */
    parseF() {
        if (this.currentToken === '(') {
            this.match('(');
            this.parseE();
            this.match(')');
        } else if (this.currentToken === 'id' || this.currentToken === 'number') {
            this.advance();
        } else {
            throw new Error(`Error de sintaxis: token inesperado ${this.currentToken}`);
        }
    }

    /**
     * Iniciar el analisis
     */
    parse() {
        this.parseE();
        if (this.currentToken !== null) {
            throw new Error(`Error de sintaxis: entrada no completamente procesada`);
        }
        console.log("Análisis sintáctico completado con éxito.");
    }
}


// Ejemplo de uso

const inputParserError = ['id', '+', '*', 'id', 'number']; // Cadena de entrada erronea
const inputParser = ['number', '+', 'id', '*', 'id']; // Cadena de entrada aceptada

const parser = new Parser(inputParserError);
parser.parse();



export default parser
