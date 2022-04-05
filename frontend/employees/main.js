/**
 * 1) Récuperer le JSON avec fetch
 * 2) parcourir le tableau
 * 3) pour chaque ligne du tableau d'entrée :
 *      - calculer les valeurs (salaire mensuel, génération de l'email, l'année de naissance)
 *      - insérer l'employé dans le tableau HTML 
 */

const tbody = document.getElementById('tbody');
// console.log(tbody);

function setEmployeeEmail(_employee) {
    // Prénom Nom --> p.nom@email.com
    let firstname = _employee.employee_name.charAt(0);
    let lastname = _employee.employee_name.substring(_employee.employee_name.indexOf(" ") + 1);
    _employee.email = firstname + "." + lastname + "@email.com";
    _employee.email = _employee.email.toLowerCase();
    console.log(_employee);
}

function setEmployeeSalary(_employee) {
    // salaire annuel --> salaire mensuel
    _employee.MonthlySalary = Math.round(_employee.employee_salary / 12, 2) + " €";
}

function setEmployeeBirthYear(_employee) {
    today = new Date();
    today = today.getFullYear();
    _employee.birthyear = today - _employee.employee_age;
}

function deleteEmployee(event) {
    console.log(event);

    console.log(event.target);

    console.log(event.target.dataset);
    // var i = index.parentNode.parentNode.rowIndex;
    // document.getElementById('table').deleteRow(i);
}


function addEmployeeToTable(_employee) {

    const tableRow = document.createElement('tr');

    const tdId = document.createElement('td');
    const tdFullName = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdSalary = document.createElement('td');
    const tdBirthYear = document.createElement('td');
    const tdActions = document.createElement('td');

    tdId.textContent = _employee.id;
    tdFullName.textContent = _employee.employee_name;
    tdEmail.textContent = _employee.email;
    tdSalary.textContent = _employee.MonthlySalary;
    tdBirthYear.textContent = _employee.birthyear;

    let buttons = '<button data-duplicate="' + _employee.id + '" class="duplicate"><i class="fa fa-files-o"></i> Duplicate</button> ';

    buttons += '<button data-damien="dwwm" data-delete="' + _employee.id + '" class="delete"><i class="fa fa-trash"></i> Delete</button>';

    tdActions.innerHTML = buttons;

    tableRow.appendChild(tdId)
    tableRow.appendChild(tdFullName)
    tableRow.appendChild(tdEmail)
    tableRow.appendChild(tdSalary)
    tableRow.appendChild(tdBirthYear);
    tableRow.appendChild(tdActions);



    tbody.appendChild(tableRow);
}



fetch('employees.json', { method: "GET" })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => { // data ok
        const employees = json.data;
        console.log(employees);

        for (let i = 0; i < employees.length; i++) {

            setEmployeeEmail(employees[i]);
            setEmployeeSalary(employees[i]);
            setEmployeeBirthYear(employees[i]);
            addEmployeeToTable(employees[i]);

            let btn1 = document.querySelectorAll('[data-delete]');

            btn1.forEach(btn => {
                btn.addEventListener('click', deleteEmployee)
            });

            console.log(btn1);

            // console.log(employees[i]);
        }
    });