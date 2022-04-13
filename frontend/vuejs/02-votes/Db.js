/**
 * Class Db
 * Manipule le JSON des candidats
 */
class Db 
{    
    /**
     * Constructeur de la classe Db
     */
    constructor() {
        this.applicants = [];
    }

    async fetch() {
        let response = await fetch('./candidats/candidats.json');
        this.applicants = await response.json();

        for(let i = this.applicants.length-1; i >= 0; i--) {
            this.applicants[i].votes = 0;
        }

        console.log(this.applicants);

        return this.applicants;
    }

}

export { Db }
