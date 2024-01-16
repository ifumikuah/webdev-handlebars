// First of all, fetch your data, i this case i will fetch my own local json
fetch("./static/data.json")
  .then(res => {
    if (!res.ok) {
      throw new Error("Fail!");
    }
    return res.json();
  })
  // If success
  .then(data => {
    // Whole Handlebars.js preping procedures

    // Access your template innerHTML
    const source = document.getElementById("id0-template-hb").innerHTML;
    // Compile your template
    const template = Handlebars.compile(source);
    // This is crucial, your template and fetched json data will be combined
    const html = template({result: data});
    // fetched json can be accessed and referenced as 'result'

    // The newly generated html must be enclosed in a single wrapper element
    document.getElementById("id0-container-hb").innerHTML = html

    // Whole Handlebars.js preping procedures finish here
  })

