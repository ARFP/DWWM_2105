import { Db } from "./Db.js";

const appVote = {

    data() {
        return {
           db: new Db(),
           activeTab : 'list', // ou vote ou results
           listVotes : []
        }
    },

    async mounted() {
        this.db.fetch();
    },

    computed: {
        candidates() {
            return this.db.applicants.sort((a, b) => 0.5 - Math.random());
        }
    },

    methods: {
        getPhotoUrl(id) {
            return './candidats/' + id + '.jpg';
        },

        changeTab(event) {
            this.activeTab = event.target.dataset.tab;
        },

        vote(event){
            let id = event.target.dataset.id;
            let applicant = this.db.applicants.find(item => item.id == id);

            if(event.target.dataset.vote == "yes" ){
                applicant.votes++;
            }

            console.log(applicant);

            this.listVotes.push(parseInt(id));

            console.log(this.listVotes);

            if(this.listVotes.length === this.db.applicants.length) {
                this.activeTab = 'results';
            }
        }

       
    }

} // fin de app


Vue.createApp(appVote).mount('#app');