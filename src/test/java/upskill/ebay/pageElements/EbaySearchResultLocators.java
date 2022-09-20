package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbaySearchResultLocators {

	@FindBy(xpath="//span[2][contains(text(),'shirt')]") //search result validation
	public WebElement txtShirt;
	
	@FindBy(xpath="//span[contains(text(),'shoes')]") //search result validation
	public  WebElement txtShoes;
	
	@FindBy(xpath="//span[2][contains(text(),'pants')]") //search result validation
	public WebElement txtpants;
	
	@FindBy (xpath="//input[@aria-label='adidas']") //serch brnad addidas
	public WebElement cbxBrandAdidas; //checkbox xpath cbx
	
	@FindBy (xpath="//input[@aria-label='Nike']") //serch brnad Nike
	public WebElement cbxBrandNike; //checkbox xpath cbx

	@FindBy (xpath="//input[@aria-label='Unbranded']") //serch brnad Unbranded
	public WebElement cbxBrandUnbranded; //checkbox xpath cbx
	
	@FindBy(xpath="//span[contains(text(),'Big & Tall Cotton Tee. Sizes 4 XLT to 8XLT. With & without pockets. MADE IN USA')]")
	public WebElement  linkShirtItems //link big & tall shirts items
	;

}
