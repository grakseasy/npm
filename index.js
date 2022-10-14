function getEmplFrom(path) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', /*domain + */ path);
		xhr.onload = function () {
			if (this.status == 200) {
				var employees = JSON.parse(xhr.responseText);
				resolve(employees)
			}
			else {
				reject("Error while getting employees!");
			}

		}

		xhr.send();
	});
}

function abRmnSal(path) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', /*domain + */ path);
		xhr.onload = function () {
			if (this.status == 200) {
				var salaries = JSON.parse(xhr.responseText);
				resolve(salaries)
			}
			else {
				reject("Error while getting salary!");
			}

		}

		xhr.send();
	});
}



async function getEmployees(order) {

	//TODO should be exposed function which returns array of employees => for example [{id:"id", "name":"test", "salary":""}]
	//getting the employees and salaries
	var emp = await getEmplFrom("./fake-server/employees.json")
	var sal = await abRmnSal("./fake-server/salaries.json")

	//combining the salaries and the employees into one array of objects
	var arr3 = emp.map((item, i) => Object.assign({}, item, sal[i]));

	//deleting the employeeId prop, since all i need is [{id:"id", "name":"test", "salary":""}]
	arr3.forEach(object => {
		delete object['employeeId'];
	  });
	
	//returning the employees in ascending or descending order
	if(order === "ascending"){
		arr3.sort(function(a, b) {
			return parseFloat(a.salary) - parseFloat(b.salary);
		});
	  }
	else if(order === "descending"){
		arr3.sort(function(a, b) {
			return parseFloat(b.salary) - parseFloat(a.salary);
		});
	  }
	else{
		console.log("You need to choose between 'ascending' and 'descending'! ")
	}
	  
	
	return arr3
}

//printing the result in the console
var result = getEmployees("ascending");
result.then(function(data) {
	console.log(data) 
 })

module.exports = { getEmployees };