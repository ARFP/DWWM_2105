import { Db } from "./Db.js";

const appVote = {

    data() {
        return {
           db: new Db(),
           activeTab : 'list' // ou vote ou results
        }
    },

    async mounted() {
        this.db.fetch();
    },

    computed: {

    },

    methods: {
        getPhotoUrl(id) {
            return './candidats/' + id + '.jpg';
        },

        changeTab(event) {
            console.log(event.target.dataset);
            this.activeTab = event.target.dataset.tab;
        }
    }

} // fin de app


Vue.createApp(appVote).mount('#app');