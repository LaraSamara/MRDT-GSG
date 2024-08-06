package TaskOne;

public abstract  class PaymentMethod {
	private double Balance;
	private Person person;
	public PaymentMethod(double Balance,  Person person) {
		this.Balance = Balance;
		this.person = person;
	}
	public double getBalance() {
		return Balance;
	}
	public void setBalance(double Balance) {
		this.Balance = Balance;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	public boolean Withdraw(double Value) {
		if(this.getBalance() >= Value) {
			this.setBalance(this.getBalance() - Value);
			System.out.println("Withdraw Success,....");
			return true;
		}
		System.out.println("Sorry, Your Balance is Not Enough");
		return false;
		
	}
	public boolean Deposit(double Value) {
		if(Value >= 50) {
			this.setBalance(this.getBalance() + Value);
			System.out.println("Deposit Success,....");
			return true;
		}else {
			System.out.println("Sorry, the value to deposit its not enough");
			return false;
		}
	}
	public abstract boolean Withdraw(String VisaNumber, String Password, double Value);
	public abstract boolean Deposit(String VisaNumber, String Password, double Value);
	public abstract boolean Pay(String Number, String Password, Person person , double Value);
	public abstract String PaymentType();
}
