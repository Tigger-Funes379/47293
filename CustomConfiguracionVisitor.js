import BaseVisitor from './antlr/configuracionVisitor.js';

class CustomVisitor extends BaseVisitor {
  visitProg(ctx) {
    const configuraciones = ctx.configuracion().map(c => this.visit(c));
    const resultado = configuraciones.join('\n\n');
    console.log("visitProg:", resultado);
    return resultado;
  }

  visitConfiguracion(ctx) {
    const nombre = ctx.ID().getText();
    const secciones = ctx.seccion().map(sec => this.visit(sec)).join('\n');
    const resultado = `// Configuración: ${nombre}\n${secciones}`;
    console.log("visitConfiguracion:", resultado);
    return resultado;
  }

  visitSeccion(ctx) {
    const nombre = ctx.ID().getText();
    const parametros = ctx.param().map(p => this.visit(p)).join('\n');
    const resultado = `// Sección: ${nombre}\n${parametros}`;
    console.log("visitSeccion:", resultado);
    return resultado;
  }

  visitParam(ctx) {
    const nombre = ctx.ID().getText();
    const valor = this.visit(ctx.expr());
    const resultado = `let ${nombre} = ${valor};`;
    console.log("visitParam:", resultado);
    return resultado;
  }

  visitExpr(ctx) {
    if (ctx.children.length === 3) {
      if (ctx.LPAREN()) {
        const resultado = `(${this.visit(ctx.expr(0))})`;
        console.log("visitExpr (paren):", resultado);
        return resultado;
      } else {
        const izquierda = this.visit(ctx.expr(0));
        const operador = ctx.getChild(1).getText();
        const derecha = this.visit(ctx.expr(1));
        const resultado = `(${izquierda} ${operador} ${derecha})`;
        console.log("visitExpr (binaria):", resultado);
        return resultado;
      }
    } else if (ctx.children.length === 1) {
      const resultado = ctx.getText();
      console.log("visitExpr (terminal):", resultado);
      return resultado;
    } else {
      const resultado = ctx.getText();
      console.log("visitExpr (fallback):", resultado);
      return resultado;
    }
  }
}

export default CustomVisitor;
