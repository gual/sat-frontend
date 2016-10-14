import { Token } from './token';

export interface TaxableIncome {
    name: string;
    description: string;
    tokens: Token[];
    formula: string;    
}