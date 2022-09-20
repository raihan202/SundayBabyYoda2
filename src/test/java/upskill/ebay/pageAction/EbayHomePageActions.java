package upskill.ebay.pageAction;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import upskill.ebay.pageElements.EbayHomepageLocators;
import upskill.utilities.ReadExcelSheet;
import upskill.utilities.SetupDrivers;

public class EbayHomePageActions {

	EbayHomepageLocators EbayHomepageLocatorsObj;
	public EbayHomePageActions() {
		
		EbayHomepageLocatorsObj =new EbayHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomepageLocatorsObj);
	}
	
	public void searchShirt() {
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("shirt");
		EbayHomepageLocatorsObj.btnSearch.click();
		
		
	}
	public void searchforBIGAndTall() {
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Big & Tall Cotton Tee");
		EbayHomepageLocatorsObj.btnSearch.click();
		
		
	}
	public void SearchShoes() {
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("shoes");
		///EbayHomepageLocatorsObj.btnSearch.click(); //test 1
		
		//JavascriptExecutor js = (JavascriptExecutor)SetupDrivers.driver; 	//Creating JS object  [test 2 with java script]
	//	js.executeScript("EbayHomepageLocatorsObj.btnSearch.click();"); //Clicking on element
		
	//	EbayHomepageLocatorsObj.txtbxSearch.sendKeys(Keys.ENTER);  //using keyboard keys  [test 3 with java script]
		
	}
	public void SearchShoesExcel() throws Exception { //this method for Read-Excel
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(ReadExcelSheet.getMapData("Search"));
		Thread.sleep(5000);
		EbayHomepageLocatorsObj.btnSearch.click();
	}
	public void sarchItems(String items) {
	EbayHomepageLocatorsObj.txtbxSearch.sendKeys(items);
	EbayHomepageLocatorsObj.btnSearch.click();
}
	public void SeleniumWaits() {
		System.out.println(SetupDrivers.driver.getTitle()); //get title
		SetupDrivers.driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS); //implecit wait
	
		WebDriverWait Wait = new WebDriverWait(SetupDrivers.driver, 10);
		Wait.until(ExpectedConditions.elementToBeClickable(EbayHomepageLocatorsObj.txtbxSearch)); //explicityWait
		
		FluentWait fluentWait = new FluentWait(SetupDrivers.driver);  //fluent wait
					fluentWait.withTimeout(10,TimeUnit.SECONDS);
					fluentWait.pollingEvery(2,TimeUnit.SECONDS);
					fluentWait.ignoring(NoSuchElementException.class);
					fluentWait.withMessage("Time Exceeded");
	}
	public void mouseHoverMyEbay() throws Exception {
		Actions action = new Actions(SetupDrivers.driver);
		action.moveToElement(EbayHomepageLocatorsObj.linkMyEbay);
		action.perform();
		Thread.sleep(3000);
	}
	
	public void clickSummary() throws Exception {
		EbayHomepageLocatorsObj.linkSummary.isEnabled();
		EbayHomepageLocatorsObj.linkSummary.click();
		Thread.sleep(3000);
		
	}
	public void javaScriptExecutor () {
		
		JavascriptExecutor js = (JavascriptExecutor)SetupDrivers.driver; 	//Creating JS object


		//js.executeScript(script, args);

				

		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.click();"); //Clicking on element

				

		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.value ='shirt';"); //Writing something

				

				js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.checked=true;"); 				//Interect Checkbox

				

		js.executeScript("window.location = 'http://upskill.com';"); // initializing location

				

		js.executeScript("location.reload()"); 				//Refresh browser

				

		js.executeScript("alert('Confirmation');");			//Alert

				

		js.executeScript("window.scrollBy(0,500)", ""); 		//Scroll down to specific pixel

				

		js.executeScript("window.scrollBy(0,-500)", ""); 		//Scroll up to specific pixel

				

		js.executeScript("arguments[0].scrollIntoView();", EbayHomepageLocatorsObj.linkSummary);  		//Scroll to a object

				

		js.executeScript("window.scrollBy(0,document.body.scrollHeight)");  //Scroll down to bottom of website


	}
	
	public void KeyboradKeys() {
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Shoes");
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(Keys.ENTER);
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(Keys.UP);
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(Keys.DOWN);
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(Keys.CLEAR);
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(Keys.DELETE);
	}
	
	public void handelingAleart() {
		SetupDrivers.driver.switchTo().alert().accept(); // yes/accept to popup window
		SetupDrivers.driver.switchTo().alert().dismiss(); // no/dismiss to popup window
		SetupDrivers.driver.switchTo().alert().sendKeys("Survey,good work"); //wright in propts
		SetupDrivers.driver.switchTo().alert().getText(); //get the text from alert
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
}
