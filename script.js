let data, info; //global variables

async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json";
  info = await fetch(https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
  /* Challenge 2: 
          1) Traverse the data using a 'for' loop.  
          2) Create a variable to extract each criminal's information from the dataset.
          3) Using the variable created, generate HTML to display the information for each criminal.

     Note: To view the PDF of the criminal poster include the following code before the string interpolated url
     into a hyperlink in order to actually display the PDF in a new tab.
     https://mozilla.github.io/pdf.js/web/viewer.html?file=${...}

  */
 for (let i = 0; i < data.length; i++) {
  let criminal = data.length[i];
  build += `
            <div class="card">
              <img src="${criminal.images[0].thumb}" alt="${criminal.title}">
              <h2>${criminal.title}</h2>
              <p><strong>Subject:</strong> ${criminal.subjects[0] || "N/A"}</p>
                <p>${criminal.description || "description."}</p>
                 <a class="button" target="_blank" 
                   href="https://mozilla.github.io/pdf.js/web/viewer.html?file=${criminal.files[0].url}">
                   Veiw
                </a>
            </div>
            `;
    }


  output.innerHTML = build;
}

