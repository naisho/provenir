import { ItemListLoaded } from './item-list.actions';
import {
    ItemListState,
    Entity,
    initialState,
    itemListReducer
} from './item-list.reducer';

describe('ItemList Reducer', () => {
    const getItemListId = it => it['id'];
    let createItemList;

    beforeEach(() => {
        createItemList = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`
        });
    });

    describe('valid ItemList actions ', () => {
        it('should return set the list of known ItemList', () => {
            const itemLists = [
                createItemList('PRODUCT-AAA'),
                createItemList('PRODUCT-zzz')
            ];
            const action = new ItemListLoaded(itemLists);
            const result: ItemListState = itemListReducer(initialState, action);
            const selId: string = getItemListId(result.list[1]);

            expect(result.loaded).toBe(true);
            expect(result.list.length).toBe(2);
            expect(selId).toBe('PRODUCT-zzz');
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = itemListReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
