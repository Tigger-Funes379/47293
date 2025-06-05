grammar configuracion;

program: simpleStatement* EOF;

simpleStatement
    : assignmentStatement
    | outputStatement
    ;

assignmentStatement
    : Identifier '=' constant ';'
    ;

outputStatement
    : 'output' '(' TextLiteral ')' ';'
    ;

constant
    : Number
    | TextLiteral
    ;

Identifier
    : [a-zA-Z] [a-zA-Z0-9_]*
    ;

Number
    : [0-9]+
    ;

TextLiteral
    : '"' (~["\r\n])* '"'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
