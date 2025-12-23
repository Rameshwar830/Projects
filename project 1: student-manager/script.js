const students = [];

const adds43 = document.getElementById("adds43");
const nameInput = document.getElementById("nameInput");
const rollInput = document.getElementById("rollInput");

adds43.onclick = function () {
    const student = {
        name: nameInput.value,
        roll: rollInput.value
    };

    students.push(student);

    console.log(students);

    nameInput.value = "";
    rollInput.value = "";
};
