@regression @smoke @us-246
Feature: Ebay Brand Outline

Description: User should able to filter items by Brand

Background:
	Given Open Ebay Homepage
	
Scenario Outline: Filter Items By Brand	
	Given Search For "<Items>"
	When Filter by "<Brand>"
	Then Item list should have product of"<Brand>"
	
		Examples:
		|Items		|Brand		|
		|Shoes		|Nike		|
		|Shirts		|Adidas		|
		|Pants		|Unbranded	|
	