
//Defino funcion constructora wikiController para crear objeto y seleccionar los elementos
function WikiController(tapiz, guardar, editar){

    this.tapiz = document.getElementById(tapiz);

    this.guardar = document.getElementById(guardar);

    this.editar = document.getElementById(editar);

}

//Defino funcion constructora Wiki para crear ojetos de su subtipo
//@id id de la wiki.
//@styles estilos de la wiki
//@sitax sintasis de la wiki
function Wiki(id, styles, sintax){

    this.id = id;

    this.styles = {
        'width': '100%',
        'height': '400px',
        'border': '1px solid blue'
    };

    //Array con sintaxis de la Wiki para comparar con los strings recogidos del textarea
    this.sintax = [
        sections = "=",
        articles = "-",
        divs     = "#",
        back     = "*",
        linksInit = "[",
        linksFin = "]",
        linksToInit  = "(",
        linksToFin   = ""
    ];

    //metodo de insertar textarea en el tapiz para el modo edicion.
    //@id identificador de la wiki a editar (ya lo tenemos al crear el objeto).
    this.insertarTextarea = function(id){
        var textarea = document.createElement("textarea");
        textarea.id = "area1";
        //aplicarEstilos(textarea, estilos);
        tapiz.appendChild(textarea);

        // return ...el return ha de colocar el cursor en el textarea directamente e incluir en el textarea el contenido guardado.
    };

    //Metodo para recoger datos de la wiki
    //@id identificador de la wiki de la que hay que recoger los datos.
    this.recogerWiki = function(id){};

    //Metodo de guardar en JSON las cadenas de texto recogidas en el textarea.
    //@id identificador a guardar (ya lo tenemos al crear el objeto)
    this.guardarTextarea = function(id){
       var area = document.getElementById('area1');
       console.log(area);
       //var areaText = area.nodeValue; //da element input no el nodo de texto.
       //var childrenTextarea = area.childNodes; //da 0 nodos hijos??
       var text = area.value; //variable de tipo string, nos interesa objeto ??
       alert(typeof text);

       // return el return ha de llamar a convertirTextarea para guardarla en formato convertido

    };


    //Metodo que convertirá el textarea y compara los simbolos de la sintaxis de la wiki para formatear la vista de la wiki.
    this.convertirTextarea = function(id){

       //Trabajar los strings con la sintaxis para formatear el contenido.
       // Otra funcion u objeto??
       for (var i = 0; i < text.length; i++) {
           igual = 0;
           if(text[i] == "="){
               igual = igual+1;
           }
       }
    };

    //Metodo que aplica una lista de estilos a un elemento.
    //@element elemento a aplicar los estilos
    //@listaEstilos estilos a aplicar al elemento.
    this.aplicarEstilos = function (elemento, listaEstilos){
        for (var estilo in listaEstilos ){
            elemento.style[estilo] = listaEstilos[estilo];
        }
    };

};

function crearObjWiki(id){
    //TODO:consultar previamente el id correspondiente
    var wiki = new Wiki(id);
    return wiki;

};

var wikiCtl = new WikiController("tapiz", "guardar", "editar" );
var wiki = new Wiki(1, {}, []);

//window.onload = ;
editar.onclick = wiki.insertarTextarea;
guardar.onclick = wiki.guardarTextarea;
