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
        },

        voteYes(event) {
            let id = event.target.dataset.id;

            let applicant = this.db.applicants.find(item => item.id == id);

            applicant.votes++;
        },

        voteNo(event) {
            let id = event.target.dataset.id;
            
        }
    }

} // fin de app


Vue.createApp(appVote).mount('#app');