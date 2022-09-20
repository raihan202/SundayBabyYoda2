package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShettyHomePageLocators {

	
	 //iframe locator
	@FindBy (xpath ="//iframe[@name='iframe-name']")
	public WebElement iframeHome;
	
	@FindBy (xpath ="//*[contains(text(),'Home')]")
	public WebElement btnHome;
	
	
	
	
	
	
	
	
}
