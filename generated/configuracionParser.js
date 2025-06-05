// Generated from d:/Mis Cosas/Documents/UTN/Ing en Sistemas/2do/Sintaxis y Semantica de los Lenguajes/Analizador - Recuperatorio/47293/configuracion.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import configuracionListener from './configuracionListener.js';
import configuracionVisitor from './configuracionVisitor.js';

const serializedATN = [4,1,9,36,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,1,0,7,8,32,
0,13,1,0,0,0,2,20,1,0,0,0,4,22,1,0,0,0,6,27,1,0,0,0,8,33,1,0,0,0,10,12,3,
2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,16,1,0,
0,0,15,13,1,0,0,0,16,17,5,0,0,1,17,1,1,0,0,0,18,21,3,4,2,0,19,21,3,6,3,0,
20,18,1,0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,22,23,5,6,0,0,23,24,5,1,0,0,24,
25,3,8,4,0,25,26,5,2,0,0,26,5,1,0,0,0,27,28,5,3,0,0,28,29,5,4,0,0,29,30,
5,8,0,0,30,31,5,5,0,0,31,32,5,2,0,0,32,7,1,0,0,0,33,34,7,0,0,0,34,9,1,0,
0,0,2,13,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class configuracionParser extends antlr4.Parser {

    static grammarFileName = "configuracion.g4";
    static literalNames = [ null, "'='", "';'", "'output'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "Identifier", 
                             "Number", "TextLiteral", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = configuracionParser.ruleNames;
        this.literalNames = configuracionParser.literalNames;
        this.symbolicNames = configuracionParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, configuracionParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===6) {
	            this.state = 10;
	            this.simpleStatement();
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 16;
	        this.match(configuracionParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, configuracionParser.RULE_simpleStatement);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.assignmentStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.outputStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, configuracionParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(configuracionParser.Identifier);
	        this.state = 23;
	        this.match(configuracionParser.T__0);
	        this.state = 24;
	        this.constant();
	        this.state = 25;
	        this.match(configuracionParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, configuracionParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(configuracionParser.T__2);
	        this.state = 28;
	        this.match(configuracionParser.T__3);
	        this.state = 29;
	        this.match(configuracionParser.TextLiteral);
	        this.state = 30;
	        this.match(configuracionParser.T__4);
	        this.state = 31;
	        this.match(configuracionParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, configuracionParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

configuracionParser.EOF = antlr4.Token.EOF;
configuracionParser.T__0 = 1;
configuracionParser.T__1 = 2;
configuracionParser.T__2 = 3;
configuracionParser.T__3 = 4;
configuracionParser.T__4 = 5;
configuracionParser.Identifier = 6;
configuracionParser.Number = 7;
configuracionParser.TextLiteral = 8;
configuracionParser.WS = 9;

configuracionParser.RULE_program = 0;
configuracionParser.RULE_simpleStatement = 1;
configuracionParser.RULE_assignmentStatement = 2;
configuracionParser.RULE_outputStatement = 3;
configuracionParser.RULE_constant = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_program;
    }

	EOF() {
	    return this.getToken(configuracionParser.EOF, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof configuracionVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_simpleStatement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitSimpleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof configuracionVisitor ) {
	        return visitor.visitSimpleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(configuracionParser.Identifier, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof configuracionVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_outputStatement;
    }

	TextLiteral() {
	    return this.getToken(configuracionParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitOutputStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof configuracionVisitor ) {
	        return visitor.visitOutputStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_constant;
    }

	Number() {
	    return this.getToken(configuracionParser.Number, 0);
	};

	TextLiteral() {
	    return this.getToken(configuracionParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof configuracionVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




configuracionParser.ProgramContext = ProgramContext; 
configuracionParser.SimpleStatementContext = SimpleStatementContext; 
configuracionParser.AssignmentStatementContext = AssignmentStatementContext; 
configuracionParser.OutputStatementContext = OutputStatementContext; 
configuracionParser.ConstantContext = ConstantContext; 
