//Se carga barra nav
const cargaNav = async() => {
	try {

    const request = await fetch(`http://localhost:3000/api/items`);
	
    if (request.status >= 200 && request.status < 400) {

      const data = await request.json();

      const contenedorNav = document.getElementById('categorie-container');
      contenedorNav.setAttribute('class', 'container-navBar');

      const contListNav = document.createElement('div');

      const ulNav = document.createElement('ul');
      ulNav.setAttribute('class', 'nav-list-style');
      ulNav.setAttribute('id', 'nav-list');
      
      for (let i = 0; i < data.categories.length; i++) {

        const liNav = document.createElement('li');
        liNav.setAttribute('class', 'categorie-list');

        const enlaceNav = document.createElement('a');
        enlaceNav.setAttribute('id', 'categorie');
        enlaceNav.innerHTML= data.categories[i].name;

        contenedorNav.appendChild(contListNav);
        contListNav.appendChild(ulNav);
        ulNav.appendChild(liNav);
        liNav.appendChild(enlaceNav);

        if(i == data.categories.length-1){
          enlaceNav.setAttribute('class', 'active');
        } else{
          const imgNav = document.createElement('img');
          imgNav.setAttribute('class', 'img-nav');
          imgNav.src="img/arrow.png";

          liNav.appendChild(imgNav);
        }
      }

    } else {

      const contenedorNav = document.getElementById('categorie-container');
      const mensajeError = document.createElement('div');

      mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

      contenedorNav.appendChild(mensajeError);
    }
  } catch(error){
    console.log(error);
  }
}

//Presenta el resultado de la busqueda
const buscaProducto = async() => {
	try {

    const request = await fetch(`http://localhost:3000/api/items`);

    if (request.status >= 200 && request.status < 400) {

      const data = await request.json();

      const contenedorSearch = document.getElementById('container-result');
      contenedorSearch.setAttribute('class', 'search-result-container');

      const contListSearch = document.createElement('div');

      const ulSearch = document.createElement('div');
      ulSearch.setAttribute('class', 'result-list-style');

      const liSearch = document.createElement('div');
      liSearch.setAttribute('class', 'li-result-list');

      for (let i = 0; i < data.item.length; i++) {
        const contentResult = document.createElement('div');

        const sectionImgProduct = document.createElement('div');
        sectionImgProduct.setAttribute('class', 'div-result-list'); 

        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('class', 'img-search-result');
        imgProduct.src="img/apleIpod_"+[i]+".png";

        const contentPrice = document.createElement('div');
        contentPrice.setAttribute('class', 'section-title-product'); 

        const sectionPrice = document.createElement('div');
        sectionPrice.setAttribute('class', 'section-title-product');

        const price = document.createElement('p');
        price.setAttribute('class', 'description-search');
        price.innerHTML= data.item[i].price.amount;

        const sectionShipping = document.createElement('div');
        sectionShipping.setAttribute('class', 'div-result-list');

        const imgShipping = document.createElement('img');
        imgShipping.setAttribute('class', 'img-shipping');
        if(data.item[i].free_shipping == true){
          imgShipping.src="img/shipping.png";
        }
        
        const sectionTitleProduct = document.createElement('div');
        sectionTitleProduct.setAttribute('class', 'div-result-list');

        const linkProduct = document.createElement('a');
        linkProduct.setAttribute('class', 'description-search');
        linkProduct.innerHTML= data.item[i].title;
        linkProduct.onclick = detailProduct;

        const sectionCountryOrigin = document.createElement('div');
        sectionTitleProduct.setAttribute('class', 'div-result-list');

        const countryOrigin = document.createElement('p');
        countryOrigin.setAttribute('class', 'description-search-city');
        countryOrigin.innerHTML = "Capital Federal";

        contenedorSearch.appendChild(contListSearch);
        contListSearch.appendChild(ulSearch);
        ulSearch.appendChild(liSearch);
        liSearch.appendChild(contentResult);

        contentResult.appendChild(sectionImgProduct);
        contentResult.appendChild(imgProduct);
        contentResult.appendChild(contentPrice);

        contentPrice.appendChild(sectionPrice);
        contentPrice.appendChild(price);
        contentPrice.appendChild(sectionShipping);
        contentPrice.appendChild(imgShipping);
        contentPrice.appendChild(sectionTitleProduct);
        contentPrice.appendChild(linkProduct);

        contentResult.appendChild(sectionCountryOrigin);
        contentResult.appendChild(countryOrigin);
      }
    } else {

      const contenedorSearch = document.getElementById('container-result');
      const mensajeError = document.createElement('div');

      mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

      contenedorSearch.appendChild(mensajeError);
    }
  } catch(error){
    console.log(error);
  }
}

