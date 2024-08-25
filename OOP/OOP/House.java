package TaskOne;

public class House extends Building{
	private int RoomNumber;
	private int FloorNumber;
	private boolean HasGarden;
	public House( int RoomNumber, int FloorNumber,  boolean HasGarden, String Address, String Name, double Size, Owner owner) {
		super(Address, Name, Size, owner);
		this.RoomNumber = RoomNumber;
		this.FloorNumber = FloorNumber;
		this.HasGarden = HasGarden;
	}
	public int getRoomNumber() {
		return RoomNumber;
	}
	public void setRoomNumber(int roomNumber) {
		RoomNumber = roomNumber;
	}
	public int getFloorNumber() {
		return FloorNumber;
	}
	public void setFloorNumber(int floorNumber) {
		FloorNumber = floorNumber;
	}
	public boolean isHasGarden() {
		return HasGarden;
	}
	public void setHasGarden(boolean hasGarden) {
		HasGarden = hasGarden;
	}
}
