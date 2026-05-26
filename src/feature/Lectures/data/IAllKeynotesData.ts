export interface AllKeynotesData {
    speaker : {
        id: string;
        name: string;
        bio: string;
        photoUrl: string;
        pronouns: string;
        linkedIn?: string;
        github?: string;
        lecture: {
            title: string;
            description: string;
            topics: string[];
            infos: {
                typeOfLecture: string;
                category: string;
                nivel: string;
                experienceOnOpenSource: string;
                language: string;
            };
        };
    };
};