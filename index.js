var id = 1;
const addbtn = document.getElementById("addbtn");
var addarray = [];

// Function to check if a student with the given Name already exists
function isStudentExists(emailInput, addarray) {
  return addarray.some(function (student) {
    return student.emailInput === emailInput;
  });
}
function saveStudentExists(newEmail, addarray) {
  return addarray.some(function (studentEmail) {
    return studentEmail.emailInput === newEmail;
  });
}

var invalidCharactersRegex = /[^a-zA-Z\s]/gm;
var nameInput = document.getElementById("name");
nameInput.addEventListener("input", function () {
  if (!nameInput.value) {
    document.getElementById("name").classList.add("is-invalid");
    document.getElementById("name").focus();
  } else if (invalidCharactersRegex.test(nameInput.value)) {
    document.getElementById("name").classList.add("is-invalid");
    document.getElementById("username-feedback").innerHTML =
      "You not allow to use symbol@ or number";
    document.getElementById("name").focus();
    return false;
  }
  if (!invalidCharactersRegex.test(nameInput.value)) {
    document.getElementById("name").classList.remove("is-invalid");
    document.getElementById("name").classList.add("is-valid");
  }
});

var genderInput = document.getElementById("gender");
genderInput.addEventListener("change", function () {
  if (!genderInput.value) {
    document.getElementById("gender").classList.add("is-invalid");
    document.getElementById("gender").focus;
  } else if (genderInput.value) {
    document.getElementById("gender").classList.remove("is-invalid");
    document.getElementById("gender").classList.add("is-valid");
  }
});

var ageInput = document.getElementById("age");
ageInput.addEventListener("change", function () {
  if (!ageInput.value || ageInput.value <= 0) {
    document.getElementById("age").classList.add("is-invalid");
    document.getElementById("age").focus;
    document.getElementById("age-feedback").innerHTML =
      "Age must be bigger than Zero";
  } else {
    document.getElementById("age").classList.remove("is-invalid");
    document.getElementById("age").classList.add("is-valid");
  }
});

var emailInput = document.getElementById("email");
var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
var yahooRegex = /^[a-zA-Z0-9]+@yahoo\.com$/;
var microsoftRegex = /^[a-zA-Z0-9]+@acledaaib\.onmicrosoft\.com$/;
emailInput.addEventListener("input", function () {
  if (!emailInput.value) {
    document.getElementById("email").classList.add("is-invalid");
    var emails = document.getElementById("email");
    emails.focus();
  } else if (
    !emailRegex.test(emailInput.value) &&
    !yahooRegex.test(emailInput.value) &&
    !microsoftRegex.test(emailInput.value)
  ) {
    document.getElementById("email").classList.add("is-invalid");
    document.getElementById("email").focus();
    document.getElementById("email-feedback").innerHTML = "Wrong email address";
  } else {
    document.getElementById("email").classList.remove("is-invalid");
    document.getElementById("email").classList.add("is-valid");
  }
});

var provinceInput = document.getElementById("province");
provinceInput.addEventListener("change", function () {
  if (!provinceInput.value) {
    document.getElementById("province").classList.add("is-invalid");
    document.getElementById("province").focus();
  } else if (provinceInput.value) {
    document.getElementById("province").classList.remove("is-invalid");
    document.getElementById("province").classList.add("is-valid");
  }
});

var inputFieldName = document.getElementById("name");
inputFieldName.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});
var inputField = document.getElementById("name");
inputField.addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/g, "");
});
// function handleKeyDown(event) {
//   if (event.key === ' ') {
//     event.preventDefault(); // Prevent the space key from being entered
//     var input = event.target;
//     var currentValue = input.value;

//     // Remove leading and trailing spaces
//     var trimmedValue = currentValue.trim();

//     // Remove extra spaces between characters
//     var newValue = trimmedValue.replace(/\s+/g, ' ');

//     // Check if a space is already present at the end
//     var lastChar = trimmedValue.charAt(trimmedValue.length - 1);
//     if (lastChar !== ' ') {
//       newValue += ' '; // Append a space at the end
//     }

//     input.value = newValue; // Update the input value
//   }
// }

function handleKeyDownEmail(event) {
  if (event.key === " ") {
    event.preventDefault(); // Prevent the space key from being entered
    var input = event.target;
    var currentValue = input.value;

    // Remove leading and trailing spaces
    var trimmedValue = currentValue.trim();

    // Remove extra spaces between characters
    var newValue = trimmedValue.replace(/\s+/g, " ");

    // Check if a space is already present at the end
    var lastChar = trimmedValue.charAt(trimmedValue.length - 1);
    if (lastChar !== " ") {
      newValue += ""; // Append a space at the end
    }

    input.value = newValue; // Update the input value
  }
}

