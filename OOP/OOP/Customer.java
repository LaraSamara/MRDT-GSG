package TaskOne;

import java.util.ArrayList;

public class Customer extends Person {
	private ArrayList<Building> RentedBuilding;
	   public Customer(String Name, int ID, String Address, int Age) {
	    	super(Name, ID, Address, Age);
	    	this.RentedBuilding = new ArrayList<>();
	    }
	   public ArrayList<Building> getRentedBuilding() {
		return RentedBuilding;
	    }
	   public void InsertRentedBuilding(Building building) {
		   if(RentedBuilding.contains(building)) {
			   System.out.println("You alredy rented it...");
		   }else {
			   RentedBuilding.add(building);
		   }
	   }
	   public void DeleteRentedBuilding(Building building) {
		   if(RentedBuilding.contains(building)) {
			   RentedBuilding.remove(building);
		   }else {
			   System.out.println("You don't rent Building");
		   }
	   }
	}
