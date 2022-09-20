@regression @smoke @SKYW-15 @E2E
Feature: Ebay Search Functionality

	Scenario: Search for Shirt
		Given Open Ebay Homepage
		When  Search for Shirt
		Then Item list should have only Shirt related products	