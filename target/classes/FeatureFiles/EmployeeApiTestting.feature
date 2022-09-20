@regression @apitesting
Feature: App user should able to create, update, get employee details

Scenario: Upskill multiple employee record
	
	Given Create new employee record
	And Update employee record
	When Get all employee data
	Then Get single employee data by id
	And Delete employee record