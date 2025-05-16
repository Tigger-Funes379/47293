// Generated from configuracion.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import configuracionListener from './configuracionListener.js';
const serializedATN = [4,1,15,67,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,1,1,1,1,1,4,1,22,8,1,11,1,12,1,
23,1,1,1,1,1,2,1,2,1,2,1,2,4,2,32,8,2,11,2,12,2,33,1,2,1,2,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,51,8,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,1,4,0,1,8,5,0,2,4,6,8,0,0,70,0,11,
1,0,0,0,2,17,1,0,0,0,4,27,1,0,0,0,6,37,1,0,0,0,8,50,1,0,0,0,10,12,3,2,1,
0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,1,0,0,0,
15,16,5,0,0,1,16,1,1,0,0,0,17,18,5,4,0,0,18,19,5,12,0,0,19,21,5,1,0,0,20,
22,3,4,2,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,25,
1,0,0,0,25,26,5,2,0,0,26,3,1,0,0,0,27,28,5,5,0,0,28,29,5,12,0,0,29,31,5,
1,0,0,30,32,3,6,3,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,
0,0,34,35,1,0,0,0,35,36,5,2,0,0,36,5,1,0,0,0,37,38,5,12,0,0,38,39,5,6,0,
0,39,40,3,8,4,0,40,41,5,3,0,0,41,7,1,0,0,0,42,43,6,4,-1,0,43,44,5,10,0,0,
44,45,3,8,4,0,45,46,5,11,0,0,46,51,1,0,0,0,47,51,5,12,0,0,48,51,5,13,0,0,
49,51,5,14,0,0,50,42,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,
63,1,0,0,0,52,53,10,7,0,0,53,54,5,7,0,0,54,62,3,8,4,8,55,56,10,6,0,0,56,
57,5,8,0,0,57,62,3,8,4,7,58,59,10,5,0,0,59,60,5,9,0,0,60,62,3,8,4,6,61,52,
1,0,0,0,61,55,1,0,0,0,61,58,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,
0,0,0,64,9,1,0,0,0,65,63,1,0,0,0,6,13,23,33,50,61,63];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class configuracionParser extends antlr4.Parser {

    static grammarFileName = "configuracion.g4";
    static literalNames = [ null, "'{'", "'}'", "';'", "'configuracion'", 
                            "'seccion'", "'='", "'*'", "'+'", "'-'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, null, null, null, "CONFIGURACION", "SECCION", 
                             "ASSIGN", "MUL", "ADD", "SUB", "LPAREN", "RPAREN", 
                             "ID", "NUMBER", "STRING", "WS" ];
    static ruleNames = [ "prog", "configuracion", "seccion", "param", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = configuracionParser.ruleNames;
        this.literalNames = configuracionParser.literalNames;
        this.symbolicNames = configuracionParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, configuracionParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.configuracion();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
	        this.state = 15;
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



	configuracion() {
	    let localctx = new ConfiguracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, configuracionParser.RULE_configuracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(configuracionParser.CONFIGURACION);
	        this.state = 18;
	        this.match(configuracionParser.ID);
	        this.state = 19;
	        this.match(configuracionParser.T__0);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.seccion();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
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



	seccion() {
	    let localctx = new SeccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, configuracionParser.RULE_seccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(configuracionParser.SECCION);
	        this.state = 28;
	        this.match(configuracionParser.ID);
	        this.state = 29;
	        this.match(configuracionParser.T__0);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.param();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	        this.state = 35;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, configuracionParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(configuracionParser.ID);
	        this.state = 38;
	        this.match(configuracionParser.ASSIGN);
	        this.state = 39;
	        this.expr(0);
	        this.state = 40;
	        this.match(configuracionParser.T__2);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, configuracionParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 43;
	            this.match(configuracionParser.LPAREN);
	            this.state = 44;
	            this.expr(0);
	            this.state = 45;
	            this.match(configuracionParser.RPAREN);
	            break;
	        case 12:
	            this.state = 47;
	            this.match(configuracionParser.ID);
	            break;
	        case 13:
	            this.state = 48;
	            this.match(configuracionParser.NUMBER);
	            break;
	        case 14:
	            this.state = 49;
	            this.match(configuracionParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 61;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, configuracionParser.RULE_expr);
	                    this.state = 52;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 53;
	                    this.match(configuracionParser.MUL);
	                    this.state = 54;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, configuracionParser.RULE_expr);
	                    this.state = 55;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 56;
	                    this.match(configuracionParser.ADD);
	                    this.state = 57;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, configuracionParser.RULE_expr);
	                    this.state = 58;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 59;
	                    this.match(configuracionParser.SUB);
	                    this.state = 60;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 65;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

configuracionParser.EOF = antlr4.Token.EOF;
configuracionParser.T__0 = 1;
configuracionParser.T__1 = 2;
configuracionParser.T__2 = 3;
configuracionParser.CONFIGURACION = 4;
configuracionParser.SECCION = 5;
configuracionParser.ASSIGN = 6;
configuracionParser.MUL = 7;
configuracionParser.ADD = 8;
configuracionParser.SUB = 9;
configuracionParser.LPAREN = 10;
configuracionParser.RPAREN = 11;
configuracionParser.ID = 12;
configuracionParser.NUMBER = 13;
configuracionParser.STRING = 14;
configuracionParser.WS = 15;

configuracionParser.RULE_prog = 0;
configuracionParser.RULE_configuracion = 1;
configuracionParser.RULE_seccion = 2;
configuracionParser.RULE_param = 3;
configuracionParser.RULE_expr = 4;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(configuracionParser.EOF, 0);
	};

	configuracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConfiguracionContext);
	    } else {
	        return this.getTypedRuleContext(ConfiguracionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitProg(this);
		}
	}


}



class ConfiguracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_configuracion;
    }

	CONFIGURACION() {
	    return this.getToken(configuracionParser.CONFIGURACION, 0);
	};

	ID() {
	    return this.getToken(configuracionParser.ID, 0);
	};

	seccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionContext);
	    } else {
	        return this.getTypedRuleContext(SeccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterConfiguracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitConfiguracion(this);
		}
	}


}



class SeccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_seccion;
    }

	SECCION() {
	    return this.getToken(configuracionParser.SECCION, 0);
	};

	ID() {
	    return this.getToken(configuracionParser.ID, 0);
	};

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterSeccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitSeccion(this);
		}
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_param;
    }

	ID() {
	    return this.getToken(configuracionParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(configuracionParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitParam(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_expr;
    }

	LPAREN() {
	    return this.getToken(configuracionParser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(configuracionParser.RPAREN, 0);
	};

	ID() {
	    return this.getToken(configuracionParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(configuracionParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(configuracionParser.STRING, 0);
	};

	MUL() {
	    return this.getToken(configuracionParser.MUL, 0);
	};

	ADD() {
	    return this.getToken(configuracionParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(configuracionParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitExpr(this);
		}
	}


}




configuracionParser.ProgContext = ProgContext; 
configuracionParser.ConfiguracionContext = ConfiguracionContext; 
configuracionParser.SeccionContext = SeccionContext; 
configuracionParser.ParamContext = ParamContext; 
configuracionParser.ExprContext = ExprContext; 
