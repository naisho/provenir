import { ItemListAction, ItemListActionTypes } from './item-list.actions';

export const ITEMLIST_FEATURE_KEY = 'itemList';

/**
 * Interface for the 'ItemList' data used in
 *  - ItemListState, and
 *  - itemListReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ItemListState {
    list: Entity[]; // list of ItemList; analogous to a sql normalized table
    selectedId?: string | number; // which ItemList record has been selected
    loaded: boolean; // has the ItemList list been loaded
    error?: any; // last none error (if any)
}

export interface ItemListPartialState {
    readonly [ITEMLIST_FEATURE_KEY]: ItemListState;
}

export const initialState: ItemListState = {
    list: [],
    loaded: false
};

export function itemListReducer(
    state: ItemListState = initialState,
    action: ItemListAction
): ItemListState {
    switch (action.type) {
        case ItemListActionTypes.AddItemSuccess:
        case ItemListActionTypes.UpdateItemSuccess:
        case ItemListActionTypes.DeleteItemSuccess:
        case ItemListActionTypes.ItemListLoaded: {
            // safer to update state each time since
            // LocalStorage can be easily manipulated
            state = {
                ...state,
                list: action.payload,
                loaded: true
            };
            break;
        }
    }
    return state;
}
