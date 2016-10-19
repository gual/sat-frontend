import { DeclarationPaymentMode } from './declaration-payment-mode';
import { Determinant } from './determinant';
import { TaxableIncome } from './taxable-income';
import { Rate } from './rate';

export interface Tax {
    id: number;
    name: string;
    originLaw: string;
    taxableSubject: string;
    graceDays: number;
    taxableIncome: TaxableIncome;
    rate: Rate;
    declarationPaymentMode: DeclarationPaymentMode;
    determinants: Determinant[];
}