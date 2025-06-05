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
  - `correcto1.txt`  
  - `correcto2.txt`  
  - `incorrecto1.txt`  
  - `incorrecto2.txt`
  Para comprobar su funcionamiento colocar el contenido de cada ejemplo dentro de archivo `input.txt`

---

## Requisitos

- Node.js v14 o superior
- ANTLR4 instalado globalmente (se utilizó la versión 4.13.2)
- Dependencias npm instaladas (`npm install`)

---

## Instalación

1. Clonar el repositorio:


```bash
git clone https://github.com/Tigger-Funes379/47293.git
cd 47293

## Uso

Opción 1: Visualizar el árbol de derivación

1.	Abrir el archivo configuracion.g4.
2.	Pulsar F5 para observar el árbol de derivación.

Opción 2: Ejecutar el analizador desde Node.js

1.	Copiar el contenido del archivo de ejemplo deseado (por ejemplo, correcto1.txt) en input.txt.
2.	Ejecutar el analizador con:

node index.js

Esto mostrará en consola:
•	La tabla de tokens generada por el lexer.
•	El árbol de derivación.
•	El código JavaScript traducido por el visitor.

3.	Para comprobar si hay errores y ver resultados, ejecutar:

node analizador.js
