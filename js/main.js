var user = document.querySelector(".user")
var Box_account = document.querySelector(".user__account-list")

var modelLogin = document.querySelector(".model.login") 
var modelRegister = document.querySelector(".model.register")
var overlay = document.querySelector(".model__ovarlay")
var btnlogin = document.querySelector(".user__account__item.btnlogin")
var btnregister = document.querySelector(".user__account__item.btnregister")
var switchRegister = document.querySelector(".model__footer_control.switchRegister")
var switchLogin = document.querySelector(".model__footer_control.switchLogin")
user.addEventListener("click",function(e){
    // Box_account.style.display = "block";
    e.preventDefault();
    Box_account.classList.toggle("active") 
    Box_account.style.animation = "ScaleUp1 linear 0.3s forwards";
})
   

btnlogin.addEventListener("click",function(e){
    e.preventDefault();
    modelLogin.style.display = "block";
})
btnregister.addEventListener("click",function(){
    
    modelRegister.style.display = "block";

})
switchRegister.addEventListener("click",function(){
    
    modelRegister.style.display = "block";
    modelLogin.style.display = "none";
})
switchLogin.addEventListener("click",function(e){
    
    modelLogin.style.display = "block";
    modelRegister.style.display = "none";
    e.preventDefault();

})


// function init_reload(){
//     setInterval( function() {
//                window.location.reload();

//       },100);
// }

var useremail = document.querySelector(".model-body__input__info.email")
var userpassword = document.querySelector(".model-body__input__info.password")
var dn = document.querySelector(".model-body__function__login")
var loadBack = document.querySelectorAll(".model__footer_back")


dn.addEventListener("click",function(){
    if(useremail.value != "" && userpassword.value != ""){
        confirm("Email bạn vừa nhập là: " + useremail.value + "\n" + "Mật Khẩu bạn vừa nhập là: " + userpassword.value);
    }
})

loadBack.forEach(function(item,index){
    item.addEventListener("click",function(){
    window.location.reload();
    })
})

// SLIDER FLASHSALE

var prew = document.querySelector(".sale-control__prew")
var next = document.querySelector(".sale-control__next")
var flashsaleBox = document.querySelectorAll(".flash_sale__box")
var flashsaleBody = document.querySelector(".flash_sale__body")
var imgslide = document.querySelectorAll(".flash_sale__img")
var text = document.querySelectorAll(".flash_sale__content__title")
var galleryContentHead = document.querySelector(".gallery-title") 


//Thanh Trượt ở flashsale

prew.addEventListener("click",function(){
    var left = document.querySelector(".flash_sale__body")
    left.scrollBy(-245,0)
})
next.addEventListener("click",function(){
    var right = document.querySelector(".flash_sale__body")
    right.scrollBy(245,0)
})

//-----------------------------------



var galleryClose = document.querySelector(".gallery-close")
var gallery = document.querySelector(".gallery")
var subtrack = document.querySelector(".controlquantity-subtrack")
var plus = document.querySelector(".controlquantity-plus")
var inputGallery = document.querySelector(".controlquantity-input")

var subtrack2 = document.querySelector(".controlquantity-subtrack.productboght")
var plus2 = document.querySelector(".controlquantity-plus.productboght")
var inputGallery2 = document.querySelector(".controlquantity-input.productboghtInput")

var copy1 = document.querySelector(".gallery-intro__codegood__btnCopy")
var copy2 = document.querySelector(".gallery-intro__codegood__btnCopy2")
var galleryImgBig = document.querySelector(".gallery-showproduct__bigimg")
var imgsFlashsale = document.querySelectorAll(".flash_sale__img") 
var flashsalePricenow = document.querySelectorAll(".flash_sale__content__price")
var flashsalePriceDontSale = document.querySelectorAll(".flash_sale__content__price__sale")
var galleryPricenow = document.querySelector(".gallery-intro__body__price__now")
var galleryPriceDontSale = document.querySelector(".gallery-intro__body__price__dontsale")
var galleryImgsMin = document.querySelectorAll(".gallery-optionproduct__minimg")
var WrapminImgs = document.querySelector(".gallery-optionproduct")
var galleryBran = document.querySelector(".gallery-introhead__brand__name")
var galleryType = document.querySelector(".gallery-introhead__content2__name")
var currenIndex = 0;
// console.log(++inputGallery)
plus.addEventListener("click",function(){
    inputGallery.innerText = inputGallery.value++;
})
// parseInt(galleryPricenow.innerText)

//Tăng giảm số lượng trong gallery
subtrack.addEventListener("click",function(){
    if(inputGallery.value <=1){
        return;
    }
    else{
        inputGallery.innerText = inputGallery.value--;
    }
})




