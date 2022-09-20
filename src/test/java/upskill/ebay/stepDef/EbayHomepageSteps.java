package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbayHomePageActions;


public class EbayHomepageSteps {
	
	EbayHomePageActions EbayHomepageActionsObj = new EbayHomePageActions();
	
	@Given("^Open Ebay Homepage$")
	public void open_Ebay_Homepage() throws Throwable {
	    // todo
	}

	@When("^Search for Shirt$")
	public void search_for_Shirt() throws Throwable {
		EbayHomepageActionsObj.searchShirt();
	}
	

	@When("^Search for shoes$")
	public void search_for_shoes() throws Throwable {
		
		EbayHomepageActionsObj.SearchShoes();
		EbayHomepageActionsObj.SearchShoesExcel(); //this is for readexcell file  method
	}
	@Given("^Search For \"([^\"]*)\"$")
	public void search_For(String items) throws Throwable {
		EbayHomepageActionsObj.sarchItems(items);
	}
	@Given("^Search for big & tall cotton tee$")
	public void search_for_big_tall_cotton_tee() throws Throwable {
		EbayHomepageActionsObj.searchforBIGAndTall();	}
	
	@When("^Mouse Hover to MyEbay Summary$")
	public void mouse_Hover_to_MyEbay_Summary() throws Throwable {
		EbayHomepageActionsObj.mouseHoverMyEbay();
	}
	@Then("^Click on Summary$")
	public void click_on_Summary() throws Throwable {
		EbayHomepageActionsObj.clickSummary();
	}
	


}



