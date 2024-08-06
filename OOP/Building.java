package TaskOne;

public abstract class Building {
	private String Address;
	private String Name;
	private double Size;
	private Owner owner;
	
	public Building(String Address, String Name, double Size,Owner owner) {
		this.Address = Address;
		this.Name = Name;
		this.Size = Size;
		this.owner = owner;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public double getSize() {
		return Size;
	}

	public void setSize(double size) {
		Size = size;
	}

	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}

}
