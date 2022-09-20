package upskill.utilities;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class TakeScreenshot {
	
	public void Screenshots () throws Exception {
		
		String filename = "Ebay"; //write this line 2nd
		
		DateFormat dataFormat = new SimpleDateFormat("mm-dd-yyyy h-m-s"); //write this line 3rd
		Date date = new Date();  //write this line 5th
		
		File screenshot = ((TakesScreenshot) SetupDrivers.driver).getScreenshotAs(OutputType.FILE); //write this line 1st
		
		FileUtils.copyFile(screenshot, new File(System.getProperty("user.dir")+"/screenshots/"+filename+dataFormat.format(date)+".png"));
		
		System.out.println(">>>>>>>>>>Before Senario fail take Screenshot>>>>>>>>>");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
