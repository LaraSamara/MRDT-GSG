package TaskOne;

import java.util.ArrayList;

public class Owner extends Person {
	private ArrayList<Building> OwnedBuilding;
	
    public Owner(String Name, int ID, String Address, int Age) {
    	super(Name, ID, Address, Age);
    	this.OwnedBuilding = new ArrayList<>();
    }
	public ArrayList<Building> getOwnedBuilding() {
		return OwnedBuilding;
	}
	public void InsertBuilding(Building building) {
		if(OwnedBuilding.contains(building)) {
			System.out.println("You alredy 	owned it...");
		}else {
			OwnedBuilding.add(building);
		}
	}
}
