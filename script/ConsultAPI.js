
let pageNumber = 0;

function Get(){

    pageNumber++;

    fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=' + pageNumber,{
        method: 'GET'
    })

    .then(responde => responde.json())
    .then(function(json){

        var container = document.querySelector('.container');
        console.log(json);

        json.products.map(function(products){
            container.innerHTML += `
            <div class="card">
                <div class="image"> 
                <img src="https:` + products.image + `"> 
                </div>
                <br>
                <div class="info">
                <span> `+ products.name +` </span><br>
                <span> `+ products.description +` </span><br>
                <span> De: R$`+ products.oldPrice +`,99</span>
                <strong> Por: R$ `+ products.price +`,99 </strong><br>

                <input class="btn-buy" type="button" value="Comprar"/>
                </div>
            </div>
            `;

        });

    });
}

Get();

function sendEmail(){
    document.querySelector("form").addEventListener("submit", event => {
        console.log("Enviou");
    });
}

function CustomValidation(event){
    const field = event.target;

    function verifyErrors(){
        let foundError = false;

        for(const error in field.validity){
            if(error != "customError" && field.validity[error]){
                foundError = error;
            }
        }

        return foundError;
    }

    const error = verifyErrors();

    if(error){
        field.setCustomValidity("Campo Obrigatório");
    } else {
        field.setCustomValidity("");
    }
}

function validadeFields(){
    const fields = document.querySelectorAll("[required]");

    for (field of fields){
        field.addEventListener("invalid", CustomValidation);
    }
}


    
