// Generated from d:/Mis Cosas/Documents/UTN/Ing en Sistemas/2do/Sintaxis y Semantica de los Lenguajes/Analizador 3.0/47293/grammar/configuracion.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class configuracionParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CONFIGURACION=1, SECCION=2, TRUE=3, FALSE=4, ASSIGN=5, MUL=6, ADD=7, SUB=8, 
		LPAREN=9, RPAREN=10, LBRACE=11, RBRACE=12, SEMI=13, ID=14, NUMBER=15, 
		STRING=16, WS=17;
	public static final int
		RULE_prog = 0, RULE_configuracion = 1, RULE_seccion = 2, RULE_param = 3, 
		RULE_expr = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "configuracion", "seccion", "param", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'configuracion'", "'seccion'", "'true'", "'false'", "'='", "'*'", 
			"'+'", "'-'", "'('", "')'", "'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CONFIGURACION", "SECCION", "TRUE", "FALSE", "ASSIGN", "MUL", "ADD", 
			"SUB", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI", "ID", "NUMBER", 
			"STRING", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "configuracion.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public configuracionParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(configuracionParser.EOF, 0); }
		public List<ConfiguracionContext> configuracion() {
			return getRuleContexts(ConfiguracionContext.class);
		}
		public ConfiguracionContext configuracion(int i) {
			return getRuleContext(ConfiguracionContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(11); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(10);
				configuracion();
				}
				}
				setState(13); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CONFIGURACION );
			setState(15);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConfiguracionContext extends ParserRuleContext {
		public TerminalNode CONFIGURACION() { return getToken(configuracionParser.CONFIGURACION, 0); }
		public TerminalNode ID() { return getToken(configuracionParser.ID, 0); }
		public TerminalNode LBRACE() { return getToken(configuracionParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(configuracionParser.RBRACE, 0); }
		public List<SeccionContext> seccion() {
			return getRuleContexts(SeccionContext.class);
		}
		public SeccionContext seccion(int i) {
			return getRuleContext(SeccionContext.class,i);
		}
		public ConfiguracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_configuracion; }
	}

	public final ConfiguracionContext configuracion() throws RecognitionException {
		ConfiguracionContext _localctx = new ConfiguracionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_configuracion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			match(CONFIGURACION);
			setState(18);
			match(ID);
			setState(19);
			match(LBRACE);
			setState(21); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(20);
				seccion();
				}
				}
				setState(23); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SECCION );
			setState(25);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeccionContext extends ParserRuleContext {
		public TerminalNode SECCION() { return getToken(configuracionParser.SECCION, 0); }
		public TerminalNode ID() { return getToken(configuracionParser.ID, 0); }
		public TerminalNode LBRACE() { return getToken(configuracionParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(configuracionParser.RBRACE, 0); }
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public SeccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seccion; }
	}

	public final SeccionContext seccion() throws RecognitionException {
		SeccionContext _localctx = new SeccionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_seccion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(SECCION);
			setState(28);
			match(ID);
			setState(29);
			match(LBRACE);
			setState(31); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(30);
				param();
				}
				}
				setState(33); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			setState(35);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(configuracionParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(configuracionParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(configuracionParser.SEMI, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			match(ID);
			setState(38);
			match(ASSIGN);
			setState(39);
			expr(0);
			setState(40);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(configuracionParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(configuracionParser.RPAREN, 0); }
		public TerminalNode TRUE() { return getToken(configuracionParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(configuracionParser.FALSE, 0); }
		public TerminalNode ID() { return getToken(configuracionParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(configuracionParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(configuracionParser.STRING, 0); }
		public TerminalNode MUL() { return getToken(configuracionParser.MUL, 0); }
		public TerminalNode ADD() { return getToken(configuracionParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(configuracionParser.SUB, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 8;
		enterRecursionRule(_localctx, 8, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				{
				setState(43);
				match(LPAREN);
				setState(44);
				expr(0);
				setState(45);
				match(RPAREN);
				}
				break;
			case TRUE:
				{
				setState(47);
				match(TRUE);
				}
				break;
			case FALSE:
				{
				setState(48);
				match(FALSE);
				}
				break;
			case ID:
				{
				setState(49);
				match(ID);
				}
				break;
			case NUMBER:
				{
				setState(50);
				match(NUMBER);
				}
				break;
			case STRING:
				{
				setState(51);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(65);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(63);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(54);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(55);
						match(MUL);
						setState(56);
						expr(10);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(57);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(58);
						match(ADD);
						setState(59);
						expr(9);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(60);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(61);
						match(SUB);
						setState(62);
						expr(8);
						}
						break;
					}
					} 
				}
				setState(67);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 4:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0011E\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0004\u0000\f\b\u0000\u000b\u0000\f\u0000\r\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0004\u0001\u0016\b\u0001"+
		"\u000b\u0001\f\u0001\u0017\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0004\u0002 \b\u0002\u000b\u0002\f\u0002!\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u00045\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004@\b\u0004\n\u0004"+
		"\f\u0004C\t\u0004\u0001\u0004\u0000\u0001\b\u0005\u0000\u0002\u0004\u0006"+
		"\b\u0000\u0000J\u0000\u000b\u0001\u0000\u0000\u0000\u0002\u0011\u0001"+
		"\u0000\u0000\u0000\u0004\u001b\u0001\u0000\u0000\u0000\u0006%\u0001\u0000"+
		"\u0000\u0000\b4\u0001\u0000\u0000\u0000\n\f\u0003\u0002\u0001\u0000\u000b"+
		"\n\u0001\u0000\u0000\u0000\f\r\u0001\u0000\u0000\u0000\r\u000b\u0001\u0000"+
		"\u0000\u0000\r\u000e\u0001\u0000\u0000\u0000\u000e\u000f\u0001\u0000\u0000"+
		"\u0000\u000f\u0010\u0005\u0000\u0000\u0001\u0010\u0001\u0001\u0000\u0000"+
		"\u0000\u0011\u0012\u0005\u0001\u0000\u0000\u0012\u0013\u0005\u000e\u0000"+
		"\u0000\u0013\u0015\u0005\u000b\u0000\u0000\u0014\u0016\u0003\u0004\u0002"+
		"\u0000\u0015\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000"+
		"\u0000\u0017\u0015\u0001\u0000\u0000\u0000\u0017\u0018\u0001\u0000\u0000"+
		"\u0000\u0018\u0019\u0001\u0000\u0000\u0000\u0019\u001a\u0005\f\u0000\u0000"+
		"\u001a\u0003\u0001\u0000\u0000\u0000\u001b\u001c\u0005\u0002\u0000\u0000"+
		"\u001c\u001d\u0005\u000e\u0000\u0000\u001d\u001f\u0005\u000b\u0000\u0000"+
		"\u001e \u0003\u0006\u0003\u0000\u001f\u001e\u0001\u0000\u0000\u0000 !"+
		"\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000"+
		"\u0000\u0000\"#\u0001\u0000\u0000\u0000#$\u0005\f\u0000\u0000$\u0005\u0001"+
		"\u0000\u0000\u0000%&\u0005\u000e\u0000\u0000&\'\u0005\u0005\u0000\u0000"+
		"\'(\u0003\b\u0004\u0000()\u0005\r\u0000\u0000)\u0007\u0001\u0000\u0000"+
		"\u0000*+\u0006\u0004\uffff\uffff\u0000+,\u0005\t\u0000\u0000,-\u0003\b"+
		"\u0004\u0000-.\u0005\n\u0000\u0000.5\u0001\u0000\u0000\u0000/5\u0005\u0003"+
		"\u0000\u000005\u0005\u0004\u0000\u000015\u0005\u000e\u0000\u000025\u0005"+
		"\u000f\u0000\u000035\u0005\u0010\u0000\u00004*\u0001\u0000\u0000\u0000"+
		"4/\u0001\u0000\u0000\u000040\u0001\u0000\u0000\u000041\u0001\u0000\u0000"+
		"\u000042\u0001\u0000\u0000\u000043\u0001\u0000\u0000\u00005A\u0001\u0000"+
		"\u0000\u000067\n\t\u0000\u000078\u0005\u0006\u0000\u00008@\u0003\b\u0004"+
		"\n9:\n\b\u0000\u0000:;\u0005\u0007\u0000\u0000;@\u0003\b\u0004\t<=\n\u0007"+
		"\u0000\u0000=>\u0005\b\u0000\u0000>@\u0003\b\u0004\b?6\u0001\u0000\u0000"+
		"\u0000?9\u0001\u0000\u0000\u0000?<\u0001\u0000\u0000\u0000@C\u0001\u0000"+
		"\u0000\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B\t\u0001"+
		"\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000\u0006\r\u0017!4?A";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}