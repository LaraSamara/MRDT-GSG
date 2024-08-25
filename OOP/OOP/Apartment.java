package TaskOne;

public class Apartment extends Building{
	private int RoomNumber;
	public Apartment(int RoomNumber, String Address, String Name, double Size,Owner owner) {
		super(Address, Name, Size, owner);
		this.RoomNumber = RoomNumber;
	}
	public int getRoomNumber() {
		return RoomNumber;
	}
	public void setRoomNumber(int roomNumber) {
		RoomNumber = roomNumber;
	}
}
