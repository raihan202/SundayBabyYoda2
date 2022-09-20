package upskill.utilities;



import cucumber.api.Scenario;
import cucumber.api.java.After;

public class AfterActions {
	
	TakeScreenshot TakeScreenshotObj = new TakeScreenshot();
	@After
	public void afterActins(Scenario Scenario) throws Exception {
		
		if(Scenario.isFailed()) {
			TakeScreenshotObj.Screenshots(); 
		}
		
		SetupDrivers.tearDownDriver();
		System.out.println("------Test complete,Browse closed");
	}
	

}
