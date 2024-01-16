function processHandlebars(hbsTemplate, rawText, outputContainer) {
  const source = document.getElementById(hbsTemplate).innerHTML
  const template = Handlebars.compile(source);
  const generateHTML = template( rawText );
  
  document.getElementById(outputContainer).innerHTML = generateHTML
}

function fetchUrl() {
  fetch("./scripts/database.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    processHandlebars("person-template", {person: data}, "person-generated")
  })
}

Handlebars.registerHelper('calcAge', function (date,name) {
  const todayAge = new Date().getFullYear();
  const personAge = new Date(date+"T00:00:01").getFullYear();
  const personMonth = new Date(date+"T00:00:01").getMonth() + 1;
  const todayMonth = new Date().getMonth() + 1;
  const personDate = new Date(date+"T00:00:01").getDate();
  const todayDate = new Date().getDate();
  
  if (( todayMonth > personMonth)) {
    return todayAge - personAge ;
  } else if (todayMonth === personMonth && todayDate >= personDate) {
    return todayAge - personAge;
  }

  return todayAge - personAge - 1
})

fetchUrl()