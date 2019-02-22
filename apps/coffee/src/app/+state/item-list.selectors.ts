import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITEMLIST_FEATURE_KEY, ItemListState } from './item-list.reducer';

// Lookup the 'ItemList' feature state managed by NgRx
const getItemListState = createFeatureSelector<ItemListState>(
    ITEMLIST_FEATURE_KEY
);

const getLoaded = createSelector(
    getItemListState,
    (state: ItemListState) => state.loaded
);
const getError = createSelector(
    getItemListState,
    (state: ItemListState) => state.error
);

const getAllItemList = createSelector(
    getItemListState,
    getLoaded,
    (state: ItemListState, isLoaded) => {
        return isLoaded ? state.list : [];
    }
);
const getSelectedId = createSelector(
    getItemListState,
    (state: ItemListState) => state.selectedId
);
const getSelectedItemList = createSelector(
    getAllItemList,
    getSelectedId,
    (itemList, id) => {
        const result = itemList.find(it => it['id'] === id);
        return result ? Object.assign({}, result) : undefined;
    }
);

export const itemListQuery = {
    getLoaded,
    getError,
    getAllItemList,
    getSelectedItemList
};
