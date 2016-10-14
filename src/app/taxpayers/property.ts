import { Owner } from './owner';
import { Company } from './company';

export interface Property {
    code: string;
    owner: Company;
    address: string;
}