function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

// we need to be able to keep up with sales numbers by the hour so we need to have a list of the hours
const biznessHours = [
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
  
  let Seattle = {
          // indentify properties
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieSale: 6.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // Determine per hour open, how many customers to expect?
    getCustomersPerHour: function () {
    
      for (let index = 0; index < biznessHours.length; index++) {
        this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers,this.maxCustomers));

      }
    },
   
  
    getCookiesSoldPerHour: function () {
      // Get total amount
      this.getCustomersPerHour();
      for (let index = 0; index < biznessHours.length; index++) {
        // How many cookies daily?
        let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
        // How many cookies sold, multiplication
        this.cookiesSoldPerHour.push(dailyCookies);
        // Equation for complete number, cookies sold daily
        this.totalDailyCookies += dailyCookies;
      }
      console.log(this.cookiesSoldPerHour);
    },
  
    // Function
    render() {
      this.getCookiesSoldPerHour();
      // Declare it and make it match on HTML
      const unorderedList = document.getElementById("Seattle");
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        // How many business hours?
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        // Make list
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  
  console.log(Seattle.cookiesSoldPerHour);
  Seattle.render();
  

    // NEW CITY
  let Tokyo = {
      // indentify properties
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // Determine per hour open, how many customers to expect?
    getCustomersPerHour: function () {
      for (let index = 0; index < biznessHours.length; index++) {
        this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers,this.maxCustomers));
      }
      
    },
  
    getCookiesSoldPerHour: function () {
            // Get total amount
      this.getCustomersPerHour();
        // How many cookies daily?
      for (let index = 0; index < biznessHours.length; index++) {
         // How many cookies sold, multiplication
        let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
        // Equation for complete number, cookies sold daily
        this.cookiesSoldPerHour.push(dailyCookies); 
        this.totalDailyCookies += dailyCookies; 
      }
      console.log(this.cookiesSoldPerHour); 
    },
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById("Tokyo"); // Declare it and make it match on HTML
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Tokyo.render();
  

    // NEW CITY
  let Dubai = {
      // indentify properties
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // Determine per hour open, how many customers to expect?
    getCustomersPerHour: function () {
      for (let index = 0; index < biznessHours.length; index++) {
        this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers,this.maxCustomers));
      }
     
    },
  
   
    getCookiesSoldPerHour: function () {
      // Get total amount
      this.getCustomersPerHour();
      // How many cookies daily?
      for (let index = 0; index < biznessHours.length; index++) {
        let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
        // Equation for complete number, cookies sold daily
        this.cookiesSoldPerHour.push(dailyCookies); 
        this.totalDailyCookies += dailyCookies; 
      }
      console.log(this.cookiesSoldPerHour); 
    },
    
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById("Dubai"); 
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Dubai.render();
  

  // NEW CITY
  let Paris = {
      // indentify properties
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
        // Determine per hour open, how many customers to expect?
    getCustomersPerHour: function () {
      for (let index = 0; index < biznessHours.length; index++) {
        this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers,this.maxCustomers));
      }
    },
  
    // Get total amount
    getCookiesSoldPerHour: function () {
      this.getCustomersPerHour();
      // How many cookies daily?
      for (let index = 0; index < biznessHours.length; index++) {
        let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
        // Equation for complete number, cookies sold daily
        this.cookiesSoldPerHour.push(dailyCookies);
        this.totalDailyCookies += dailyCookies;
      }
      console.log(this.cookiesSoldPerHour); 
    },
   
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById("Paris"); 
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Paris.render();
   

  // NEW CITY
  let Lima = {
      // indentify properties
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 4.6,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
            // Determine per hour open, how many customers to expect?
    getCustomersPerHour: function () {
      for (let index = 0; index < biznessHours.length; index++) {
        this.customersPerHour.push(getRandomNumberOfCustomersGivenARange (this.minCustomers,this.maxCustomers));
      }
     
    },
  
    getCookiesSoldPerHour: function () {
      this.getCustomersPerHour(); 
      // How many cookies daily?
      for (let index = 0; index < biznessHours.length; index++) {
        let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
         // Equation for complete number, cookies sold daily
        this.cookiesSoldPerHour.push(dailyCookies);
        this.totalDailyCookies += dailyCookies;
      }
      console.log(this.cookiesSoldPerHour); 
    },
    
    render() {
      this.getCookiesSoldPerHour(); 
      const unorderedList = document.getElementById("Lima"); 
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Lima.render();