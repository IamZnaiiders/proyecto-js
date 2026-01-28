

 /**
     * Esta clase tiene 3 metodos.
     */

class libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = false; //Por defecto no esta prestado
    }
   
    prestar(){
        if(this.prestado===false){//si no esta prestado
            this.prestado=true;//lo cambiamos a verdadero
            console.log(`${this.titulo} ha sido prestado.`);
        } else
        {
            console.log("El libro ya esta prestado");
        }
    }

    devolver(){

        if(this.prestado===true){
            this.prestado=false;
            console.log(`${this.titulo} ha sido devuelto.`);
        }
        else{
            console.log(`${this.titulo} no estaba prestado.`)
        }
    }

    info(){

    }
}

const libro1 = new libro("El principe","Gabriel Garcia");
libro1.devolver();
libro1.prestar();
libro1.prestar();

