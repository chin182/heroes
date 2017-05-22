/*export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string //? bedeutet Feld ist optional
  ) { }
}*/

export class Hero {
  id: number;
  name: string;
  isSecret = false;
}
