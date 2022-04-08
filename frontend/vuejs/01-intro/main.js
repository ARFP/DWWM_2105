const app = {

    data() {
        return {
            message: 'Hello world !',
            nombre: 0
        }
    },

    mounted() {
        setInterval(() => {
            this.nombre++;
        }, 1000);
    }

}

Vue.createApp(app).mount('#toto');