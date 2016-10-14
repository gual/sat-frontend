import { Owner } from './owner';

export interface Property {
    code: string;
    owner: Owner;
    address: string;
}