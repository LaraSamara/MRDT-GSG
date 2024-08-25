package singleton;

public class Test {

	public static void main(String[] args) {
		Search instance = Search.getInstance();
		instance.search("Singleton");
		instance.search("lara");
		System.out.print(instance);
		
		System.out.print("\n===================================\n");
		
		Search instance2 = Search.getInstance();
		instance2.search("Singleto");
		instance2.search("lara");
		System.out.print(instance2);
		
		
	}

}
