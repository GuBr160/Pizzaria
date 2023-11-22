const items = [
    {
        id: 0,
        nome: 'Pizza Vegana',
        img: 'img/veganPizza.jpg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Pizza Peperoni',
        img: 'img/pizzaPeperoni.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Pizza Queijo',
        img: 'img/chessepizza.jpg',
        quantidade: 0
    },

    {
        id: 3,
        nome: 'Pizza Tomate',
        img: 'img/PizzaTomate.jpg',
        quantidade: 0
    },

    {
        id: 4,
        nome: 'Pizza Palmito',
        img: 'img/pizzaPalmito.jpg',
        quantidade: 0
    },

    {
        id: 5,
        nome: 'Pizza Mista',
        img: 'img/pizzaMista.jpg',
        quantidade: 0
    },

    

    
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById ('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+=`

        <div class = "produto-single">
            <p>`+val.nome+` </p>
            <p> <img src="`+val.img+`" /> </p>
            <a key="`+val.id+`" href="#"> Adicionar ao carrinho! </a>
        </div>   
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById ('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if (val.quantidade > 0){
            containerCarrinho.innerHTML+=`
            <p>`+val.nome+` | quantidade: `+val.quantidade+` </p>
            <hr>
        `;
        }
    })
}

var links = document.getElementsByTagName ('a');

for (var i=0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        var key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}