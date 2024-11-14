export class Education {
  public title: string;
  public date: string;
  public place: string;
  public description: string;

  constructor(data: {
    title: string;
    date: string;
    place: string;
    description: string;
  }) {
    this.title = data.title;
    this.date = data.date;
    this.place = data.place;
    this.description = data.description;
  }
}
