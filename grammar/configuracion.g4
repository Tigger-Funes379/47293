
grammar configuracion;

prog: configuracion+ EOF;

configuracion
    : CONFIGURACION ID '{' seccion+ '}'
    ;

seccion
    : SECCION ID '{' param+ '}'
    ;

param
    : ID ASSIGN expr SEMI
    ;

expr
    : expr MUL expr
    | expr ADD expr
    | expr SUB expr
    | LPAREN expr RPAREN
    | TRUE
    | FALSE
    | ID
    | NUMBER
    | STRING
    ;

CONFIGURACION: 'configuracion';
SECCION: 'seccion';

TRUE: 'true';
FALSE: 'false';

ASSIGN: '=';
MUL: '*';
ADD: '+';
SUB: '-';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMI: ';';

ID: [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
STRING: '"' (~["\\] | '\\' .)* '"' ;

WS: [ \t\r\n]+ -> skip;