//Đóng form
galleryClose.addEventListener("click",function(){

    gallery.style.display = "none";
})

//Dấu sao chép
function refund(){
    copy1.innerText = "Sao chép"
    copy2.innerText = "Sao chép"
}


copy1.addEventListener("click",function(){
    copy1.innerText = "Đã Lưu";
    setTimeout(refund,3000)
})

copy2.addEventListener("click",function(){
    copy2.innerText = "Đã Lưu";
    setTimeout(refund,3000)
})



function insertImgSmallandText(){
    if(currenIndex == 0){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/flsh2_0.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/flsh2_01.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/flsh2_02.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/flsh2_03.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/flsh2_04.webp"
        galleryBran.textContent = "JBL"
        galleryType.textContent = "Loa Bluetooth"

    }
    else if(currenIndex == 1){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_1.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_11.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_12.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_13.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_14.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Filter Camera"
    }
    else if(currenIndex == 2){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_2.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_21.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_22.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_23.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_24.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Ốp Lưng"
    }
    else if(currenIndex == 3){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_3.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_31.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_32.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_33.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_34.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Cáp Sạc"
    }
    else if(currenIndex == 4){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_4.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_41.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_42.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_43.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_44.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Cáp sạc"
    }
    else if(currenIndex == 5){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_5.jpg"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_51_.jpg"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_52.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_53.jpg"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_54.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Tai nghe không dây"
        
    }
    else if(currenIndex == 6){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_3.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_31.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_32.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_33.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_34.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Cáp Sạc"
        
    }
    else if(currenIndex == 7){
        galleryImgsMin[0].src = "./imgs/container_flashsale/container-flashsale2/fls2_3.webp"
        galleryImgsMin[1].src = "./imgs/container_flashsale/container-flashsale2/fls2_31.webp"
        galleryImgsMin[2].src = "./imgs/container_flashsale/container-flashsale2/fls2_32.webp"
        galleryImgsMin[3].src = "./imgs/container_flashsale/container-flashsale2/fls2_33.webp"
        galleryImgsMin[4].src = "./imgs/container_flashsale/container-flashsale2/fls2_34.webp"
        galleryBran.textContent = "Baseus"
        galleryType.textContent = "Cáp Sạc"
    }
    // else{
    //     WrapminImgs.style.display = "none"
    // }
}

function Showgallery(){
    galleryImgBig.src = imgsFlashsale[currenIndex].src
    galleryPricenow.textContent = flashsalePricenow[currenIndex].textContent
    galleryContentHead.textContent = text[currenIndex].textContent
    galleryPriceDontSale.textContent = flashsalePriceDontSale[currenIndex].textContent
    // gallery.classList.add("Scaleup");
    gallery.style.display = "block";
    WrapminImgs.style.display = "block"
}

// Click vào item nào show item đó lên
text.forEach(function(item,index){
    item.addEventListener("click",function(e){
        e.preventDefault();
        currenIndex = index;
        insertImgSmallandText();
        Showgallery();
    })
})

imgsFlashsale.forEach(function(item,index){
    item.addEventListener("click",function(e){
        e.preventDefault();
        currenIndex = index;
        insertImgSmallandText();
        Showgallery();
    })
})


//Chuyển đổi tabs của các ảnh con trong gallery
galleryImgsMin.forEach(function(item,index){
    galleryImgsMin[0].classList.add("galleryActive")

    item.addEventListener("click",function(){
        currenIndex = index;
        document.querySelector(".gallery-optionproduct__minimg.galleryActive").classList.remove("galleryActive")
        galleryImgBig.src = galleryImgsMin[currenIndex].src
        galleryImgsMin[currenIndex].classList.add("galleryActive")
        
        
    })
})

//----------

var products = document.querySelectorAll(".ProductsItem>a")
var productImgs = document.querySelectorAll(".ProductsItem__img")
var productNames = document.querySelectorAll(".ProductsItem__name")
var productPriceCurrent = document.querySelectorAll(".ProductsItem__price--current")
var productPriceAgo = document.querySelectorAll(".ProductsItem__price--ago")

// console.log(products)


function showGallery2(){
    galleryImgBig.src = productImgs[currenIndex].src
    galleryPricenow.textContent = productPriceCurrent[currenIndex].textContent
    galleryPriceDontSale.textContent = productPriceAgo[currenIndex].textContent
    galleryContentHead.textContent = productNames[currenIndex].textContent
    // gallery.classList.add("Scaleup");
    gallery.style.display = "block";
    WrapminImgs.style.display = "none"
}

