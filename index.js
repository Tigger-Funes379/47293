import antlr4 from 'antlr4';
import ConfiguracionLexer from './antlr/configuracionLexer.js';
import ConfiguracionParser from './antlr/configuracionParser.js';
import CustomVisitor from './CustomConfiguracionVisitor.js';
import fs from 'fs';

// Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new ConfiguracionLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// Crear parser
const parser = new ConfiguracionParser(tokens);
parser.buildParseTrees = true;
const tree = parser.prog();

// Tabla de tokens
console.log('Tabla de tokens:');
console.log('Token               Tipo           Línea   Columna');
console.log('-------------------------------------------------');
tokens.tokens.forEach(token => {
    if (!token || token.type < 0) return; // Ignorar tokens EOF o inválidos
    const tipo = ConfiguracionLexer.symbolicNames[token.type] || 'Desconocido';
    const valor = token.text;
    const linea = token.line;
    const columna = token.column;
    console.log(`${valor.padEnd(20)} ${tipo.padEnd(14)} ${linea.toString().padEnd(7)} ${columna}`);
});

function imprimirArbolFlechas(str) {
  let indent = 0;
  let resultado = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(') {
      indent++;
      resultado += '\n' + '  '.repeat(indent) + '→ ';
    } else if (ch === ')') {
      indent--;
    } else if (ch === ' ') {
      resultado += ' ';
    } else {
      resultado += ch;
    }
  }
  return resultado;
}

console.log("\nÁrbol de derivación:");
const arbolStr = tree.toStringTree(parser.ruleNames);
console.log(imprimirArbolFlechas(arbolStr));

// Visitor
const visitor = new CustomVisitor();
const codigoJS = visitor.visit(tree);

// Salida del visitor

console.log("\nCódigo JavaScript generado:");
console.log(codigoJS);

try {
  console.log("\nEjecución del código generado:");
  const resultado = eval(codigoJS);
  console.log(resultado);
} catch (e) {
  console.error("Error ejecutando el código generado:", e);
}
