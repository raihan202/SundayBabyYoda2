$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "\nDescription: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter Items By Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search For \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of\"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 16,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 17,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 18,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6708219417,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 112165375,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter Items By Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search For \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of\"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_For(String)"
});
formatter.result({
  "duration": 24339576625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 3060481834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 33
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_product_of(String)"
});
formatter.result({
  "duration": 125449417,
  "status": "passed"
});
formatter.after({
  "duration": 303873167,
  "status": "passed"
});
formatter.before({
  "duration": 3700688959,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1059834,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter Items By Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search For \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of\"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_For(String)"
});
formatter.result({
  "duration": 7227828667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 5931334042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 33
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_product_of(String)"
});
formatter.result({
  "duration": 66129167,
  "status": "passed"
});
formatter.after({
  "duration": 177444917,
  "status": "passed"
});
formatter.before({
  "duration": 3524735083,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 177084,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter Items By Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search For \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of\"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_For(String)"
});
formatter.result({
  "duration": 5813492792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4777846167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 33
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_product_of(String)"
});
formatter.result({
  "duration": 139282500,
  "status": "passed"
});
formatter.after({
  "duration": 210201083,
  "status": "passed"
});
formatter.uri("EbayCartDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Cart Functionality",
  "description": "\nDescription: User should able to add items in cart",
  "id": "ebay-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-248"
    }
  ]
});
formatter.before({
  "duration": 3371056792,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 553416,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-cart-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Search for big \u0026 tall cotton tee",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select the first shirt on item list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Size",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Men Size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Shade",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Add to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_big_tall_cotton_tee()"
});
formatter.result({
  "duration": 3137679458,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Ibads-MBP\u0027, ip: \u0027fe80:0:0:0:43e:a1f3:8e46:57ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /var/folders/7p/tjqb7rl15sv...}, goog:chromeOptions: {debuggerAddress: localhost:50523}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6565ab1667f9dad216935d469908f939\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat upskill.ebay.pageAction.EbayHomePageActions.searchforBIGAndTall(EbayHomePageActions.java:35)\n\tat upskill.ebay.stepDef.EbayHomepageSteps.search_for_big_tall_cotton_tee(EbayHomepageSteps.java:36)\n\tat ✽.Given Search for big \u0026 tall cotton tee(EbayCartDropDown.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_the_first_shirt_on_item_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.select_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.select_Men_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.select_Shade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.select_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.add_to_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10740167,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Ibads-MBP\u0027, ip: \u0027fe80:0:0:0:43e:a1f3:8e46:57ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /var/folders/7p/tjqb7rl15sv...}, goog:chromeOptions: {debuggerAddress: localhost:50523}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6565ab1667f9dad216935d469908f939\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\n\tat upskill.utilities.TakeScreenshot.Screenshots(TakeScreenshot.java:22)\n\tat upskill.utilities.AfterActions.afterActins(AfterActions.java:15)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\n\tat org.testng.TestRunner.run(TestRunner.java:617)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\n\tat org.testng.TestNG.run(TestNG.java:1031)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\n",
  "status": "failed"
});
formatter.uri("EbaySearchShirt.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3174567916,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shirt",
  "description": "",
  "id": "ebay-search-functionality;search-for-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Shirt",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Shirt related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 223334,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_Shirt()"
});
formatter.result({
  "duration": 6673125,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Ibads-MBP\u0027, ip: \u0027fe80:0:0:0:43e:a1f3:8e46:57ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /var/folders/7p/tjqb7rl15sv...}, goog:chromeOptions: {debuggerAddress: localhost:50577}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3a76de13e9b474a115023813848a34b8\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027Search for anything\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat upskill.ebay.pageAction.EbayHomePageActions.searchShirt(EbayHomePageActions.java:29)\n\tat upskill.ebay.stepDef.EbayHomepageSteps.search_for_Shirt(EbayHomepageSteps.java:20)\n\tat ✽.When Search for Shirt(EbaySearchShirt.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Shirt_related_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7772833,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Ibads-MBP\u0027, ip: \u0027fe80:0:0:0:43e:a1f3:8e46:57ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /var/folders/7p/tjqb7rl15sv...}, goog:chromeOptions: {debuggerAddress: localhost:50577}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3a76de13e9b474a115023813848a34b8\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\n\tat upskill.utilities.TakeScreenshot.Screenshots(TakeScreenshot.java:22)\n\tat upskill.utilities.AfterActions.afterActins(AfterActions.java:15)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\n\tat org.testng.TestRunner.run(TestRunner.java:617)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\n\tat org.testng.TestNG.run(TestNG.java:1031)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\n",
  "status": "failed"
});
formatter.uri("EbaySearchShoes.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3361914625,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 340750,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_shoes()"
});
