## transaviaTestCases


### Description
*As part of my restart/network assignment I have to make test cases to check some proposed changes in transavia website. 
Transavia has decided they require more information about their visitors to make informed decisions.
To make sure this doesn’t impact conversions negatively, they decide to test the changes first.*


### The main functionalities includ:
Testidea 
The test will run on 2 pages: The Personal Details page and the Hold Luggage page.

https://www.transavia.com/nl-NL/boek-een-vlucht/passagiers/passagiersgegevens/


On the Personal Details page, we will add 3 new input fields per passenger. The 3 new input fields will be added below the last option
of the current form (After Mobile Phone Number). 
These are as follows:  
* Weight in KG 
* Shoe size 
* Circumference  
All inputs will only contain numeric values and are optional.  When a visitor fills out the Personal Details page and (optionally) 
some of the added fields, they can press “Verder” to land on the Hold Luggage Page.

Hold Luggage
https://www.transavia.com/nl-NL/boek-een-vlucht/ruimbagage-toevoegen/selecteren/   
At the top of the Hold Luggage page, an element is added that shows all the answers from the optional fields that the visitor filled in
on the Personal Detail page, together with an explanation.
These are as follows: 
* Weight : “Your weight is: [Weight]. We ask this to know if you, combined with your luggage, do not exceed our maximum weight 
regulations per passenger.” 
* Shoe size : “Your shoe size is: [Shoe size]. We ask this to know if your shoes will fit under the seat in front of you.” 
* Circumference : “Your circumference is: [Circumference]. We ask this to know if you will fit into the seats. Please purchase 
an extra seat if needed.”
End product
Your end product will be a single .js file. If this file is copy-pasted into the browser console on either the Personal Details page
or the Hold Luggage page, the page is changed to reflect the test ideas described above.

### Technology used

* Javascript