addbtn.addEventListener("click", () => {
  var containertable = document.getElementById("container-table");
  // let autoInput = document.getElementById("auto").value;
  let nameInput = document.getElementById("name").value;
  let genderInput = document.getElementById("gender").value;
  let ageInput = document.getElementById("age").value;
  let emailInput = document.getElementById("email").value;
  let provinceInput = document.getElementById("province").value;

  if (isStudentExists(emailInput, addarray)) {
    document.getElementById("email").classList.add("is-invalid");
    var emails = document.getElementById("email");
    emails.focus();
    document.getElementById("email-feedback").innerHTML = "Email already exist";
    return false;
  }

  if (!nameInput) {
    var names = document.getElementById("name");
    names.focus();
    document.getElementById("name").classList.add("is-invalid");
    return false;
  } else if (nameInput) {
    document.getElementById("name").classList.remove("is-invalid");
  }

  if (!genderInput) {
    var genders = document.getElementById("gender");
    genders.focus();
    document.getElementById("gender").classList.add("is-invalid");
    return false;
  } else if (genderInput) {
    document.getElementById("gender").classList.remove("is-invalid");
  }

  if (!ageInput || ageInput <= 0) {
    var ages = document.getElementById("age");
    ages.focus();
    document.getElementById("age").classList.add("is-invalid");
    return false;
  } else if (ageInput) {
    document.getElementById("age").classList.remove("is-invalid");
  }

  if (!emailInput) {
    document.getElementById("email").classList.add("is-invalid");
    var emails = document.getElementById("email");
    emails.focus();

    return;
  }
  if (
    !emailRegex.test(emailInput) &&
    !yahooRegex.test(emailInput) &&
    !microsoftRegex.test(emailInput)
  ) {
    document.getElementById("email").classList.add("is-invalid");
    var emails = document.getElementById("email");
    emails.focus();
    return;
  }
  if (emailInput) {
    document.getElementById("email").classList.remove("is-invalid");
    document.getElementById("email").classList.add("is-valid");
  }

  if (!provinceInput) {
    var provinces = document.getElementById("province");
    provinces.focus();
    document.getElementById("province").classList.add("is-invalid");
    return false;
  } else if (provinceInput) {
    document.getElementById("province").classList.remove("is-invalid");
    document.getElementById("province").classList.add("is-valid");
  }

  let autoInput = id++;

  getdata = {
    autoInput: autoInput,
    nameInput: nameInput,
    genderInput: genderInput,
    ageInput: ageInput,
    emailInput: emailInput,
    provinceInput: provinceInput,
  };

  // var elements = document.getElementsByClassName("is-valid");
  // for (var i = 0; i < elements.length; i++) {
  //     elements[i].classList.remove("is-valid");
  // }
  document.getElementById("name").classList.remove("is-valid");
  document.getElementById("gender").classList.remove("is-valid");
  document.getElementById("age").classList.remove("is-valid");
  document.getElementById("email").classList.remove("is-valid");
  document.getElementById("province").classList.remove("is-valid");

  Swal.fire({
    title: "Student have been add!",
    text: "New student added successful",
    icon: "success",
    imageHeight: 200,
    imageAlt: "Custom image",
  });

  document.getElementById("auto").value = autoInput;
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("province").value = "";

  addarray.push(getdata);
  console.log(addarray);

  var newRow = document.createElement("tr");
  var currentData = addarray[addarray.length - 1];

  // Creating table cells for each property
  Object.keys(currentData).forEach((key) => {
    var newCell = document.createElement("td");

    newCell.textContent = currentData[key];
    newRow.appendChild(newCell);
  });
  var newCell = document.createElement("td");
  let Edit = document.createElement("button");
  newCell.style.display = "flex";
  Edit.innerHTML = "Edit";
  Edit.classList.add("btn", "bg-primary", "text-white", "rounded1");
  Edit.style.marginRight = "5px";
  newCell.appendChild(Edit);
  Edit.addEventListener("click", (e) => {
    var BtnDelete = document.querySelectorAll(".ButtonDelete");
    BtnDelete.forEach(function (button) {
      button.style.display = "none";
    });

    let index = e.target.closest("tr").rowIndex - 1; // Get the index of the row clicked
    let selectedData = addarray[index]; // Get the data of the selected row
    document.getElementById("auto").value = selectedData.autoInput;
    document.getElementById("name").value = selectedData.nameInput;
    document.getElementById("gender").value = selectedData.genderInput;
    document.getElementById("age").value = selectedData.ageInput;
    document.getElementById("email").value = selectedData.emailInput;
    document.getElementById("province").value = selectedData.provinceInput;
    console.log(e);

    const save = document.getElementById("save");
    const cancel = document.getElementById("cancel");
    addbtn.style.display = "none";
    save.style.display = "inline-block";
    cancel.style.display = "inline-block";

    // Save the index of the selected row for updating later
    save.dataset.index = index;
  });
  //Create btn delete
  let Delete = document.createElement("button");
  Delete.innerHTML = "Delete";
  Delete.classList.add(
    "btn",
    "ButtonDelete",
    "bg-danger",
    "text-white",
    "rounded1"
  );
  newCell.appendChild(Delete);
  newRow.appendChild(newCell);
  containertable.appendChild(newRow);
  Delete.addEventListener("click", (event) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let index = event.target.closest("tr").rowIndex - 1;
        addarray.splice(index, 1);
        containertable.removeChild(newRow);

        Swal.fire({
          title: "Deleted!",
          text: "Your field has been deleted.",
          icon: "success",
        });
      }
    });
  });
  //save update btn
  var saveBtn = document.getElementById("save");
  saveBtn.addEventListener("click", () => {
    var auto = document.getElementById("auto").value;
    var newName = document.getElementById("name").value;
    var newGender = document.getElementById("gender").value;
    var newAge = document.getElementById("age").value;
    var newEmail = document.getElementById("email").value;
    var newProvince = document.getElementById("province").value;
    updateUser(auto, newName, newGender, newAge, newEmail, newProvince);
    console.log(addarray);

    document.getElementById("name").classList.remove("is-valid");
    document.getElementById("gender").classList.remove("is-valid");
    document.getElementById("age").classList.remove("is-valid");
    document.getElementById("email").classList.remove("is-valid");
    document.getElementById("province").classList.remove("is-valid");
  });
  function updateUser(auto, Name, Gender, Age, Email, Province) {
    for (var i = 0; i < addarray.length; i++) {
      if (addarray[i].autoInput == auto) {
        if (emailExistsInArray(Email, i)) {
          // If the new email already exists, show error and return
          document.getElementById("email").classList.add("is-invalid");
          document.getElementById("email").focus();
          document.getElementById("email-feedback").innerHTML =
            "Email already exists";
          // Return without updating
          return;
        }
        if (invalidCharactersRegex.test(nameInput.value)) {
          document.getElementById("email").classList.add("is-invalid");
          document.getElementById("email").focus;
          return;
        }
        if (addarray[i].autoInput == auto) {
          addarray[i].nameInput = Name;
          addarray[i].genderInput = Gender;
          addarray[i].ageInput = Age;
          addarray[i].emailInput = Email;
          addarray[i].provinceInput = Province;
          // Find the corresponding row in the table
          var tableRow = document
            .getElementById("container-table")
            .getElementsByTagName("tr")[i];
          if (tableRow) {
            // Update the table cell contents with new values
            tableRow.cells[1].textContent = Name;
            tableRow.cells[2].textContent = Gender;
            tableRow.cells[3].textContent = Age;
            tableRow.cells[4].textContent = Email;
            tableRow.cells[5].textContent = Province;
            Swal.fire({
              title: "Save!",
              text: "Student new updated successful",
              icon: "success",
              imageHeight: 200,
              imageAlt: "Custom image",
            });

            var BtnDelete = document.querySelectorAll(".ButtonDelete");
            BtnDelete.forEach(function (button) {
              button.style.display = "flex";
            });

            document.getElementById("auto").value = "";
            document.getElementById("name").value = "";
            document.getElementById("gender").value = "";
            document.getElementById("age").value = "";
            document.getElementById("email").value = "";
            document.getElementById("province").value = "";

            const save = document.getElementById("save");
            const cancel = document.getElementById("cancel");
            addbtn.style.display = "inline-block";
            save.style.display = "none";
            cancel.style.display = "none";
          }
          break; // Break the loop once updated
        }
      }
    }
  }

  function emailExistsInArray(email, currentIndex) {
    for (var i = 0; i < addarray.length; i++) {
      if (i !== currentIndex && addarray[i].emailInput === email) {
        return true; // Email already exists in array
      }
    }
    return false; // Email does not exist in array (excluding current index)
  }
  // btn cancel
  var cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", () => {
    document.getElementById("auto").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("province").value = "";

    document.getElementById("name").classList.remove("is-invalid");
    document.getElementById("gender").classList.remove("is-invalid");
    document.getElementById("age").classList.remove("is-invalid");
    document.getElementById("email").classList.remove("is-invalid");
    document.getElementById("province").classList.remove("is-invalid");

    var BtnDelete = document.querySelectorAll(".ButtonDelete");
    BtnDelete.forEach(function (button) {
      button.style.display = "flex";
    });

    const cancel = document.getElementById("cancel");
    const save = document.getElementById("save");
    addbtn.style.display = "inline-block";
    cancel.style.display = "none";
    save.style.display = "none";
  });
});
