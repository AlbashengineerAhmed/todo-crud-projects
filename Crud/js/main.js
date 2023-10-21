var ProductName = document.getElementById('ProductName');
var ProductPrice = document.getElementById('ProductPrice');
var ProductCategory = document.getElementById('ProductCategory');
var ProductDesc = document.getElementById('ProductDescription');
var ProductCount = document.getElementById('ProductAmount');
var btn = document.getElementById('Update');
var storeProduct = []

function createProduct() {

    if (btn.innerHTML == 'Add Product' && validationProductsName() && validationProductsPrice()
        && validationProductsAmount() && validationProductsCategory() && validationProductsDesc())
        {
        var product = {
            addName: ProductName.value,
            price: ProductPrice.value,
            count: ProductCount.value,
            category: ProductCategory.value,
            description: ProductDesc.value,
        
        }

    storeProduct.push(product);
    localStorage.setItem('allProduct', JSON.stringify(storeProduct));



    // storeProduct.push(product);
    displayProduct();

    }
    else
    {
        alert('I cannot add your product because it was entered incorrectly')
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

    ProductName.value = "";
    ProductPrice.value = "";
    ProductCategory.value = "";
    ProductDesc.value = "";
    ProductCount.value = "";
    }

    function deletelist() {
    storeProduct[update].addName = '';
    storeProduct[update].price = '';
    storeProduct[update].category = '';
    storeProduct[update].description = '';
    storeProduct[update].count = '';
    }

    function deleteProduct(productIndex) {

        storeProduct.splice(productIndex, 1);
        displayProduct();
    
        }

    function displayProduct() {
        var trs = '';
        for (let index = 0; index < storeProduct.length; index++) {
            trs += `<tr>
                <td id = 'ahmed0'>${index + 1}</td>
                <td id = 'ahmed1'>${storeProduct[index].addName}</td>
                <td id = 'ahmed2'>${storeProduct[index].price}</td>
                <td id = 'ahmed3'>${storeProduct[index].count} </td>
                <td id = 'ahmed4'>${storeProduct[index].category}</td>
                <td id = 'ahmed5'>${storeProduct[index].description} </td>
                <td><button onclick = 'productcount(${index} , ${1});' class=" btn btn-outline-success" id = 'ahmed5'><i class="fas fa-plus-circle fw-bold fa-fw fa-lg"></i></td>
                <td><button onclick = 'productcount(${index} , ${-1});' class=" btn btn-outline-danger" id = 'ahmed6'><i class="fas fa-minus-circle fw-bold fa-fw fa-lg"></i></td>
                <td><button onclick = 'updateProduct(${index});' class=" btn btn-outline-warning"><i class="fas fa-pen-square fa-fw fw-bold fa-lg  "></i></button></td>
                <td><button onclick ='deleteProduct(${index});' class="btn btn-outline-danger"><i class="fas fa-trash fw-bold fa-fw fa-lg "></i></button></td>
                </tr>`;
    
        }
        document.getElementById('tbody').innerHTML = trs;
    };

    function searchInput() {

        var indexSearch = document.getElementById('searchInput')
        var trs = '';
        for (let index = 0; index < storeProduct.length; index++) {
        
            if (storeProduct[index].addName.toLowerCase().includes(indexSearch.value.toLowerCase())) {
            
            document.getElementById('sahla').innerHTML = "";
            // alert("Hellow");
            // var anaBasha = storeProduct[index].addName[0];
            // // console.log(anaBasha)
            // var input = document.getElementById('searchInput');
            
            // if ( input.value !== "" ) {
            //     var regExp = new RegExp(input,'gi');
            //     storeProduct[index].addName= (storeProduct[index].addName).replace(regExp,"");
            // }
            // else
            // {
            //     storeProduct[index].addName= (storeProduct[index].addName).replace(regExp,"<mark>&$</mark>");
            // }
            
            // var text=document.getElementById("searchInput").value;
            // if(text)
            // {
            //     var pattern=new RegExp("("+text+")", "gi");
            //     var new_text=searchpara.replace(pattern, "<span class='highlight'>"+text+"</span>");
            //     // document.getElementById("search_para").innerHTML=new_text;
            //     storeProduct[index].addName = new_text;
            // }
            
            trs += `<tr>
                <td>${index + 1}</td>
                <td id="mashe">${storeProduct[index].addName}</td>
                <td>${storeProduct[index].price}</td>
                <td>${storeProduct[index].count}</td>
                <td>${storeProduct[index].category}</td>
                <td>${storeProduct[index].description} </td>
                <td><button onclick = 'productcount(${index} , ${1});' class=" btn btn-outline-success" id = 'ahmed5'><i class="fas fa-plus-circle fw-bold fa-fw fa-lg"></i></td>
                <td><button onclick = 'productcount(${index} , ${-1});' class=" btn btn-outline-danger" id = 'ahmed6'><i class="fas fa-minus-circle fw-bold fa-fw fa-lg"></i></td>
                <td><button  class=" btn btn-outline-warning">Update</button></td>
                <td><button onclick ='deleteProduct(${index});' class="btn btn-outline-danger">Delete</button></td>
                </tr>`;
        
            // var mashe = document.getElementById('mashe');
            // mashe.classList.add('serHover');
            }
            else if(trs == '')
            {
            document.getElementById('sahla').innerHTML = "Mafesh Data";
            }
        
        }
        
        document.getElementById('tbody').innerHTML = trs;
        }


    function productcount(index , minus){
        if(storeProduct[index].count == 0 && minus == -1){
            storeProduct[index].count = 0;
        }else{
            storeProduct[index].count = Number(storeProduct[index].count) + Number(minus);
            displayProduct();
        }
        
        
        }

    function updateProduct(update) {
        document.getElementById('Update').innerHTML = "Update";
        // document.getElementById('Update').style.backgroundColor = "yellow";
        btn.classList.add('bom');
        
        
        ProductName.value = storeProduct[update].addName;
        ProductPrice.value = storeProduct[update].price;
        ProductCount.value = storeProduct[update].count;
        ProductCategory.value = storeProduct[update].category;
        ProductDesc.value = storeProduct[update].description;

        // btn.addEventListener("click" , editProduct)
        btn.onclick = function editProduct(){
        
            // storeProduct[update] = document.getElementById("ahmed1").innerHTML = ProductName.value;
            // console.log(document.getElementById("ahmed1").value)
            // var product = {
            //   addName: ProductName.value,
            //   price: ProductPrice.value,
            //   count: ProductCount.value,
            //   category: ProductCategory.value,
            //   description: ProductDesc.value
            // }
        
            
            var a = document.getElementById("ahmed1").innerHTML = ProductName.value;
            var b = document.getElementById("ahmed2").innerHTML = ProductPrice.value;
            var c = document.getElementById("ahmed3").innerHTML = ProductCount.value;
            var d =document.getElementById("ahmed4").innerHTML = ProductCategory.value;
            var e =document.getElementById("ahmed5").innerHTML = ProductDesc.value;
            storeProduct[update].addName = a;
            storeProduct[update].price = b;
            storeProduct[update].count = c;
            storeProduct[update].category = d;
            storeProduct[update].description = e;
        
            // storeProduct.push(storeProduct);
            // storeProduct.splice(update,1,product);
            displayProduct();
            
        
        // document.getElementById('Update').style.backgroundColor = "yellow";
        
        // btn.classList.remove('outline');
        // btn.setTimeout(btn.classList.add('outline'),10000);
                               //hena ☻☻☻☻☻☻☻☻☻☻☻☻
        setTimeout(function(){
            btn.classList.remove('bom');},2000);
            setTimeout(function(){
            btn.classList.add('outline');
            document.getElementById('Update').innerHTML = "Add Product";
            createProduct()
        },2000);
        // if( btn.innerHTML == 'Add Product' ){
        //     createProduct();
        // }
    }


        // localStorage.setItem('allProduct', JSON.stringify(storeProduct));
    }

    

    // var h1 = document.querySelectorAll('h1');
    // for (let i = 0; i < h1.length; i++) {
        
    //     h1[i].addEventListener("click" , function() {
        
    //         alert("Shater");
        
    //     })
        
    // }

    // var div = document.querySelector("div");

    // document.addEventListener("mousemove" , function(eventInfo) {

    //     div.style.position = "absolute";
    //     div.style.top = `${eventInfo.clientY}px`;
    //     div.style.left = `${eventInfo.clientx}px`;
    // });


    var alertName = document.querySelector("#alertName") 
    function validationProductsName(){

        var regexProducts = /^[A-Z][a-z0-9]{1,15}$/;

        
        if (regexProducts.test(ProductName.value)) {
            alertName.style.display = 'none';
            return true;
        }
        else{
            alertName.style.display = 'block';
            return false;
        }
    }
ProductName.addEventListener("keyup" , validationProductsName);

var alertPrice = document.querySelector("#alertPrice") 
function validationProductsPrice(){

    var regexProducts = /^[1-9]+[0-9]*$/;

    
    if (regexProducts.test(ProductPrice.value)) {
        alertPrice.style.display = 'none';
        return true;
    }
    else{
        alertPrice.style.display = 'block';
        return false;
    }
}
ProductPrice.addEventListener("keyup" , validationProductsPrice);

var alertAmount = document.querySelector("#alertAmount") 
function validationProductsAmount(){

    var regexProducts = /^[1-9]+[0-9]*$/;

    
    if (regexProducts.test(ProductCount.value)) {
        alertAmount.style.display = 'none';
        return true;
    }
    else{
        alertAmount.style.display = 'block';
        return false;
    }
}
ProductCount.addEventListener("keyup" , validationProductsAmount);

var alertCategory = document.querySelector("#alertCategory") 
function validationProductsCategory(){

    var regexProducts = /^[A-Z][a-z0-9]{2,20}$/;

    
    if (regexProducts.test(ProductCategory.value)) {
        alertCategory.style.display = 'none';
        return true;
    }
    else{
        alertCategory.style.display = 'block';
        return false;
    }
}
ProductCategory.addEventListener("keyup" , validationProductsCategory);

    var alertDesc = document.querySelector("#alertDesc") 
    function validationProductsDesc(){

        var regexProducts = /^(.|\s)*[a-zA-Z]+(.|\s)*$/;

        
        if (regexProducts.test(ProductDesc.value)) {
            alertDesc.style.display = 'none';
            return true;
        }
        else{
            alertDesc.style.display = 'block';
            return false;
        }
    }
ProductDesc.addEventListener("keyup" , validationProductsDesc);