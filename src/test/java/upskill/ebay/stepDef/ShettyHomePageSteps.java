package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.ShettyHomePageActions;

public class ShettyHomePageSteps {

	ShettyHomePageActions ShettyHomePageActionsObj = new ShettyHomePageActions();
	@Given("^Open Shetty Homepage$")
	public void open_Shetty_Homepage() throws Throwable {
		ShettyHomePageActionsObj.loadShettyHomePage();
		
		
	    
	}

	@When("^click on iFrame Home$")
	public void click_on_iFrame_Home() throws Throwable {
		ShettyHomePageActionsObj.SwitchShettyIframe();
		ShettyHomePageActionsObj.clickHomeSet();
	}

	@Then("^It should reload iframe hompage$")
	public void it_should_reload_iframe_hompage() throws Throwable {
		ShettyHomePageActionsObj.verifyShetty();
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
