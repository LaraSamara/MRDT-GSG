package TaskOne;

public class Contract {
	private String RentalPeriod;
	private String StartDate;
	private String EndDate;
	private int price;
	private Owner owner;
	private Customer customer;
	private Building building;
	public Contract(String RentalPeriod,String StartDate,String EndDate, int price, Owner owner, Customer customer,Building building) {
		this.RentalPeriod = RentalPeriod;
		this.price = price;
		this.owner = owner;
		this.customer = customer;
		this.building =  building;
		this.StartDate = StartDate;
		this.EndDate = EndDate;
		
	}
	public String getRentalPeriod() {
		return this.RentalPeriod;
	}
	public void setRentalPeriod(String RentalPeriod) {
		this.RentalPeriod = RentalPeriod;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Owner getOwner() {
		return owner;
	}
	public void setOwner(Owner owner) {
		this.owner = owner;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public void CreateContract( String Number, String Password, String PaymentType) {
		if(this.customer.TypeOfMethod(PaymentType)) {
			if(this.customer.MethodObject(PaymentType).Pay(Number, Password, owner, price)) {
				this.customer.InsertRentedBuilding(this.building);
				System.out.println("Contract Created Successfully...");
			}else {
				System.out.println("Sorry, we have some terriable");
			}
		}else {
			System.out.println("Sorry, we have some terriable");
			}
		}
	public void EndContract(String Date) {
		if(this.EndDate.equals(Date)) {
			this.customer.DeleteRentedBuilding(building);
		}
	}
}
