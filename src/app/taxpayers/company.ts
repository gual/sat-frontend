import { NaturalPerson } from './natural-person';
import { Owner } from './owner';

export class Company {
    id?: number;
    code?: string;
    socialReason: string;
    nit: string;
    startDate?: string;
    legalRepresentative?: NaturalPerson;

    // getName () {
    //     return this.socialReason
    // }

    // setName(name: string) {
    //     this.socialReason = name;
    // }
}