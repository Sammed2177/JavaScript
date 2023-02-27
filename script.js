let users = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main Street",
    phone: "555-1234",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Oak Avenue",
    phone: "555-5678",
  },
  {
    id: 3,
    name: "Bob Johnson",
    address: "789 Elm Street",
    phone: "555-9012",
  },
  {
    id: 4,
    name: "Samantha Green",
    address: "321 Maple Street",
    phone: "555-3456",
  },
  {
    id: 5,
    name: "Tom Brown",
    address: "654 Pine Street",
    phone: "555-7890",
  },
  {
    id: 6,
    name: "Emily Davis",
    address: "987 Cedar Avenue",
    phone: "555-2345",
  },
  {
    id: 7,
    name: "Mark Wilson",
    address: "246 Birch Street",
    phone: "555-6789",
  },
  {
    id: 8,
    name: "Lisa Taylor",
    address: "369 Willow Avenue",
    phone: "555-0123",
  },
  {
    id: 9,
    name: "Mike Thompson",
    address: "582 Walnut Street",
    phone: "555-4567",
  },
  {
    id: 10,
    name: "Sara Adams",
    address: "175 Pine Street",
    phone: "555-8901",
  },
  {
    id: 11,
    name: "David Lee",
    address: "357 Maple Avenue",
    phone: "555-2345",
  },
  {
    id: 12,
    name: "Karen Brown",
    address: "468 Cedar Street",
    phone: "555-6789",
  },
  {
    id: 13,
    name: "Adam Clark",
    address: "579 Birch Avenue",
    phone: "555-0123",
  },
  {
    id: 14,
    name: "Erica Green",
    address: "690 Elm Street",
    phone: "555-4567",
  },
  {
    id: 15,
    name: "Sean Carter",
    address: "791 Oak Avenue",
    phone: "555-8901",
  },
  {
    id: 16,
    name: "Amy Hill",
    address: "802 Main Street",
    phone: "555-2345",
  },
  {
    id: 17,
    name: "Jared Scott",
    address: "913 Pine Street",
    phone: "555-6789",
  },
  {
    id: 18,
    name: "Natalie Nguyen",
    address: "124 Cedar Avenue",
    phone: "555-0123",
  },
  {
    id: 19,
    name: "Timothy Lewis",
    address: "235 Maple Street",
    phone: "555-4567",
  },
  {
    id: 20,
    name: "Melanie King",
    address: "346 Elm Avenue",
    phone: "555-8901",
  },
];

// Sort the users array by id in ascending order
users.sort(function (a, b) {
  return a.id - b.id;
});

// Get a reference to the table body element
var tableBody = document.querySelector("table tbody");

// Insert each user into the table based on their id
users.forEach(function (user) {
  var row = tableBody.insertRow();
  row.insertCell().textContent = user.id;
  row.insertCell().textContent = user.name;
  row.insertCell().textContent = user.address;
  row.insertCell().textContent = user.phone;
});

function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those that don't match the search query
  for (i = 0; i < tr.length; i++) {
    var found = false;
    for (j = 0; j < tr[i].cells.length; j++) {
      td = tr[i].cells[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
        }
      }
    }
    if (found) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function applyFilter() {
  var start = document.getElementById("filter-start").value;
  var end = document.getElementById("filter-end").value;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var userId = user.id;
    var row = document.getElementById("row-" + userId);

    if (userId >= start && userId <= end) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }

  filterPopup.style.display = "none";
}

document.querySelector(".filter-button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "block";
});

const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {
  const jsPDF = window.jspdf.jsPDF;
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4', height: 300 });
  pdf.setFontSize(10);
  const table = document.getElementById('userTableBody');

  // Set the y position to start at 15 pixels from the top of the page
  let y = 15;

  // Loop through all rows in the table
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const cells = row.querySelectorAll('td');

    // Loop through each cell in the row and get the text content
    const userId = cells[0].textContent.trim();
    const userName = cells[1].textContent.trim();
    const userAddress = cells[2].textContent.trim();
    const phoneNumber = cells[3].textContent.trim();

    // Add the user details to the PDF
    pdf.text(`User ID: ${userId}`, 10, y);
    pdf.text(`User Name: ${userName}`, 10, y + 10);
    pdf.text(`User Address: ${userAddress}`, 10, y + 20);
    pdf.text(`Phone Number: ${phoneNumber}`, 10, y + 30);

    // Increment the y position to add the next user details
    y += 50;
  }

  // Save the PDF with the filename "user-list.pdf"
  pdf.save('user-list.pdf');
});


var ages = [32, 33, 16, 40];
console.log(ages);

const res = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(res);


// const ages = [10, 20, 15, 25, 30];

// const res = ages.filter(function(age) {
//   // Define the checkAdult function inside the filter method using a callback function
//   function checkAdult(age) {
//     return age >= 18;
//   }
  
//   return checkAdult(age);
// });

console.log(res); // Output: [20, 25, 30]

