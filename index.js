`use strict`;

// converting object to JSON and storing it into text file

const employee = {
  firstName: "John Smith",
  age: 27,
  department: "Sales & Marketing",
  city: "New York City",
};

// converting object into the JSON String.

const json = JSON.stringify(employee);
console.log(json);

// Storing JSON data into text/plain
// creating blob object from the Blob class

const blob = new Blob([json], { type: "text/plain" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "file.txt";
a.click();

// const blob = new Blob([json], { type: "text/plain" });:

// Here, a new Blob object is created. A Blob represents immutable raw data. It takes an array of data as its first parameter and an options object as its second parameter. In this case, the data is represented by the variable json, and the options specify that the data type is "text/plain".
// const url = URL.createObjectURL(blob);:

// This line creates a URL for the Blob object using the URL.createObjectURL() method. This method generates a URL that represents the Blob object, allowing it to be used as a link.
// const a = document.createElement("a");:

// Here, a new <a> element is created in the DOM using document.createElement(). This element will serve as the anchor for triggering the download.
// a.href = url;:

// This line sets the href attribute of the <a> element to the URL generated for the Blob object. This makes the link point to the Blob object, essentially making it downloadable.
// a.download = "file.txt";:

// This line sets the download attribute of the <a> element to "file.txt". This specifies the filename that the downloaded file should have when the user initiates the download.
// a.click();:

// Finally, a.click() programmatically triggers a click event on the <a> element. Since the <a> element is configured with a href pointing to the Blob object and a download attribute specifying the filename, this action will prompt the browser to download the file represented by the Blob object with the specified filename.
// In summary, this code dynamically creates a downloadable file in the browser using JavaScript by creating a Blob object, generating a URL for it, creating an anchor element to trigger the download, and then simulating a click on that anchor element to initiate the download.
