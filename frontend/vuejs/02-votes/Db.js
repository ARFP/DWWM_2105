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
        return this.applicants;
    }

}

export { Db }
