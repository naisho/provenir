import { Entity, ItemListState } from './item-list.reducer';
import { itemListQuery } from './item-list.selectors';

describe('ItemList Selectors', () => {
    const ERROR_MSG = 'No Error Available';
    const getItemListId = it => it['id'];

    let storeState;

    beforeEach(() => {
        const createItemList = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`
        });
        storeState = {
            itemList: {
                list: [
                    createItemList('PRODUCT-AAA'),
                    createItemList('PRODUCT-BBB'),
                    createItemList('PRODUCT-CCC')
                ],
                selectedId: 'PRODUCT-BBB',
                error: ERROR_MSG,
                loaded: true
            }
        };
    });

    describe('ItemList Selectors', () => {
        it('getAllItemList() should return the list of ItemList', () => {
            const results = itemListQuery.getAllItemList(storeState);
            const selId = getItemListId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe('PRODUCT-BBB');
        });

        it('getSelectedItemList() should return the selected Entity', () => {
            const result = itemListQuery.getSelectedItemList(storeState);
            const selId = getItemListId(result);

            expect(selId).toBe('PRODUCT-BBB');
        });

        it("getLoaded() should return the current 'loaded' status", () => {
            const result = itemListQuery.getLoaded(storeState);

            expect(result).toBe(true);
        });

        it("getError() should return the current 'error' storeState", () => {
            const result = itemListQuery.getError(storeState);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
