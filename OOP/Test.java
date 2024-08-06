package TaskOne;

public class Test {

	public static void main(String[] args) {
		Owner owner1 = new Owner("Lara", 1, "Jenin", 22);
		Customer customer1 = new Customer("sara", 2, "Jenin", 24);
		owner1.InsertMethod(new Visa("1", "123", 1000, owner1), "Visa");
		customer1.InsertMethod(new Visa("2", "123",  10000, customer1), "Visa");
		
		Building house = new House(4, 1, false, "Jenin", "LaraHouse", 200, owner1);
		owner1.InsertBuilding(house);
		
		Contract contract1 = new Contract("30","8/8/2024", "8/9/2024", 2000, owner1, customer1, house);
		contract1.CreateContract("2", "123", "Visa");


	}

}
