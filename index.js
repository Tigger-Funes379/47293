import antlr4 from 'antlr4';
import fs from 'fs';
import configuracionLexer from './generated/configuracionLexer.js';
import configuracionParser from './generated/configuracionParser.js';
import configuracionVisitor from './generated/configuracionVisitor.js';
import CustomErrorListener from './ErrorListener.js';

const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new configuracionLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// Tabla de lexemas y tokens
console.log("📋 Tabla de lexemas y tokens:\n");
console.log("┌─────────────┬────────────┐");
console.log("│ Lexema      │ Token      │");
console.log("├─────────────┼────────────┤");
tokens.tokens.forEach(token => {
    if (token.type !== -1 && token.type !== antlr4.Token.EOF) {
        const tokenName = configuracionLexer.symbolicNames[token.type] || `'${token.text}'`;
        console.log(`│ ${token.text.padEnd(11)} │ ${tokenName.padEnd(10)} │`);
    }
});
console.log("└─────────────┴────────────┘");

const parser = new configuracionParser(tokens);
parser.removeErrorListeners();
parser.addErrorListener(new CustomErrorListener());

const tree = parser.program();
console.log("\n🌳 Árbol de análisis sintáctico:\n");
function printTree(ctx, depth = 0) {
    const indent = "  ".repeat(depth);
    const ruleName = parser.ruleNames[ctx.ruleIndex];
    console.log(`${indent}-> ${ruleName}`);
    for (let i = 0; i < ctx.getChildCount(); i++) {
        const child = ctx.getChild(i);
        if (child.ruleIndex !== undefined) {
            printTree(child, depth + 1);
        } else {
            console.log(`${"  ".repeat(depth + 1)}- '${child.getText()}'`);
        }
    }
}
printTree(tree);

class JSVisitor extends configuracionVisitor {
    visitProgram(ctx) {
        return ctx.simpleStatement().map(stmt => this.visit(stmt)).join('\n');
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.Identifier().getText();
        const val = this.visit(ctx.constant());
        return `let ${id} = ${val};`;
    }

    visitOutputStatement(ctx) {
        const txt = ctx.TextLiteral().getText();
        return `console.log(${txt});`;
    }

    visitConstant(ctx) {
        if (ctx.Number()) return ctx.Number().getText();
        if (ctx.TextLiteral()) return ctx.TextLiteral().getText();
    }
}

const visitor = new JSVisitor();
const jsCode = visitor.visit(tree);

console.log("\n🖥️ Código JavaScript generado:");
console.log(jsCode);

console.log("\n🚀 Salida del código:");
try {
    eval(jsCode);
} catch (e) {
    console.error("❌ Error al ejecutar el código generado:", e.message);
}
