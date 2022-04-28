import { Db } from "./Db.js";

const appVote = {

    data() {
        return {
           db: new Db(),
           activeTab : 'list', // ou vote ou results
           listVotes : [],
           totalVotes: 0
        }
    },

    async mounted() {
        this.db.fetch();
        this.totalVotes = localStorage.getItem('totalVotes')

    },

    computed: {
        candidates() {
            return this.db.applicants.sort((a, b) => 0.5 - Math.random());
        },
        candidatesSorted() {
            return this.db.applicants.sort((a, b) => b.votes - a.votes)
        },
        totalVoters() {
            return this.totalVotes / this.db.applicants.length;
        }
        /*totalVotesYes() {
            return this.db.applicants.reduce((acc, applicant) => acc + applicant.votes, 0)
        }*/
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
                localStorage.setItem(id, applicant.votes)
            }

            console.log(applicant);

            this.listVotes.push(parseInt(id));

            console.log(this.listVotes);

            if(this.listVotes.length === this.db.applicants.length) {
                this.activeTab = 'results';
                this.reloadWindow()
            }

            this.totalVotes++;

            localStorage.setItem('totalVotes', this.totalVotes)
        },

        reloadWindow() {
            setTimeout(() => {
                window.location.reload()
            }, 5000)
        }

       
    }

} // fin de app


Vue.createApp(appVote).mount('#app');