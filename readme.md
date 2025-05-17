# Analizador Sintáctico - Proyecto 47293

Este proyecto implementa un analizador sintáctico para la gramática de configuración dada, usando ANTLR4 y Node.js.

---

## Contenido

- Gramática: `configuracion.g4`
- Código fuente del analizador:  
  - `index.js`  
  - `CustomConfiguracionVisitor.js`  
  - Carpeta `antlr/` con archivos generados por ANTLR4
- Archivos de ejemplo para pruebas:  
  - `ejemplo 1 (correcto).txt`  
  - `ejemplo 2 (correcto).txt`  
  - `ejemplo 3 (error).txt`  
  - `ejemplo 4 (error).txt`
  Para comprobar su funcionamiento colocar el contenido de cada ejemplo dentro de archivo `input.txt`

---

## Requisitos

- Node.js v14 o superior
- ANTLR4 instalado globalmente (se utilizó la versión 4.13.2)
- Dependencias npm instaladas (`npm install`)

---

## Instalación

1. Clonar el repositorio:


git clone https://github.com/Tigger-Funes379/47293.git
cd 47293

## Uso
El analizador lee el archivo input.txt para analizarlo. Para probar los ejemplos provistos, se debe copiar el archivo deseado a input.txt y luego ejecutar:

node index.js

Esto generará en consola:

- La tabla de tokens generada por el lexer.
- El árbol de derivación.
- El código JavaScript traducido por el visitor.
- La ejecución (interpretación) del código generado (si no hay errores).
