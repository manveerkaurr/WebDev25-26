let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.crash_type}</h3>
                 <hr>
                 <p>${crash.number_of_motorist_injured}</p>
                 <p>${crash.number_of_cyclist_killed}</p>
                 <p>${crash.number_of_cyclist_injured}</p>
                 <hr>
                 <p>${crash.cyclists_killed}</p>
                 <hr>
                 <p>${crash.number_of_persons_injured}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByCrash(){
  let output = document.getElementById("output");
  let crash = document.getElementById("crash").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.street == street){
      build += `<div class="fitted card">
                    <h3>${crash.number_of_persons_injured}</h3>
                    <hr>
                    <p>${crash.number_of_persons_killed}</p>
                    <p>${crash.number_of_pedestrians_injured}</p>
                    <p>${crash.number_of_pedestrians_killed}</p>
                    <hr>
                    <p>${crash.number_of_motorist_injured}</p>
                    <hr>
                    <p>${crash.number_of_motorist_killed}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByCrash() {
  let output = document.getElementById("output");
  let zip = document.getElementById("Crash").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;
  for (let i = 0; i < data.length; i += 1) {
    let crash = data[i];
    if (crash.incident_zip == zip) {
      build += `<div class="fitted card">
       <h3>${crash.crash_type}</h3>
       <hr>
       <p>${crash.number_of_persons_injured}</p>
       <p>${crash.number_of_persons_killed}</p>
       <p>${crash.number_of_cyclist_killed}</p>
       <hr>
       <p>${crash.number_of_motorist_killed}</p>
       <hr>
       <p>${crash.agency}</p>
       </div>`;
       ct += 1;
        }
      }
      result.innerHTML = `${ct} Results found for crash: ${crash}`;
      output.innerHTML = build;
    }

