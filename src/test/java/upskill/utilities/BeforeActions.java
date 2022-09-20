package upskill.utilities;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class BeforeActions {
	
	@Before
	public void beforeActions(Scenario scen) {      //Before action will run before executing any scenario 
		
		System.out.print("----->>>Initializing driver..."); //Get cucumber scenario parameter for feature file name
		SetupDrivers.setupDriver();   //Calling setup driver method to execute before scenario
		System.out.print("Test scenario name:"+ scen.getName());

	}
	
	
	

}
 