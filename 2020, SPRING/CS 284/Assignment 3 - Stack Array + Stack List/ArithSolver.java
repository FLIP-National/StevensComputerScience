package AssignmentThree;

public class ArithSolver extends MyStackList{
	private String question;
	private MyStackList value = new MyStackList();
	private MyStackList operator = new MyStackList();
	
	public ArithSolver(String notquestion) {
		question = notquestion;
	}
	
	public String getQuestion() {
		return this.question;
	}
	
	public double Enter() {
		String question = this.getQuestion();
		
		if(question =="") {
			System.out.println("0");
		}
		for(int i = 0; i < question.length(); i++) {
			char v = question.charAt(i);
			
			if(Character.isDigit(v)) {
				value.push(Character.toString(v));
			}
			else if(v == '/' || v =='*' || v =='+' || v =='-') {
				operator.push(Character.toString(v));
			}
			else if(v == ')') {
				double num = Double.parseDouble(value.pop());
				double num2 = Double.parseDouble(value.pop());
				String operand = operator.pop();
				value.push(""+answer(num,num2,operand));
			}
			else {
				System.out.print("");
			}
		}
		double ans = Double.parseDouble(value.pop());
		return ans;
	}
	
	public double answer(double num, double num2, String operand) {
		if(operand.equals("+")) {
			return num + num2;
		}
		if(operand.equals("-")) {
			return num2 - num;
		}
		if(operand.equals("*")) {
			return num * num2;
		}
		else {
			return num2 / num;
		}
		
	}
	
	public static void main (String[] args) {
		ArithSolver problem = new ArithSolver("(1+((2+3)*(4*5)))");
		problem.Enter();
		System.out.println(problem.Enter());
		ArithSolver another = new ArithSolver("((5*8)+(4-(8*2)))");
		System.out.println(another.Enter());
		ArithSolver another1 = new ArithSolver("((5*0)+(4-(8*2)))");
		System.out.println(another1.Enter());
	}
}