products.forEach((item,index)=>{
    item.addEventListener("click",function(e){
        e.preventDefault();
        currenIndex = index;
        // if(currenIndex == 0){
            
        // }

        showGallery2();
    })
})

var listProductBought = document.querySelector(".productsBought-list")
var cartt = document.querySelector(".cart")
var BoxProduct = document.querySelector(".BoxProduct")
var countProduct = document.querySelector(".count-product__number")
cartt.addEventListener("click",function(e){
    e.preventDefault();
    // BoxProduct.classList.toggle("active")
    
    listProductBought.classList.toggle("active")

    //Tạm thời
    var listplus =  document.querySelectorAll(".controlquantity-plus.productboght")
    var listInput = document.querySelectorAll(".controlquantity-input.productboghtInput")
    var listSubtrack = document.querySelectorAll(".controlquantity-subtrack.productboght")
})




var addCart = document.querySelector(".gallery-intro__control__addcart")
var namegallery = document.querySelector(".gallery-title").innerText
var priceGallery = document.querySelector(".gallery-intro__body__price__now").innerText
var ImgGallery = document.querySelector(".gallery-showproduct__bigimg").src


function addNew(){
    var namegallery = document.querySelector(".gallery-title").innerText
    var priceGallery = document.querySelector(".gallery-intro__body__price__now").innerText
    var ImgGallery = document.querySelector(".gallery-showproduct__bigimg").src

    let listProduct = localStorage.getItem("list-Product") ? JSON.parse(localStorage.getItem("list-Product")) : []

    listProduct.push({
        name: namegallery,
        price: priceGallery,
        linkImg : ImgGallery
    })

    
    localStorage.setItem("list-Product",JSON.stringify(listProduct))
    renderProduct()

    countProduct.innerText++;
    if(countProduct.innerText >=1){
        document.querySelector(".count-product").style.display = "block"
    }
    

    toast();
    

}


function toast(){
    let listProduct = localStorage.getItem("list-Product") ? JSON.parse(localStorage.getItem("list-Product")) : []

    var li = document.createElement("li") 

    listProduct.map(function(item,index){

        li.innerHTML = 
        `
        <li class="okok">
        <p>Thêm sản phẩm ${item.name} thành công</p>
        <span>Mời bạn vào giỏ hàng để xem sản phẩm</span>
    
        <div class="model-notification__icon">
            <i class="fa-solid fa-xmark"></i>
        </div>
        </li>
        `

    })

    document.querySelector(".model-notification").appendChild(li);
    document.querySelector(".model-notification").style.transform = "translateX(0px)"
    


    const autoRemove = setTimeout(function(){
       document.querySelector(".model-notification").removeChild(li);
     },3000)

     
     li.addEventListener("click",function(e){
       if(e.target.closest(".model-notification__icon")){
            document.querySelector(".model-notification").removeChild(li);
            clearTimeout(autoRemove)
       }
     })

}


function renderProduct(){
    let listProduct = localStorage.getItem("list-Product") ? JSON.parse(localStorage.getItem("list-Product")) : []
    
    var li = document.createElement("li") 
   

    listProduct.map(function(value,index){

        li.innerHTML = `
        <li class="productsBought-item">                                           
        <div class="productsBought-item__container1">
            <div class="productsBought-item__wrapImg">
                <img src="${value.linkImg}" alt="" class="productsBought-item__img">
            </div>

            <div class="productsBought-item__wrapbody">
                <div class="productsBought-item__wrapbody1">
                    <div class="productsBought-item__contentandPrice">
                        <span class="productsBought-item__nameproduct">${value.name}</span>
                        <div class="productsBought-item__pricefake">
                            <span>Giá: </span> <span class="productsBought-item__numberPrice">${value.price} </span> <span class="productsBought-item__VND">VND</span>
                        </div>
                    </div>

                    <div class="productsBought-item__onlyPrice">
                        <span class="productsBought-item__onlyPrice__numberPrice">${value.price} </span> <span class="productsBought-item__onlyPrice__VND">VND</span>
                    </div>
                </div>

                <div class="productsBought-item__wrapbody2">
                    <div class="gallery-intro__body__controlquantity">
                        <div onclick = "downQuantity()" class="controlquantity-subtrack productboght">
                            <i class="fa-solid fa-minus"></i>
                        </div>

                            <input class="controlquantity-input productboghtInput" value="1" type="text">

                        <div class="controlquantity-plus productboght">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="productsBought-item__control">
                        <button class="btn-boughtProduct">Mua</button>
                        <button class="btn-deleteProduct">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
            </li> 
        `
        

    })

    
    li.querySelector(".btn-deleteProduct").addEventListener("click",function(){
        li.remove()

        if(countProduct.innerText == 0){
            document.querySelector(".count-product").style.display = "none"
        }
        else{
            countProduct.innerText--;
        }

        localStorage.setItem("list-Product",JSON.stringify(listProduct))
       
    })

    document.querySelector(".productsBought-list").appendChild(li)
    
    localStorage.setItem("list-Product",JSON.stringify(listProduct))

 }
 



