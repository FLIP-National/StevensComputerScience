package MyStack;

public class arith extends MyStackList{
	private String equation;
	public MyStackList valueStack = new MyStackList();
	public MyStackList operatorStack = new MyStackList();


	public void setEquation(String equationn) 
	{
		equation = equationn;
	}
	public double getValue()
	{
		return (double) valueStack.pop();
	}
	public void sort() //recursively goes through the whole string and operate on the value
	{
		int n;
		MyStackList numList = new MyStackList();
		System.out.println("uwu");
		if(equation != "")//base case
		{
			for( n=0; n<equation.length();n++ )
			{
				numList.push((double) Character.digit(equation.charAt(n), 10)); 
		
			}
			
			String newString = "";
			if( !numList.isEmpty())
			{
				double number = 0;
				for( int i = 0 ; i<n; i++)
				{
					number = number + (double)numList.pop() * Math.pow(10, i);
				}
				identifier(number);
			}
			else{
				identifier(equation.charAt(n));
			}
			
			for ( int i = n + 1; i < equation.length(); i++)
			{					
				newString = newString + equation.charAt(n);
			}
			equation = newString;
			sort();

			
		 }
		else
		{
			System.out.println("uwu");
		}
	}
	
	
	public void identifier(Object o)//only use in calculate -> sort push number into value stack and operators into operator stack
	{
		if (o instanceof Integer) 
		{
			double n = (double) o;
			valueStack.push(o);
		}
		else if( o instanceof Double)
		{
			valueStack.push(o);
		}
		else if ( o instanceof Character)
		{
			switch ((char)o)
			{
				case '+':
					operatorStack.push(o);
					break;
				case '-':
					operatorStack.push(o);
					break;
				case '*':
					operatorStack.push(o);
					break;
				case '/':
					operatorStack.push(o);
					break;
				case '(':
					break;
				case ')':
					operate();
					break;

			}
				
		}
	}

	public void operate()// perform operation on numbers
		{
			char operator = (char) operatorStack.pop();
			double num1 = (double) valueStack.pop();
			double num2 = (double) valueStack.pop();
			double num3 = 0.0;
			switch(operator)
			{
				case '+':
					num3 = num1 + num2;
					valueStack.push(num3);
					break;
				case '-':
					num3 = num1 - num2;
					valueStack.push(num3);
					break;
				case '*':
					num3 = num1 * num2;
					valueStack.push(num3);
					break;
				case '/':
				num3 = num1 / num2;
				valueStack.push(num3);
				break;

			}
				
		}

	public static void main(String[] args) {
		arith math = new arith();
		String s = "(1+((2+3)*(4*5)))";
		math.setEquation("(1+((2+3)*(4*5)))");
		math.sort();
		System.out.println("The solution of " + s + " is " + math.getValue());


		
	}	

}

