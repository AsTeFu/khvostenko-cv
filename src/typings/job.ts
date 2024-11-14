export class Job {
  public title: string;
  public companyName: string;
  public date: string;
  public workExperience: string;
  public description: string[];

  constructor(data: {
    title: string; 
    companyName: string;
    description: string[]; 
    date: string; 
    workExperience: string; 
  }) {
    this.title = data.title;
    this.companyName = data.companyName;
    this.description = data.description;
    this.date = data.date;
    this.workExperience = data.workExperience;
  }
}