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
                <strong> `+ products.id +` </strong>
                <strong> `+ products.name +` </strong>
                <strong> `+ products.description +` </strong>
                <div> <img src="https:` + products.image + `"> </div>
                <strong> De: R$`+ products.oldPrice +` </strong>
                <strong> Por: R$ `+ products.price +` </strong><br>
            `;

        });

    });
}

function showProduct(product){

}

function Main(){
    
}

Get();