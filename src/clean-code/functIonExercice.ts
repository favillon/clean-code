(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }

    interface Movie{
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({title, description, rating, cast} : Movie) {
        console.log({ title, description, rating, cast });
    }


    function someProcess() {
        const fullName ='Paco Villegas'
        validateFullName(fullName) ?  createActor(fullName, new Date('10/10/1990')) : false
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        /*
         * Creacion usuario
        */

        console.log('Crear actor' ,fullName,  birthdate);
        return true;

    }

    function validateFullName(fullName:string) {
        return ( fullName === 'fernando' ) ? false : true;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

        if ( isDead ) {
            return 1500;
        }

        if ( isSeparated ) {
            return 2500;
        }
       return  ( isRetired ) ? 3000 : 4000;
    }

})();
