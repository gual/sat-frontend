import { NaturalPerson } from './natural-person';
import { Owner } from './owner';

export class Company implements Owner {
    id: number;
    code: string;
    socialReason: string;
    nit: string;
    startDate: string;
    legalRepresentative: NaturalPerson;

    getName () {
        return this.socialReason
    }
}