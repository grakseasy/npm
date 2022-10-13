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
	
	var emp = await getEmplFrom("./fake-server/employees.json")
	var sal = await abRmnSal("./fake-server/salaries.json")

	var arr3 = emp.map((item, i) => Object.assign({}, item, sal[i]));

	arr3.forEach(object => {
		delete object['employeeId'];
	  });
	
	if(order === "ascending"){
		arr3.sort(function(a, b) {
			return parseFloat(a.id) - parseFloat(b.id);
		});
	  }
	else if(order === "descending"){
		arr3.sort(function(a, b) {
			return parseFloat(b.id) - parseFloat(a.id);
		});
	  }
	  
	console.log(arr3)
	return arr3
}

var result = getEmployees("ascending");
console.log(result);

module.exports.getEmployees = getEmployees;
