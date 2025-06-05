class CustomErrorListener {
    constructor() {
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({
            line,
            column,
            message: msg
        });
        console.error(`❌ Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
    }
}

export default CustomErrorListener;
