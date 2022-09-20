package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayHomepageLocators {

	//selenium page Factory
	@FindBy(xpath="//input[@placeholder='Search for anything']")//search text box
	public WebElement txtbxSearch; 
	
	@FindBy(xpath="//input[@ value ='Search']")//click search button
	public WebElement btnSearch; 
	
	//my Ebay link
	@FindBy(xpath="//li[@class='gh-eb-li gh-dd rt']")
	//@FindBy(xpath="//a[@title='My eBay']")
	public WebElement linkMyEbay;
	
	//summary
	@FindBy(xpath="//a[contains(text(),' Summary')]")
	public WebElement linkSummary;
	
	
}
