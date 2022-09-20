package upskill.utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SetupDrivers {
	
	public static WebDriver driver; //inishailihed a driver
	
	public static void setupDriver() {
		
		WebDriverManager.chromedriver().setup();		   //getting the chrome driver from cloud
		ChromeOptions options= new ChromeOptions();	        //initializing chrome optons
		options.addArguments("--start-maximized)");        //dd argument to maximize browser
		options.addArguments("--disable-notification");    //add argument to disable notification
		//options.addArguments("--headless");                //headless execution
		driver = new ChromeDriver(options);
		driver.get("https://www.ebay.com");
		
	}
	
	public static WebDriver getDriver() {
		return driver;
		
			
		
	}
	public static void tearDownDriver() {
		driver.close();
		driver.quit();
	}
	

}
