// Generated from d:/Mis Cosas/Documents/UTN/Ing en Sistemas/2do/Sintaxis y Semantica de los Lenguajes/Analizador - Recuperatorio/47293/47293/configuracion.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link configuracionParser}.
 */
public interface configuracionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link configuracionParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(configuracionParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link configuracionParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(configuracionParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link configuracionParser#simpleStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleStatement(configuracionParser.SimpleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link configuracionParser#simpleStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleStatement(configuracionParser.SimpleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link configuracionParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStatement(configuracionParser.AssignmentStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link configuracionParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStatement(configuracionParser.AssignmentStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link configuracionParser#outputStatement}.
	 * @param ctx the parse tree
	 */
	void enterOutputStatement(configuracionParser.OutputStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link configuracionParser#outputStatement}.
	 * @param ctx the parse tree
	 */
	void exitOutputStatement(configuracionParser.OutputStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link configuracionParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterConstant(configuracionParser.ConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link configuracionParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitConstant(configuracionParser.ConstantContext ctx);
}