// Generated from d:/Mis Cosas/Documents/UTN/Ing en Sistemas/2do/Sintaxis y Semantica de los Lenguajes/Analizador 3.0/47293/grammar/configuracion.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class configuracionLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CONFIGURACION=1, SECCION=2, TRUE=3, FALSE=4, ASSIGN=5, MUL=6, ADD=7, SUB=8, 
		LPAREN=9, RPAREN=10, LBRACE=11, RBRACE=12, SEMI=13, ID=14, NUMBER=15, 
		STRING=16, WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CONFIGURACION", "SECCION", "TRUE", "FALSE", "ASSIGN", "MUL", "ADD", 
			"SUB", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI", "ID", "NUMBER", 
			"STRING", "WS"
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


	public configuracionLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "configuracion.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0011t\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n"+
		"\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0005"+
		"\rY\b\r\n\r\f\r\\\t\r\u0001\u000e\u0004\u000e_\b\u000e\u000b\u000e\f\u000e"+
		"`\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000fg\b\u000f"+
		"\n\u000f\f\u000fj\t\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0004\u0010"+
		"o\b\u0010\u000b\u0010\f\u0010p\u0001\u0010\u0001\u0010\u0000\u0000\u0011"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011\u0001\u0000\u0005\u0003\u0000AZ__az\u0004"+
		"\u000009AZ__az\u0001\u000009\u0002\u0000\"\"\\\\\u0003\u0000\t\n\r\r "+
		" x\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000"+
		"\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000"+
		"\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000"+
		"\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0001#\u0001\u0000\u0000\u0000\u00031\u0001\u0000\u0000"+
		"\u0000\u00059\u0001\u0000\u0000\u0000\u0007>\u0001\u0000\u0000\u0000\t"+
		"D\u0001\u0000\u0000\u0000\u000bF\u0001\u0000\u0000\u0000\rH\u0001\u0000"+
		"\u0000\u0000\u000fJ\u0001\u0000\u0000\u0000\u0011L\u0001\u0000\u0000\u0000"+
		"\u0013N\u0001\u0000\u0000\u0000\u0015P\u0001\u0000\u0000\u0000\u0017R"+
		"\u0001\u0000\u0000\u0000\u0019T\u0001\u0000\u0000\u0000\u001bV\u0001\u0000"+
		"\u0000\u0000\u001d^\u0001\u0000\u0000\u0000\u001fb\u0001\u0000\u0000\u0000"+
		"!n\u0001\u0000\u0000\u0000#$\u0005c\u0000\u0000$%\u0005o\u0000\u0000%"+
		"&\u0005n\u0000\u0000&\'\u0005f\u0000\u0000\'(\u0005i\u0000\u0000()\u0005"+
		"g\u0000\u0000)*\u0005u\u0000\u0000*+\u0005r\u0000\u0000+,\u0005a\u0000"+
		"\u0000,-\u0005c\u0000\u0000-.\u0005i\u0000\u0000./\u0005o\u0000\u0000"+
		"/0\u0005n\u0000\u00000\u0002\u0001\u0000\u0000\u000012\u0005s\u0000\u0000"+
		"23\u0005e\u0000\u000034\u0005c\u0000\u000045\u0005c\u0000\u000056\u0005"+
		"i\u0000\u000067\u0005o\u0000\u000078\u0005n\u0000\u00008\u0004\u0001\u0000"+
		"\u0000\u00009:\u0005t\u0000\u0000:;\u0005r\u0000\u0000;<\u0005u\u0000"+
		"\u0000<=\u0005e\u0000\u0000=\u0006\u0001\u0000\u0000\u0000>?\u0005f\u0000"+
		"\u0000?@\u0005a\u0000\u0000@A\u0005l\u0000\u0000AB\u0005s\u0000\u0000"+
		"BC\u0005e\u0000\u0000C\b\u0001\u0000\u0000\u0000DE\u0005=\u0000\u0000"+
		"E\n\u0001\u0000\u0000\u0000FG\u0005*\u0000\u0000G\f\u0001\u0000\u0000"+
		"\u0000HI\u0005+\u0000\u0000I\u000e\u0001\u0000\u0000\u0000JK\u0005-\u0000"+
		"\u0000K\u0010\u0001\u0000\u0000\u0000LM\u0005(\u0000\u0000M\u0012\u0001"+
		"\u0000\u0000\u0000NO\u0005)\u0000\u0000O\u0014\u0001\u0000\u0000\u0000"+
		"PQ\u0005{\u0000\u0000Q\u0016\u0001\u0000\u0000\u0000RS\u0005}\u0000\u0000"+
		"S\u0018\u0001\u0000\u0000\u0000TU\u0005;\u0000\u0000U\u001a\u0001\u0000"+
		"\u0000\u0000VZ\u0007\u0000\u0000\u0000WY\u0007\u0001\u0000\u0000XW\u0001"+
		"\u0000\u0000\u0000Y\\\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000"+
		"Z[\u0001\u0000\u0000\u0000[\u001c\u0001\u0000\u0000\u0000\\Z\u0001\u0000"+
		"\u0000\u0000]_\u0007\u0002\u0000\u0000^]\u0001\u0000\u0000\u0000_`\u0001"+
		"\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000"+
		"a\u001e\u0001\u0000\u0000\u0000bh\u0005\"\u0000\u0000cg\b\u0003\u0000"+
		"\u0000de\u0005\\\u0000\u0000eg\t\u0000\u0000\u0000fc\u0001\u0000\u0000"+
		"\u0000fd\u0001\u0000\u0000\u0000gj\u0001\u0000\u0000\u0000hf\u0001\u0000"+
		"\u0000\u0000hi\u0001\u0000\u0000\u0000ik\u0001\u0000\u0000\u0000jh\u0001"+
		"\u0000\u0000\u0000kl\u0005\"\u0000\u0000l \u0001\u0000\u0000\u0000mo\u0007"+
		"\u0004\u0000\u0000nm\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000"+
		"pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000"+
		"\u0000rs\u0006\u0010\u0000\u0000s\"\u0001\u0000\u0000\u0000\u0006\u0000"+
		"Z`fhp\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}