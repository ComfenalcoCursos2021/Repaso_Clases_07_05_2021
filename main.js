

class humano{
    static ejecutar = null;
    static historico = [];
    constructor({...arg}){
        this.nombre = arg.nombre;
        this.edad = arg.edad;
    }
    static getInst({...arg}){
        return (!(this.ejecutar instanceof Object))
                ? this.ejecutar = new humano(arg)
                : this.ejecutar.Accesos(arg);
    }
    Accesos({...arg}){
        let obj = []; 
 
        obj['Storage'] = [];
        obj.Storage.sessionStorage = [];
        obj.Storage.localStorage = [];
        for(let data in Object.assign({}, humano.ejecutar)){
            if(data!= 'ejecutar') obj[data] = eval(`humano.ejecutar.${data}`);
        }
   
        //Opcional
        for(let data in obj.Storage){
            switch (data) {
                case 'sessionStorage':
                    for(let i=0; i<sessionStorage.length; i++) {
                        let key = sessionStorage.key(i);
                        obj.Storage.sessionStorage[key] = sessionStorage.getItem(key);
                    }
                    break;
                case 'localStorage':
                    for(let i=0; i<localStorage.length; i++) {
                        let key = localStorage.key(i);
                        obj.Storage.localStorage[key] = localStorage.getItem(key);
                    }
                    break;
                default:

                    break;
            }
            
        }


        humano.historico.push(obj);
        console.log(humano.historico);
        humano.ejecutar = new humano(arg);
        return this.ejecutar;
    }
    set setNombre(p1){
        this.nombre = p1;
    }
    Saludar(){
        this.saludo = `Hola ${this.nombre} como estas`;
        return this.saludo;
    }
}

humano.getInst({nombre: "Miguel wf", edad: 23});
humano.ejecutar.Saludar();
humano.ejecutar.setNombre = "Miguel";
humano.getInst({});
// for(let data in sessionStorage){
//     if(data!='length' && data!='clear' && data!='clear'){
//         console.log(data);
//     }
// }
localStorage.setItem('Miguel',"aaaa"); 
sessionStorage.setItem('Hola',"bebeb");
