import { Token } from './token';
import { Determinant } from './determinant';

export interface Rate {
    validUntil: string;
    tokens: Token[];
    formula: string;
    determinants: Determinant[];
}