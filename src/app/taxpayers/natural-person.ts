import { Owner } from './owner';

export class NaturalPerson implements Owner {
    id: number;
    code: string;
    name: string;
    otherNames: string;
    surname: string;
    otherSurnames: string;
    dui: string;
    nit: string;
    birthdate: string;

    getName() {
        return this.name + " " + this.surname;
    }
}