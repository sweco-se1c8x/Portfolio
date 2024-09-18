export interface Project {
    id?: string;
    projectName: string;
    company: string;
    description: string;
    projectStartDate:string
    projectEndDate:string
    competencies:Competencies[]
    role:string;
}

export interface Competencies {
    competencyName:string
}