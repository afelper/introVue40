var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Intro VueJS grupo ',
        grupo: 40,
        tituloh1: 'claseh1',
        mainTitle: 'TituloPrincipal',
        cantidad: 10,
        visible: true,
        actividades: [
            { text: 'Aprender JavaScript', estado: true },
            { text: 'Aprender Vue', estado: true },
            { text: 'Construir algo increíble', estado: true }
          ], 
          textoBuscar: '',
          peliculas: []
    },
    methods: {
        
        async buscarApi(){

            try {
                let urlBuscar = `http://www.omdbapi.com/?apikey=eff4bcb0&t=${this.textoBuscar}&type=movie&plot=full`;
                const responseText = await fetch(urlBuscar, {method: 'GET'}); //info que llega  a la api| fecth promesa => await
                // console.log(responseText);
                const responseJson = await responseText.json();
                // console.log(responseJson);

                this.peliculas.push(responseJson);
                this.textoBuscar = '';
            } catch (error) {
                console.log(error);
            }

        },

         imprimir(){
             console.log(this.textoBuscar);
         }
    },
    computed: {

    },
    created(){

    }
});