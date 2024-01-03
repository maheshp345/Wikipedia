
let searchInputEl = document.getElementById("searchinput");

let searchResultsEl = document.getElementById("searchresults");

let spinner = document.getElementById("spinner");

function createAndAppendSerachResults(result){

    let {title,link,description} = result;
    //Creating Result Item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    searchResultsEl.appendChild(resultItemEl);


    //Creating Title Element
    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultItemEl.target = "_blank";

    resultItemEl.appendChild(resultTitleEl);

    //Creating Break element 

    let titleBreakEl = document.createElement("br");

    resultItemEl.appendChild(titleBreakEl);

    //Creating Url Element 
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;

    resultItemEl.appendChild(urlEl);
    // Creating Break elament 
   let lineBreakEl = document.createElement("br");

   resultItemEl.appendChild(lineBreakEl);

    //Creating Description Element
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent = description;

    resultItemEl.appendChild(descriptionEl);
}


function displayResults(searchResults){
    spinner.classList.toggle("d-none");
    for(let result of searchResults){
        createAndAppendSerachResults(result);
    }
    

}

function searchWikipedia(event){
     if(event.key === "Enter"){
        spinner.classList.toggle("d-none");
        let searchInput = searchInputEl.value;
        searchResultsEl.textContent = "";
        let url = `https://apis.ccbp.in/wiki-search?search=${searchInput}`;

        let options = {
            method:"GET"
        }
        fetch(url,options)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
           let {search_results} = data;
           displayResults(search_results);
        //    console.log(search_results);
        })
        
     }
}

searchInputEl.addEventListener("keydown",searchWikipedia);

























// `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`