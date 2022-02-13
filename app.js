let autos = require("./autos")

let persona = [
   {
      nombre: 'Juan',
      capacidadDePagoEnCuotas: 9000,
      capacidadDePagoTotal: 9000
   }
]

const concesionaria = {
   autos: autos,
   
   buscarAuto: function(patente){
      let aux = null
      for ( let i = 0; i<this.autos.length;i++){
         if(this.autos[i].patente === patente){
            aux = this.autos[i]
         }
      }
      return aux
   },
   
   venderAuto: function(patente){
      let aux = this.buscarAuto(patente)
      if(aux != null){
         aux.vendido=true
      }return aux
   },

   autosParaLaVenta: function(){
      let aux = this.autos.filter(function(elemento){
         return elemento.vendido == false
      })
      return aux
   },

   autosNuevos: function(){
      let autosParaLaVenta2 = this.autosParaLaVenta()
      let aux = autosParaLaVenta2.filter(function(elemento){
         return elemento.km < 100
      })
      return aux
   },

   listaDeVentas: function(){
      let aux = []
      for(let i = 0; i < this.autos.length; i++){
         if(this.autos[i].vendido != false){
            aux.push(this.autos[i].precio)
         }
      }
      return aux
   },

   totalDeVentas: function(){
      let totalDeVentas2 = this.listaDeVentas()
      let total = totalDeVentas2.reduce((aux, elemento) => aux + elemento, 0)
      return total
   },

   puedeComprar: function(auto, persona){
      if((persona.capacidadDePagoTotal > auto.precio) && (persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas))){
         return true
      }else{
         return false
      }
   },

   autosQuePuedeComprar: function(persona){
      let aux = this.autosParaLaVenta();
      let aux2 = [];
      for (let i = 0 ; i < aux.length; i++){
         if(this.puedeComprar(this.autos[i], persona) == true){
            aux2.push(aux[i]);
         }
      }
      return aux2
   } 
   
}

//console.log(concesionaria.autosQuePuedeComprar(persona));
console.log(concesionaria.buscarAuto("APL123"));
