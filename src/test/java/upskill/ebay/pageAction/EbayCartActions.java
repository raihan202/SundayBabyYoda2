package upskill.ebay.pageAction;


import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import upskill.ebay.pageElements.EbayCartLocators;
import upskill.utilities.SetupDrivers;

public class EbayCartActions {
	EbayCartLocators EbayCartLocatorsObj;
	
	public EbayCartActions() {
		
		EbayCartLocatorsObj = new EbayCartLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayCartLocatorsObj);
		
		
	}
	public void switchNewWindoes() {
		for(String winhandle : SetupDrivers.driver.getWindowHandles()) {
			SetupDrivers.driver.switchTo().window(winhandle);
		}
	}
	public void selectSizetypeDD() throws Exception {
		Select dropDown = new Select(EbayCartLocatorsObj.ddSizeType);
		dropDown.selectByVisibleText("Big & Tall");
		Thread.sleep(2000);
		
	}
	public void selectManSize() throws Exception {
		Select dropDown = new Select(EbayCartLocatorsObj.ddMenSize);
		//dropDown.selectByVisibleText("6XLT"); // get visibleText
		//dropDown.selectByValue("16"); //get value
		dropDown.selectByIndex(3);  // get index
		Thread.sleep(2000);
	}
	
	public void selectShadeDD() throws Exception {
		Select dropDown = new Select(EbayCartLocatorsObj.ddShade);
		//dropDown.selectByVisibleText("Black");
		dropDown.selectByValue("15"); //get value
		Thread.sleep(2000);
	}
	
	public void enterQuantity() throws Exception {
		EbayCartLocatorsObj.txtbxQty.clear();
		EbayCartLocatorsObj.txtbxQty.sendKeys("2");
		Thread.sleep(2000);
		
	}
	public void addcart() throws Exception {
		
		EbayCartLocatorsObj.btnAddCart.click();
		Thread.sleep(5000);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
