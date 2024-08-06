package TaskOne;

public class Visa extends PaymentMethod{
	private String VisaNumber;
	private String Password;
	public Visa(String VisaNumber, String Password, double Balance, Person person) {
		super(Balance, person);
		this.VisaNumber = VisaNumber;
		this.Password = Password;
	}
	private boolean Check(String VisaNumber, String Password) {
		if(this.VisaNumber.equals(VisaNumber) && this.Password.equals(Password)) {
			System.out.println("Welcome,....");
			return true;
		}
		System.out.println("Invalid Account Info...");
		return false;
	}
	@Override
	public boolean Withdraw(String VisaNumber, String Password, double Value) {
		if(this.getPerson().TypeOfMethod("Visa")) {
			if(Check(VisaNumber, Password)) {
				return super.Withdraw(Value);
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, You Don't have a Visa Account....");
			return false;
		}
	}
	@Override
	public boolean Deposit(String VisaNumber, String Password, double Value) {
		if(this.getPerson().TypeOfMethod("Visa")) {
			if(Check(VisaNumber, Password)) {
				return super.Deposit(Value);
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, You Don't have a Visa Account....");
			return false;
		}
	}
	@Override
	public boolean Pay(String VisaNumber, String Password, Person person , double Value) {
		if(this.getPerson().TypeOfMethod("Visa") && person.TypeOfMethod("Visa")) {
			if(Check(VisaNumber, Password)) {
				PaymentMethod MyMethod = this.getPerson().MethodObject("Visa");
				PaymentMethod PersonMethod = person.MethodObject("Visa");
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
			System.out.println("Sorry, Both Must have Visa Card");
			return false;
		}
	}
	public String PaymentType() {
		return "Visa";
	}
}
