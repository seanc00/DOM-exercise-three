// const so data cannot be changed
const xmlString = `
  <CLASS ID="Advanced Web Development">
    <STUDENT>
      <NAME>Tom</NAME>
      <AGE>19</AGE>
      <HEIGHT>1.3</HEIGHT>
      <SEX>M</SEX>
      <GRADE>B</GRADE>
    </STUDENT>
    <STUDENT>
      <NAME>Dick</NAME>
      <AGE>29</AGE>
      <HEIGHT>1.1</HEIGHT>
      <SEX>M</SEX>
      <GRADE>A</GRADE>
    </STUDENT>
    <STUDENT>
      <NAME>Harry</NAME>
      <AGE>39</AGE>
      <HEIGHT>1.5</HEIGHT>
      <SEX>M</SEX>
      <GRADE>C</GRADE>
    </STUDENT>
    <STUDENT>
      <NAME>Mary</NAME>
      <AGE>30</AGE>
      <HEIGHT>1.1</HEIGHT>
      <SEX>F</SEX>
      <GRADE>B+</GRADE>
    </STUDENT>
  </CLASS>
`;

function extractData() {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
  const students = xmlDoc.querySelectorAll('STUDENT');
  const tableBody = document.getElementById('studentTableBody');

  // stops code from repeating same info in table
  let element = document.getElementById('studentTableBody');
  element.innerHTML = ``;

  // for loop that will loop through each student in XML data
  students.forEach((student) => {
    let name = student.querySelector('NAME').textContent;
    let age = student.querySelector('AGE').textContent;

    // creates a table element for every iteration of each student
    let row = document.createElement('tr');
    let elementName = document.createElement('td');
    elementName.textContent = name;
    let elementAge = document.createElement('td');
    elementAge.textContent = age;

    // builds table with correct parent elements
    row.appendChild(elementName);
    row.appendChild(elementAge);
    tableBody.appendChild(row);
  });

  alert("Data (Name and Age)has been extracted from XML table.")
}

function removeData() {
  let element = document.getElementById('studentTableBody');
  element.innerHTML = `
  <tr>
  <td>N/A</td>
  <td>N/A</td>
  </tr>
  `;
}