const detalleProducto = async() => {
	try {

    const request = await fetch(`http://localhost:3000/api/items`);
	
    if (request.status >= 200 && request.status < 400) {

      const data = await request.json();

      const contenedorDetalle = document.getElementById('container-detail-product');
      contenedorDetalle.setAttribute('class', 'container-detail');

      const contentDetail = document.createElement('div');

      const contImgdetail = document.createElement('div');

      const sectionImgdetail = document.createElement('div');
      
      const imgdetail = document.createElement('img');
      imgdetail.setAttribute('class', 'detail-img');
      imgdetail.src="img/apleIpod_3_detail.png";

      const contDetailProduct = document.createElement('div');
      contDetailProduct.setAttribute('class', 'detail-product');

      const sectionStatusProduct = document.createElement('div');
     
      const statusProduct = document.createElement('p');
      statusProduct.setAttribute('class', 'status-product');
      statusProduct.innerHTML = data.item[3].condition + " - " + data.item[3].sold_quantify + " vendidos";

      const sectionNameProduct = document.createElement('div');

      const nameProduct = document.createElement('p');
      nameProduct.setAttribute('class', 'name-product');
      nameProduct.innerHTML = data.item[3].title;

      const contPriceProduct = document.createElement('div');
      contPriceProduct.setAttribute('class', 'price-container');

      const sectionPriceProduct = document.createElement('div');

      const priceProduct = document.createElement('p');
      priceProduct.setAttribute('class', 'price-product');
      priceProduct.innerHTML = data.item[3].price.amount;

      const priceCents = document.createElement('p');
      priceCents.setAttribute('class', 'price-cents');
      priceCents.innerHTML = data.item[3].price.decimals;

      const contButtonBuy = document.createElement('div');

      const buttonBuy = document.createElement('button');
      buttonBuy.setAttribute('class', 'btn-buy');
      buttonBuy.innerHTML = "Comprar";

      const contTitleProduct = document.createElement('div');

      const sectionTitleProduct = document.createElement('div');

      const titleProduct = document.createElement('p');
      titleProduct.setAttribute('class', 'title-product');
      titleProduct.innerHTML = "Descripción del Producto";

      const sectionDescriptionProduct = document.createElement('div');

      const descriptionProduct = document.createElement('p');
      descriptionProduct.setAttribute('class', 'detail-product-text');
      descriptionProduct.innerHTML = data.item[3].description;

      contenedorDetalle.appendChild(contentDetail);

      contentDetail.appendChild(contImgdetail);

      //contImgdetail.appendChild(contentDetail);
      contentDetail.appendChild(sectionImgdetail);
      sectionImgdetail.appendChild(imgdetail);
      
      contentDetail.appendChild(contDetailProduct);
      contDetailProduct.appendChild(sectionStatusProduct);
      sectionStatusProduct.appendChild(statusProduct);

      contDetailProduct.appendChild(sectionNameProduct);
      sectionNameProduct.appendChild(nameProduct);

      contDetailProduct.appendChild(contPriceProduct);
      contPriceProduct.appendChild(sectionPriceProduct);
      sectionPriceProduct.appendChild(priceProduct);
      sectionPriceProduct.appendChild(priceCents);
      contPriceProduct.appendChild(contButtonBuy);
      contButtonBuy.appendChild(buttonBuy);

      contentDetail.appendChild(contTitleProduct);
      contTitleProduct.appendChild(sectionTitleProduct);
      sectionTitleProduct.appendChild(titleProduct);
      
      contentDetail.appendChild(sectionDescriptionProduct);
      sectionDescriptionProduct.appendChild(descriptionProduct);

    } else {

      const contenedorDetalle = document.getElementById('categorie-container');
      const mensajeError = document.createElement('div');

      mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

      contenedorDetalle.appendChild(mensajeError);
    }
  } catch(error){
    console.log(error);
  }
}

cargaNav();
buscaProducto();
detalleProducto();

//Muestra la lista de productos
function openProducts() {
  document.getElementById("container-result").style.visibility = "visible";
  document.getElementById("container-detail-product").style.visibility = "hidden";
}

//Muestra el detalle de un producto
function detailProduct() {  
  document.getElementById("container-result").style.visibility = "hidden";
  document.getElementById("container-detail-product").style.visibility = "visible";
}