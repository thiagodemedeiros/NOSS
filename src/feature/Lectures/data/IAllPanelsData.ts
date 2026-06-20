export interface AllPanelsData {
    title: string;
    typeOfActivity: string;
    category: string;
    nivel: string;
    experienceOnOpenSource: string;
    language: string;
    facilitatingPerson: [
        {
            name: string;
            bio: string;
            photoUrl: string;
            pronouns: string;
            linkedIn?: string;
            github?: string;
        },
    ];
    participatingPeople: [
        {
            name: string;
            bio: string;
            photoUrl: string;
            pronouns: string;
            linkedIn?: string;
            github?: string;
        },
    ];
};