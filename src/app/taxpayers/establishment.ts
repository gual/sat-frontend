import { Owner } from './owner';
import { Company } from './company';

export interface Establishment {
    code: string;
    name: string;
    activity: string;
    owner: Company;
    address: string;
}