import { Type } from '@angular/core';
import { Action } from '@app/sdk';
import { PreviewNodeAction, RouterNavigateAction } from './actions';

export const appActions: Type<Action>[] = [PreviewNodeAction, RouterNavigateAction];
