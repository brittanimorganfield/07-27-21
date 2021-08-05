const bizHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

class Fishshop {
  constructor(city, minCustomers, maxCustomers, cookiesPerCustomer) {
    this.city = city;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.cookiesPerCustomer = cookiesPerCustomer;
    this.dailyCookieTotal = 0;
    this.dailyCookieCount = this.getCookiesPerDay();
  }

  getCustomersPerHour() {
    // rando
    return Math.floor(
      Math.random() * (this.maxCustomers - this.minCustomers + 1) +
        this.minCustomers
    );
  }
  getCookiesPerHour() {
    // per hour x by average cookies
    return Math.floor(this.getCustomersPerHour() * this.cookiesPerCustomer);
  }
  getCookiesPerDay() {
    let totalCookies = 0;
    const hourlySales = [];

    for (let i = 0; i < bizHours.length; i++) {
      let randomCookies = this.getCookiesPerHour();
      hourlySales.push(randomCookies);
      // rando & total
      totalCookies += randomCookies;
    }
    
    this.dailyCookieTotal = totalCookies;
    hourlySales.push(this.dailyCookieTotal);
    // cookie count is how many sold
    return hourlySales;
  }

  renderTable() {
    const sales = this.dailyCookieCount;
    const CitysalesTable = document.querySelector("#info-table");
    const cityRow = document.createElement("tr");
    const rowHeader = document.createElement("th");
    // top of row
    rowHeader.classList.add("capitalize");
    rowHeader.textContent = this.city;
    //
    //
    cityRow.appendChild(rowHeader);
    for (const sale of sales) {
      const entry = document.createElement("td");
      entry.textContent = sale;
      cityRow.appendChild(entry);
    }
    CitysalesTable.appendChild(cityRow);
  }
}

const tableRowHeader = (arr) => {
  const salesTable = document.querySelector("#info-table");

  const headerRow = document.createElement("tr");
  const rowHeader = document.createElement("th");
  headerRow.classList.add("hours");
  
  headerRow.appendChild(rowHeader);
  for (const item of arr) {
    
    const entry = document.createElement("td");
    
    entry.textContent = item;
    
    headerRow.appendChild(entry);
  }
  
  const entry = document.createElement("td");
  entry.textContent = "Daily Total";
  // elemnt
  headerRow.appendChild(entry);
  salesTable.appendChild(headerRow);
};

const tableRowFooter = (arr) => {
  const sums = arr[0].map((x, idx) =>
    arr.reduce((sum, curr) => sum + curr[idx], 0)
  );

  const salesTable = document.querySelector("#info-table");
  // complete row elements
  const footerRow = document.createElement("tr");
  const footerHeader = document.createElement("th");
  footerHeader.textContent = "Totals";
  // complete row elements
  footerRow.appendChild(footerHeader);
  for (const idx of sums) {
    // complete row elements
    const entry = document.createElement("td");
    
    entry.textContent = idx;
    
    footerRow.appendChild(entry);
  }
  
  salesTable.appendChild(footerRow);
};

let seattle = new Fishshop("Seattle", 23, 65, 6.3);
let tokyo = new Fishshop("Tokyo", 3, 24, 1.2);
let dubai = new Fishshop("Dubai", 11, 38, 3.7);
let paris = new Fishshop("Paris", 20, 38, 2.3);
let lima = new Fishshop("Lima", 2, 16, 4.6);

const allShops = [seattle, tokyo, dubai, paris, lima];

const allCookieSales = [
  seattle.dailyCookieCount,
  tokyo.dailyCookieCount,
  dubai.dailyCookieCount,
  paris.dailyCookieCount,
  lima.dailyCookieCount,
];
// get shops together
const generateTable = () => {
  tableRowHeader(bizHours);
  for (shop of allShops) {
    shop.renderTable();
  }
  tableRowFooter(allCookieSales);
};

generateTable();