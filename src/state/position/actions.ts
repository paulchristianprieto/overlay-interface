import { createAction } from '@reduxjs/toolkit';
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';

export enum PositionSide { 
  LONG = 'LONG',
  SHORT = 'SHORT',
}

export const amountInput = createAction<{ inputValue: string | undefined }>('positions/amountInput');
export const leverageInput = createAction<{ leverageValue: number }>('positions/leverageInput');
export const positionSideInput = createAction<{ positionSide: PositionSide}>('positions/positionSideInput');
export const slippageInput = createAction<{ slippageValue: string | undefined }>('positions/slippageInput');
export const txnDeadlineInput = createAction<{ txnDeadline: string | undefined }>('positions/txnDeadlineInput');