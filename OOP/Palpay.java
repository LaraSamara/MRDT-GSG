package TaskOne;

public class Palpay extends PaymentMethod {
	private String Email;
	private String Password;
	public Palpay(String Email,String Password,  double Balance, Person person) {
		super(Balance, person);
		this.Email = Email;
		this.Password = Password;
	}
	private boolean Check(String Email, String Password) {
		if(this.Email.equals(Email) && this.Password.equals(Password)) {
			System.out.println("Welcome,....");
			return true;
		}
		System.out.println("Invalid Account Info...");
		return false;
	}
	@Override
	public boolean Withdraw(String Email, String Password, double Value) {
		if(this.getPerson().TypeOfMethod("Palpay")) {
			if(Check(Email, Password)) {
				return super.Withdraw(Value);
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, You Don't have a Palpay Account....");
			return false;
		}
	}
	@Override
	public boolean Deposit(String Email, String Password, double Value) {
		if(this.getPerson().TypeOfMethod("Palpay")) {
			if(Check(Email, Password)) {
				return super.Deposit(Value);
			}else {
				return false;
			}
		}else {
			System.out.println("Sorry, You Don't have a Palpay Account....");
			return false;
		}
	}
	@Override
	public boolean Pay(String Email, String Password, Person person , double Value) {
		if(this.getPerson().TypeOfMethod("Palpay") && person.TypeOfMethod("Palpay")) {
			if(Check(Email, Password)) {
				PaymentMethod MyMethod = this.getPerson().MethodObject("Palpay");
				PaymentMethod PersonMethod = person.MethodObject("Palpay");
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
			System.out.println("Sorry, Both Must have Palpay Card");
			return false;
		}
	}
	public String PaymentType() {
		return "Palpay";
	}
}
