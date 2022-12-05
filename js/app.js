(function(){
    function $(selector){
        return document.querySelector(selector)
    }
    function Carrito(){
        this.catalogo = [{id:'P01',nombre:'The Main',precio:10900,imagen:'img/the-mind1.jpg',html:'/TheMind.html'},
                        {id:'P02',nombre:'Display Sobres Pokemon',precio:172440,imagen:'img/display-sobres-pokemon-espada-y-escudo-tempestad-plateada.jpg',html:'/Display.html'},
                        {id:'P03',nombre:'Dixit Daydreams',precio:19990,imagen:'img/dixit-daydreams.jpg',html:'/Dixit-daydreams.html'},
                        {id:'P04',nombre:'Exit El museo misterioso',precio:10900,imagen:'img/exit-el-museo-misterioso.jpg',html:'/TheMind.html'},
                        {id:'P05',nombre:'Exploding Kittens',precio:19990,imagen:'img/exploding-kittens-base-en-espanol.jpg',html:'/Display.html'},
                        {id:'P06',nombre:'Stella Dixit Universe',precio:34990,imagen:'img/stella-dixit-universe.jpg',html:'/Dixit-daydreams.html'},
                        {id:'P07',nombre:'The Island',precio:29990,imagen:'img/the-island.jpg',html:'/TheMind.html'},
                        {id:'P08',nombre:'Throw Throw Burrito',precio:24990,imagen:'img/throw-throw-burrito-edicion-extrema-.jpg',html:'/Display.html'},
                        {id:'P09',nombre:'Azul: Jardín de la Reina',precio:44990,imagen:'img/azul-jardin-de-la-reina.jpg',html:'/Dixit-daydreams.html'},]

        this.constructor = function(){
            if(!localStorage.getItem("carrito")){
                localStorage.setItem('carrito', '[]');
            }
        }
        this.getCarrito = JSON.parse(localStorage.getItem("carrito"));
        this.agregarItem = function (item){
            for (i of this.catalogo) {
                if(i.id=== item){
                    var registro = i
                }
            }
            if(!registro){
                return
            }
            for (i of this.getCarrito){
                if(i.id === item){
                    i.cantidad ++;
                    console.log(this.getCarrito);
                    localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
                    return
                }
            }
            registro.cantidad = 1 
            this.getCarrito.push(registro);
            console.log(this.getCarrito);
            localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
        }
        this.getTotal = function(){
           var total = 0; 
            for(i of this.getCarrito){
                total += parseFloat(i.cantidad) * parseFloat(i.precio);
            } 
            return total;
        }
        this.eliminarItem = function(item){
            for (var i in this.getCarrito) {
                if(this.getCarrito[i].id === item){
                    this.getCarrito.splice(i,1);
                }
            }
            localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
        }
    }

    function Carrito_View(){
        this.renderCatalogo = function(){
            var template = ``;
            for (var i in carrito.catalogo) {
                template += `
                <div class="col-md Presentacion ">
                        <div class="p-3">
                            <a href="#" class="Ajuego">
                                <div class="card p-3 mt-1 -100" style="width:250px">
                                    <img class="card-img-top" src="${carrito.catalogo[i].imagen}" alt="Card image" style="width:100%">
                                    <div class="centrar align-item">
                                    <div class="card-body">
                                        <h4 class="card-title">${carrito.catalogo[i].nombre}</h4>
                                        <p class="card-text">$ ${carrito.catalogo[i].precio}</p>
                                        <a href="#" role="button" class="btn btn-outline-green btn-success btn-add-cart" px-5 id="addItem" data-producto="${carrito.catalogo[i].id}" >Añadir al carrito</a>   
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
        this.renderCarrito = function(){
            template =``;
            for(i of carrito.getCarrito){
                template += `
                 <tr>
                <td> <img src="${[i.imagen]}" class="img-fluid img-thumbnail" alt="Sheep" width="70"> </td>
                <td>${[i.nombre]}</td>
                <td>${[i.cantidad]} x</td>
                <td>$${[i.precio]}</td>
                <td><strong>$${i.cantidad * i.precio}</strong></td>
                <td><a class="btn btn-danger" href="#" role="button" id="deleteProducto" data-producto="${i.id}"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg></a></td>
              </tr>
              `;
            }
            $("#productosCarrito").innerHTML = template;
            $("#totalProductos").innerHTML = "$"+carrito.getTotal();
        }
    }
        var carrito = new Carrito ();
        var carrito_view = new Carrito_View();

        document.addEventListener('DOMContentLoaded', function(){
            carrito_view.renderCatalogo();
            carrito_view.renderCarrito();
            carrito_view.renderCarrito()
            carrito.constructor();
            console.log(carrito.getCarrito);
            console.log(carrito.getTotal());
        });

        $("#catalogo").addEventListener("click",function(ev){
            ev.preventDefault();
            if(ev.target.id === "addItem"){
                var id = ev.target.dataset.producto;
                carrito.agregarItem(id)
            }
        });

        $("#btn_carrito").addEventListener("click", function(){
            carrito_view.renderCarrito();
        });

        $("#productosCarrito").addEventListener('click',function(ev){
            if(ev.target.id === 'deleteProducto'){
                carrito.eliminarItem(ev.target.dataset.producto);
                carrito_view.renderCarrito();
            }
        })
})();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}