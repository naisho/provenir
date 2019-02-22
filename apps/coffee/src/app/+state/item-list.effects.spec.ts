import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ItemListEffects } from './item-list.effects';
import { LoadItemList, ItemListLoaded } from './item-list.actions';

describe('ItemListEffects', () => {
    let actions: Observable<any>;
    let effects: ItemListEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NxModule.forRoot(),
                StoreModule.forRoot({}),
                EffectsModule.forRoot([])
            ],
            providers: [
                ItemListEffects,
                DataPersistence,
                provideMockActions(() => actions)
            ]
        });

        effects = TestBed.get(ItemListEffects);
    });

    describe('loadItemList$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: new LoadItemList() });
            expect(effects.loadItemList$).toBeObservable(
                hot('-a-|', { a: new ItemListLoaded([]) })
            );
        });
    });
});
