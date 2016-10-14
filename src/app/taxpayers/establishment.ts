import { Owner } from './owner';

export interface Establishment {
    code: string;
    name: string;
    activity: string;
    owner: Owner;
    address: string;
}