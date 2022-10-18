(() => {
    const filesToEvaluation = [
        { id: 1, flag: false },
        { id: 2, flag: false },
        { id: 3, flag: true },
        { id: 4, flag: false },
        { id: 5, flag: false },
        { id: 7, flag: true },
    ];
    const file = filesToEvaluation.map( file => file.flag );


    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
    const today = new Date();

    const dayPassed: number = 23;

    const fileInDirecotry = 33;

    const firstName = 'Fernando';

    const lastName = 'Herrera';

    const daysLastModifiction = 12;

    const maxNumberOfClassesPerStudent = 6;
})();