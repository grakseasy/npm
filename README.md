
**1)** I used npm init for initializing the project, and provided the necessary details

**2)** I was given 3 functions to work with. I gave myself freedom to use them how I wanted:
    **1.** getEmplFrom() - returns the employees from the fake server
    **2.** abRmnSal() - returns the salaries from the fake server
    **3.** getEmployees - returns the employees with their salaries

**3)** I made some modifications to the code for the getEmplFrom() function, and used it for the abRmnSal() function as well. I got rid of the 'domain' parameter in the XMLHTTPRequest.opne() function. 

**4)** I changed the places of the Promise parameters, resolve and reject. The reason for this being the fact that I would get the wanted result from the promise, but the PromiseState would be 'rejected', which doesn't make sense. Taking a look at some stackoverflow solutions, and MDN documentation, I realised that switching the places of the resolve and reject parameters fixes the issue. 

**5)** I used .map() to merge the employees and salaries. I joined the employees with their respective salaries by using 'Id' property from the employees and 'employeeId' property from the salaries. The new array of objects would showcase the correct salaries for each of the employees, but it would also contain both the 'Id' property and the 'employeeId' property. I got rid of the latter property.

**6)** I added a string parameter to the getEmployees() function, so the result would be sorted based on the users' input. Should the user type 'ascending' as the parameter, the result would be all of the employees sorted by their salaries in the ascending order. Same thing for the 'descending' option.

**7)**
