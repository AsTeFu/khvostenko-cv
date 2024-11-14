export class Project {
  public title: string;
  public description: string[];
  public solutionType: string;
  public role: string;
  public workedOn: string[];


  constructor(data: {
    title: string; 
    description: string[]; 
    solutionType: string; 
    workedOn: string[]; 
    role: string
  }) {
    this.title = data.title;
    this.description = data.description;
    this.solutionType = data.solutionType;
    this.workedOn = data.workedOn;
    this.role = data.role;
  }
}