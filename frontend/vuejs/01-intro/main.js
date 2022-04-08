const app = {

    data() {
        return {
            message: 'Hello world !',
            nombre: 0,
            prenom: '',
            movies: []
        }
    },

    async mounted() {

        setInterval(() => {
            this.nombre++;
        }, 1000);

        let response = await fetch('https://api.devoldere.net/dataset/movies.json');
        this.movies = await response.json();      
        
        setTimeout(() => {
            this.movies.shift();
            this.movies[0].movie_title = "Toto chez les DWWM, le retour !";
        }, 5000);
    },

    methods: {
        reinitialiser() {
            this.nombre = 0;
            alert(this.prenom);
        }
    }

} // fin de app


Vue.createApp(app).mount('#toto');