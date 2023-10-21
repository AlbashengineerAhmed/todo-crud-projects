var webName = document.getElementById('ProductName');
var webLink = document.getElementById('ProductPrice');
var btn = document.getElementById('Update');
var storeProduct = []

function createProduct() {
    if (validationWebName() && validationWebLink()) {
        

        var site = {
            siteName: webName.value,
            siteLink: webLink.value,
        }

        storeProduct.push(site);
        localStorage.setItem('allProduct', JSON.stringify(storeProduct));



        // storeProduct.push(product);
        displayProduct();
    }
    else{
        alert("Please Enter Data Correctly")
    }
}

var transformString = localStorage.getItem('allProduct');

if (localStorage.getItem("allProduct") == null){

    var storeProduct = []; 
}else {

    storeProduct = JSON.parse(transformString);
    displayProduct();
}

function clearList() {

    siteName.value = "";
    siteLink.value = "";
    }

    function deletelist() {
    storeProduct[update].siteName = '';
    storeProduct[update].siteLink = '';
    }

    function deleteLink(linkIndex) {

        storeProduct.splice(linkIndex, 1);
        displayProduct();
    
        }

    function displayProduct() {
        var trs = '';
        for (let index = 0; index < storeProduct.length; index++) {
            trs += `<tr>
                <td id = 'ahmed0'>${index + 1}</td>
                <td id = 'ahmed1'>${storeProduct[index].siteName}</td>
                <td id = 'ahmed2'>${storeProduct[index].siteLink}</td>
                <td><button onclick = 'visitLink(${index});' id = 'link${index}' class=" btn btn-outline-warning"><i class="fas fa-external-link-alt fw-bold fa-fw fa-lg"></i></button></td>
                <td><button onclick ='deleteLink(${index});' class="btn btn-outline-danger"><i class="fas fa-trash fw-bold fa-fw fa-lg "></i></button></td>
                </tr>`;
    
        }
        document.getElementById('tbody').innerHTML = trs;
    };

    function visitLink(link){

        var cartona = storeProduct[link].siteLink;
        console.log(cartona)
        console.log(link)
        var mydiv = document.getElementById("link"+link);
        var aTag = document.createElement('a');
        aTag.setAttribute('href', ("https://" + storeProduct[link].siteLink));
        aTag.innerText ='Go Now';
        mydiv.innerHTML = '';
        // mydiv.innerHTML = aTag;
        mydiv.appendChild(aTag);


    };

    function searchInput() {

        var indexSearch = document.getElementById('searchInput')
        var trs = '';
        for (let index = 0; index < storeProduct.length; index++) {
        
            if (storeProduct[index].addName.toLowerCase().includes(indexSearch.value.toLowerCase())) {
            
            document.getElementById('sahla').innerHTML = "";  
            
            trs += `<tr>
                <td>${index + 1}</td>
                <td id="mashe">${storeProduct[index].siteName}</td>
                <td>${storeProduct[index].siteLink}</td>
                <td><button onclick = '' class=" btn btn-outline-warning"><i class="fas fa-external-link-alt fw-bold fa-fw fa-lg"></i></button></td>
                <td><button onclick ='deleteProduct(${index});' class="btn btn-outline-danger">Delete</button></td>
                </tr>`;
        
            }
            else if(trs == '')
            {
            document.getElementById('sahla').innerHTML = "I did not find You Link";
            }
        
        }
        
        document.getElementById('tbody').innerHTML = trs;
        }
// function validation(){
//     // var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    
//     var regex = new RegExp(expression);
//     var t = webLink.value;

//     if (t.match(regex)) {
//         alert("Successful match");
//         return true;
//     } else {
//         alert("No match");
//         return false;
//     }
// }

var alertLink = document.querySelector("#alertName") 
function validationWebName(){

    var regexWeb = /^[A-Z][a-z0-9]{3,15}$/;

    
    if (regexWeb.test(webName.value)) {
        alertName.style.display = 'none';
        return true;
    }
    else{
        alertName.style.display = 'block';
        return false;
    }
}
webName.addEventListener("keyup" , validationWebName);

var alertLink = document.querySelector("#alertLink") 
function validationWebLink(){

    // var regexWeb = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    // var regexWeb = /((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$/;
    // var regexWeb = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    var regexWeb = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (regexWeb.test(webLink.value)) {
        alertLink.style.display = 'none';
        return true;
    }
    else{
        alertLink.style.display = 'block';
        return false;
    }
}
webLink.addEventListener("keyup" , validationWebLink);