// Video - review

var ProductsBoxVideo = document.querySelectorAll(".Products-box")
var modelVideo = document.querySelector(".model-video")
var closeVideo = document.querySelector(".model-video__icon")
var modelVideoBox = document.querySelectorAll(".model-video__boxx")
var modelVideoBoxTempt = document.querySelector(".model-video__box")
var t = 0;
ProductsBoxVideo.forEach(function(item,index){
    item.addEventListener("click",function(){
        t = index
        console.log(t)
        modelVideoBoxTempt.src = modelVideoBox[t].src
        modelVideo.style.display = "block";
        

    })
})

closeVideo.addEventListener("click",function(){
    modelVideo.style.display = "none";
})

//MEW MALL & Thương Hiệu 

var Productsimgitem1 = document.querySelector(".Products-imgitem1")
var Productsimgitem2 = document.querySelector(".Products-imgitem2")

setInterval(function(){
    Productsimgitem2.style.display = "none"
    Productsimgitem1.style.display = "block"
},4000)


setInterval(function(){
    Productsimgitem2.style.display = "block"
    Productsimgitem1.style.display = "none"
},5000)

//Close, Open navMobileTablet
var navMobileTabletItemCart = document.querySelector(".nav-mobileTablet-item--cart") 
var navMobileTabletItemUser = document.querySelector(".nav-mobileTablet-item--user")

navMobileTabletItemCart.addEventListener("click",function(){
    document.querySelector(".productsBought-list").classList.toggle("active")
})
navMobileTabletItemUser.addEventListener("click",function(){
    modelLogin.style.display = "block"
})
document.querySelector(".nav-mobileTablet--contact").addEventListener("click",function(){
    document.querySelector(".nav-mobileTablet-subcontact").classList.toggle("active")
})
document.querySelector(".nav-mobileTablet-item--category").addEventListener("click",function(){
    document.querySelector(".model-categoryMoblieTablet").classList.toggle("tranformX0")
})


//Tabs mobile
var leftCategoryMobileTablets = document.querySelectorAll(".model-categoryMoblieTablet-left__demo__item")
var rightCategoryContents = document.querySelectorAll(".model-categoryMoblieTablet-right-item")

leftCategoryMobileTablets.forEach(function(item,index){
    const indexCategory = rightCategoryContents[index]
    item.addEventListener("click",function(){

        document.querySelector(".model-categoryMoblieTablet-right-item.active").classList.remove("active")

        indexCategory.classList.add("active")
    })
})



//  renderProduct()



// console.log(document.querySelectorAll(".gallery-intro__body__controlquantity"))


// var listplus =  document.querySelectorAll(".controlquantity-plus.productboght")
// console.log(listplus)

// .forEach(function(item,index){
//     item.addEventListener("click",function(){
//         console.log(item)
//     })
// })



// function upQuantity(){
//     // document.querySelector(".productboghtInput").innerText = document.querySelector(".productboghtInput").value++;
//     for(var i =0 ; i< document.querySelectorAll(".productboghtInput").length;i++){
//         document.querySelectorAll(".productboghtInput")[i].innerText = document.querySelectorAll(".productboghtInput")[i].value++;
//     }

// }






// TEST


// function addNew(){
//     var namegallery = document.querySelector(".gallery-title").innerText
//     var priceGallery = document.querySelector(".gallery-intro__body__price__now").innerText

//     let listStudent = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : []

//     listStudent.push({
//         name : namegallery,
//         price : priceGallery
//     })

//     localStorage.setItem("list-product",JSON.stringify(listStudent))

//     renderStudent()
// }

// function renderStudent(){
//     let listStudent = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : []

//     let product = `<tr>
//     <th>ID</th>
//     <th>Name</th>
//     <th>PRICE</th>
//     </tr>`

//     listStudent.map(function(value,index){
//         product+=`<tbody>
//         <td>${index +1}</td>
//         <td>${value.name}</td>
//         <td>${value.price}</td>
//         </tbody>`
//     })

//     document.querySelector(".tableContent").innerHTML = product;
// }