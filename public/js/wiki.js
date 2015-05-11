
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
        var text = new String(area.value); //variable de tipo string, nos interesa objeto ??
        //alert(text);
        console.log(text);

        var sections = splitSections(text, "===");


        //Metodo que convertirá el textarea y compara los simbolos de la sintaxis de la wiki para formatear la vista de la wiki.
        function splitSections(string, caracter){
            var arraySections = new Array();
            var count = 0;
            var lastCount;

            //Recorro el string para detectar las secciones
            for (var i = 0; i< string.length; i++) {

                var t = i + 2;
                //creo un objeto por cada section y los atributos id, numero de inicio y el fin de la misma.
                if(string[i] == "=" && string[i++] == "=" && string[t] == "="){
                    lastCount = count;
                    console.log(lastCount);
                    count = count+1;
                    arraySections["section"+count] = {};
                    arraySections["section"+count].id = count;
                    arraySections["section"+count].inicio = i;

                    //Si he detectado otra seccion, como no es la ultima le establezco el fin de la anterior
                    if(count > 1){
                        arraySections["section"+lastCount].fin = i -1;
                    }
                }
            }

            // Y cuando salgo del for le agrego al ultimo objeto su fin que sera el fin del String
            arraySections["section"+count ].fin = string.length;

            //Extraigo los titulos y guardo los strings de cada section e su objeto
            for (var i = 0; i < arraySections.length; i++){

            }


            console.log(arraySections);
            //var strings = string.split(caracter);
            return arraySections;
        };

        //console.log(sections);

       // return el return ha de llamar a convertirTextarea para guardarla en formato convertido
       return sections;
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
