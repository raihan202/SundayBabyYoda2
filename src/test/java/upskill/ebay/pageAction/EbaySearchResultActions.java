package upskill.ebay.pageAction;

import static org.junit.Assert.assertThat;

import org.openqa.selenium.support.PageFactory;

import junit.framework.Assert;
import upskill.ebay.pageElements.EbaySearchResultLocators;
import upskill.utilities.SetupDrivers;

public class EbaySearchResultActions {

	
	EbaySearchResultLocators EbaySearchResultLocatorsObj;
	
	public EbaySearchResultActions() {
		
		EbaySearchResultLocatorsObj = new EbaySearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySearchResultLocatorsObj);
	}
	
	public void verifyShirtItems() {
		//option 1
		EbaySearchResultLocatorsObj.txtShirt.isDisplayed();
		
		//option 2
		//Assert.assertEquals("shirts", EbaySearchResultLocatorsObj.txtShirt.getText());
		
		//option 3
		//Assert.assertTrue(EbaySearchResultLocatorsObj.txtShirt.isDisplayed());
	}
	public void VerifyShoesItems() {
		EbaySearchResultLocatorsObj.txtShoes.isDisplayed();
	}
	public void filterBrand(String brand){
		if(brand.equals("Adidas")){
			EbaySearchResultLocatorsObj.cbxBrandAdidas.click();
		} else if(brand.equals("Nike")){
			EbaySearchResultLocatorsObj.cbxBrandNike.click();
		} else if(brand.equals("Unbranded")){
			EbaySearchResultLocatorsObj.cbxBrandUnbranded.click();
		} else {
			System.out.println(" Brand not found, please implement ! ");
		}
	}
	
	public void verifyBrandItems(String brand){
		if(brand.equals("Adidas")){
			EbaySearchResultLocatorsObj.txtShirt.isDisplayed();
		} else if(brand.equals("Nike")){
			EbaySearchResultLocatorsObj.txtShoes.isDisplayed();
		} else if(brand.equals("Unbranded")){
			EbaySearchResultLocatorsObj.txtpants.isDisplayed();
		} else {
			System.out.println(" Brand not found, please implement ! ");
		}
	}
	
	public void selectShirtBigAndTall() {
		
		EbaySearchResultLocatorsObj.linkShirtItems.click();
	}
	
	
	
	
	
	
	
}
