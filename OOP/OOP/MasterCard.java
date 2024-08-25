package TaskOne;

public class MasterCard extends PaymentMethod {
	private String MasterNumber;
	private String Password;
	public MasterCard(String MasterNumber, String Password, double Balance, Person person) {
		super(Balance, person);
		this.MasterNumber = MasterNumber;
		this.Password = Password;
	}
	private boolean Check(String MasterNumber, String Password) {
		if(this.MasterNumber.equals(MasterNumber) && this.Password.equals(Password)) {
			System.out.println("Welcome,....");
			return true;
		}
		System.out.println("Invalid Account Info...");
		return false;
	}
	@Override
	public boolean Withdraw(String MasterNumber, String Password, double Value) {
		if(this.getPerson().TypeOfMethod("MasterCard")) {
			if(Check(MasterNumber, Password)) {
				return super.Withdraw(Value);
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, You Don't have a MasterCard Account....");
			return false;
		}
	}
	@Override
	public boolean Deposit(String MasterNumber, String Password, double Value) {
		if(this.getPerson().TypeOfMethod("MasterCard")) {
			if(Check(MasterNumber, Password)) {
				return super.Deposit(Value);
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, You Don't have a MasterCard Account....");
			return false;
		}
	}
	@Override
	public boolean Pay(String MasterNumber, String Password, Person person , double Value) {
		if(this.getPerson().TypeOfMethod("MasterCard") && person.TypeOfMethod("MasterCard")) {
			if(Check(MasterNumber, Password)) {
				PaymentMethod MyMethod = this.getPerson().MethodObject("MasterCard");
				PaymentMethod PersonMethod = person.MethodObject("MasterCard");
				if(MyMethod.getBalance() >= Value) {
					MyMethod.Deposit(Value);
					PersonMethod.setBalance(PersonMethod.getBalance() + Value);
					System.out.println("Payment Success,.....");
					return true;
				}else {
					return false;
				}
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, Both Must have MasterCard Card");
			return false;
		}
	}
	public String PaymentType() {
		return "MasterCard";
	}
}
