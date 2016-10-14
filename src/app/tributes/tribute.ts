import { TaxableIncome } from './taxable-income';
import { Calculation } from './calculation';
import { DeclarationPaymentMode } from './declaration-payment-mode';
import { Determinant } from './determinant';

export interface Tribute {
    id: number;
    name: string;
    originLaw: string;
    taxableIncome: TaxableIncome;
    calculation: Calculation;
    declarationPaymentMode: DeclarationPaymentMode;
    determinants: Determinant[];
}