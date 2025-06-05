import fs from 'fs';
import antlr4 from 'antlr4';
import configuracionLexer from './generated/configuracionLexer.js';
import configuracionParser from './generated/configuracionParser.js';

class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({ line, column, msg });
  }
}

async function main() {
  const inputFile = 'input.txt';

  const input = fs.readFileSync(inputFile, 'utf-8');
  const chars = new antlr4.InputStream(input);
  const lexer = new configuracionLexer(chars);

  const errorListenerLex = new CustomErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListenerLex);

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new configuracionParser(tokens);

  const errorListenerParser = new CustomErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(errorListenerParser);

  try {
    parser.program();
  } catch (e) {
    console.error('Error crítico durante el parsing:', e.message);
    process.exit(1);
  }

  const allErrors = [...errorListenerLex.errors, ...errorListenerParser.errors];

  if (allErrors.length === 0) {
    console.log('Entrada correcta. No se encontraron errores léxicos ni sintácticos.');
  } else {
    console.log('Se encontraron errores:');
    allErrors.forEach(({ line, column, msg }) => {
      console.log(`  Línea ${line}, Columna ${column}: ${msg}`);
    });
  }
}

main();
