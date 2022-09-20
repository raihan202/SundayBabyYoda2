package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbaySearchResultActions;

public class EbaySearchResultSteps {
	
	EbaySearchResultActions EbaySearchResultActionsObj = new EbaySearchResultActions();
	
	@Then("^Item list should have only Shirt related products$")
	public void item_list_should_have_only_Shirt_related_products() throws Throwable {
		EbaySearchResultActionsObj.verifyShirtItems();
	}
	
	@Then("^Item list should have only shoes related products$")
	public void item_list_should_have_only_shoes_related_products() throws Throwable {
		EbaySearchResultActionsObj.VerifyShoesItems();
	
	}
	@When("^Filter by \"([^\"]*)\"$")
	public void filter_by(String brand) throws Throwable {
		EbaySearchResultActionsObj.filterBrand(brand);
	}

	@Then("^Item list should have product of\"([^\"]*)\"$")
	public void item_list_should_have_product_of(String brand) throws Throwable {
		EbaySearchResultActionsObj.verifyBrandItems(brand);
	}
	
	@When("^Select the first shirt on item list$")
	public void select_the_first_shirt_on_item_list() throws Throwable {
		EbaySearchResultActionsObj.selectShirtBigAndTall();
	}

}