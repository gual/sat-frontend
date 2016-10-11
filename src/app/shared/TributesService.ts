import { Tribute } from '../tributes/tribute';

let tributes: Tribute[] = [
        {name: "Tributo 1", law: "Ley 1", taxable: 300},
        {name: "Tributo 2", law: "Ley 2", taxable: 200}
    ];

export class TributesService{
  getAll() : Tribute[] {
    return tributes;
  }

  add(tribute: Tribute) {
      console.log("pushing");
      tributes.push(tribute);
  }
}
