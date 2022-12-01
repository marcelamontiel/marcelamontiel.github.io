

(function(){
    function $(selector){
        return document.querySelector(selector)
    }
    function Carrito(){
        this.catalogo = [{id:'P01',nombre:'The Main',precio:'$'+10900,imagen:'img/the-mind1.jpg',html:'TheMind.html'},
                        {id:'P02',nombre:'Display Sobres Pokemon',precio:'$'+172440,imagen:'img/display-sobres-pokemon-espada-y-escudo-tempestad-plateada.jpg',html:'TheMind.html'},
                        {id:'P03',nombre:'Dixit Daydreams',precio:'$'+19990,imagen:'img/dixit-daydreams.jpg',html:'Dixit-daydreams.html'},
                        {id:'P04',nombre:'Exit El museo misterioso',precio:'$'+10900,imagen:'img/exit-el-museo-misterioso.jpg',html:'/Dixit-daydreams.html'},
                        {id:'P05',nombre:'Exploding Kittens',precio:'$'+19990,imagen:'img/exploding-kittens-base-en-espanol.jpg',html:'TheMind.html'},
                        {id:'P06',nombre:'Stella Dixit Universe',precio:'$'+34990,imagen:'img/stella-dixit-universe.jpg',html:'TheMind.html'},
                        {id:'P07',nombre:'The Island',precio:'$'+29990,imagen:'img/the-island.jpg',html:'TheMind.html'},
                        {id:'P08',nombre:'Throw Throw Burrito',precio:'$'+24990,imagen:'img/throw-throw-burrito-edicion-extrema-.jpg',html:'TheMind.html'},
                        {id:'P09',nombre:'Azul: Jardín de la Reina',precio:'$'+44990,imagen:'img/azul-jardin-de-la-reina.jpg',html:'TheMind.html'},]
    }
    function Carrito_View(){
        this.renderCatalogo = function(){
            var template = ``;
            for (var i in carrito.catalogo) {
                template += `
                <div class="col-md Presentacion ">
                        <div class="p-3">
                            <a href="${carrito.catalogo[i].html}" class="Ajuego">
                                <div class="card p-3 mt-1 -100" style="width:250px">
                                    <img class="card-img-top" src="${carrito.catalogo[i].imagen}" alt="Card image" style="width:100%">
                                    <div class="centrar align-item">
                                    <div class="card-body">
                                        <h4 class="card-title">${carrito.catalogo[i].nombre}</h4>
                                        <p class="card-text">${carrito.catalogo[i].precio}</p>
                                        <a href="#" role="button" class="btn btn-outline-green btn-success px-5 id="${carrito.catalogo[i].id}" data-toggle="modal" data-target="#cartModal">Añadir al carrito</a>   
                                    </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
    
                `;
            }
            $("#catalogo").innerHTML = template;   
        }
         this.showModal = function(ev){
             $("#modal").classList.toggle('is-active')         }
    }
    var carrito = new Carrito
    var carrito_view = new Carrito_View();

    document.addEventListener('DOMContentLoaded',function(){
       carrito_view.renderCatalogo();
    });
     $("#cartModal").addEventListener("click",function(ev){
         carrito_view.showModal(ev);
    })

})();



