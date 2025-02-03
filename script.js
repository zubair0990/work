const hostels = [
    { name: "Green Hostel", address: "123 University Road", price: "$200/month" },
    { name: "Blue Hostel", address: "456 Campus Lane", price: "$250/month" },
  ];
  
  function displayHostels() {
    const hostelList = document.getElementById("hostel-list");
    hostelList.innerHTML = hostels.map(hostel => `
      <div class="hostel-item">
        <h2>${hostel.name}</h2>
        <p>${hostel.address}</p>
        <p>${hostel.price}</p>
      </div>
    `).join("");
  }
  
  displayHostels();