const antlr4 = require('antlr4');

class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw new Error(`Línea ${line}, columna ${column}: ${msg}`);
    }
}

module.exports = CustomErrorListener;
