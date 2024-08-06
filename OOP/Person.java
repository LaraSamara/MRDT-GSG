package TaskOne;

import java.util.ArrayList;

public abstract class Person {
	private String Name;
	private int ID;
	private String Address;
	private int Age;
	ArrayList<PaymentMethod> Methods;
	public Person(String Name, int ID, String Address, int Age) {
		this.Name = Name;
		this.ID = ID;
		this.Address = Address;
		this.Age = Age;
		this.Methods = new ArrayList<>();
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
		Age = age;
	}
	public ArrayList<PaymentMethod> getMethods() {
		return Methods;
	}
	public void InsertMethod(PaymentMethod Method, String Type) {
		if(!TypeOfMethod(Type)) {
			this.Methods.add(Method);
		}else {
			System.out.println("You Already hsve One...");
		}
	}
	public boolean TypeOfMethod(String Type) {
		for(PaymentMethod Method : Methods) {
			if(Method.PaymentType().equals(Type)) {
				return true;
			}
		}
		        return false;
	}
	public PaymentMethod MethodObject(String Type) {
		if(TypeOfMethod(Type)) {
			for(PaymentMethod Method:Methods) {
				if(Method.PaymentType().equals(Type)) 
					return Method;
			}
		}
		return null;
	}
}
