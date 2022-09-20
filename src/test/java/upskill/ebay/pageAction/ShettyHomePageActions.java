package upskill.ebay.pageAction;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.ShettyHomePageLocators;
import upskill.utilities.SetupDrivers;



public class ShettyHomePageActions {
	
	ShettyHomePageLocators ShettyHomePageLocatorsObj;
	
	public ShettyHomePageActions() {
	ShettyHomePageLocatorsObj = new ShettyHomePageLocators();
	PageFactory.initElements(SetupDrivers.driver, ShettyHomePageLocatorsObj);
	}
	public void loadShettyHomePage() throws Exception {
		SetupDrivers.driver.get("https://rahulshettyacademy.com/AutomationPractice/");
		Thread.sleep(3000);
		
	}
	public void SwitchShettyIframe() {
		SetupDrivers.driver.switchTo().frame("iframe-name");
	}
	
	public void clickHomeSet() {
		
		List<WebElement> framelist = SetupDrivers.driver.findElements(By.id("courses-iframe"));
		
		for(int i=0; i<(framelist.size());i++) {
			try {
				ShettyHomePageLocatorsObj.btnHome.click();
			}catch(Exception e) {
			System.out.println("element not found in the iframe list");
		}
	}
		//ShettyHomePageLocatorsObj.btnHome.click();
		
	}
	public void handleiframe() {
		//i find iframe using tag in DOM or HTML
		//i use switchTo().frame(1);
		
		//switch iframe by Name or ID
		SetupDrivers.driver.switchTo().frame("iframe-name");
		SetupDrivers.driver.switchTo().frame("frame2");
		SetupDrivers.driver.switchTo().frame("id");
		
		//switch back to previous iframe
		SetupDrivers.driver.switchTo().defaultContent();
		SetupDrivers.driver.switchTo().parentFrame();
		
		//nested iframe
		SetupDrivers.driver.switchTo().frame("parent");
		SetupDrivers.driver.switchTo().frame("child");
		SetupDrivers.driver.switchTo().frame("inner");
	}
	public void verifyShetty() throws Exception {
		Thread.sleep(3000);
		ShettyHomePageLocatorsObj.btnHome.isDisplayed();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

