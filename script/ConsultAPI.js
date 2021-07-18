function Get(){
    fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1',{
        method: 'GET'
    })

    .then(responde => responde.json())
    .then(function(json){

        var container = document.querySelector('.container');
        console.log(json);

        json.products.map(function(products){
            container.innerHTML += `
                <span> `+ products.id +` </span><br>
                <strong> `+ products.name +` </strong><br>
                <span> `+ products.description +` </span><br>
                <div> <img src="https:` + products.image + `"> </div><br>
                <span> De: R$`+ products.oldPrice +` </span>
                <span> Por: R$ `+ products.price +` </span><br>
            `;

        });

    });
}
Get();

function showProduct(product){

}

function Main(){
    
}
