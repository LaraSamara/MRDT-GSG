package singleton;
public class Search {
	private static Search search;
	private String file;
	private Search() {
		this.file = "Singleton Pattern is probably the most widely used design pattern."
				+ " It is a simple pattern, easy to understand and to use. "
				+ "Sometimes it is used in excess and in scenarios where it is not required. In such cases,"
				+ " the disadvantages of using it outweigh the advantages it brings. For this reason, "
				+ "the singleton pattern is sometimes considered an antipattern or pattern singleton.";
	}
	public static Search getInstance() {
		if(search == null) {
			search = new Search();
		}
		return search;
	}
	public  void  search(String word) {
		if(file.contains(word)) {
			System.out.println("the word "+ word+" exists on index "+ file.indexOf(word));
		}else {
			System.out.println("Sorry, the word dosn't exists");
		}
	}
	
}
