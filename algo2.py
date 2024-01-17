def inToPost(infix_expression):
    precedence = {'+': 2, '-': 1, '*': 3, '/': 4}
    stack = []
    postfixExp = []

    for symbol in infix_expression:
        if symbol.isnumeric():
            postfixExp.append(symbol)
        elif symbol == '(':
            stack.append(symbol)
        elif symbol == ')':
            while stack and stack[-1] != '(':
                postfixExp.append(stack.pop())
            stack.pop()  # Pop the opening parenthesis
        else:
            while stack and stack[-1] != '(' and precedence.get(symbol, 0) <= precedence.get(stack[-1], 0):
                postfixExp.append(stack.pop())
            stack.append(symbol)

    while stack:
        postfixExp.append(stack.pop())

    return postfixExp


def evalPost(post):
    stack = []
    for symbol in post:
        if symbol.isnumeric():
            stack.append(int(symbol))
        else:
            operand2 = stack.pop()
            operand1 = stack.pop()
            if symbol == '+':
                stack.append(operand1 + operand2)
            elif symbol == '-':
                stack.append(operand1 - operand2)
            elif symbol == '*':
                stack.append(operand1 * operand2)
            elif symbol == '/':
                stack.append(operand1 / operand2)
    return stack[0] if stack else None



expression = "( 5 * 4 - ( 12 / 4 ) + 6 * 1 )"
#expression = "( ( 15 + 3 ) * 2 - ( 5 / 2 ) + ( 10 - 4 ) )"
symbole = expression.split()
postfix = inToPost(symbole)
print(postfix)



result = evalPost(postfix)
print(result)