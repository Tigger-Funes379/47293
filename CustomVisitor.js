const ConfiguracionVisitor = require('./generated/ConfiguracionVisitor').ConfiguracionVisitor;

class CustomVisitor extends ConfiguracionVisitor {
    constructor() {
        super();
        this.variables = {};
    }

    visitProgram(ctx) {
        for (let child of ctx.simpleStatement()) {
            this.visit(child);
        }
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.Identifier().getText();
        const value = this.visit(ctx.constant());
        this.variables[id] = value;
    }

    visitOutputStatement(ctx) {
        const text = ctx.TextLiteral().getText();
        console.log(text.slice(1, -1)); // sin comillas
    }

    visitConstant(ctx) {
        if (ctx.Number()) {
            return Number(ctx.Number().getText());
        } else {
            return ctx.TextLiteral().getText().slice(1, -1);
        }
    }
}

module.exports = CustomVisitor;
