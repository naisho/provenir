import { Action } from '@ngrx/store';
import { Entity } from './item-list.reducer';
import { Item } from '../models/item';

export enum ItemListActionTypes {
    LoadItemList = '[ItemList] Load ItemList',
    ItemListLoaded = '[ItemList] ItemList Loaded',
    ItemListLoadError = '[ItemList] ItemList Load Error',
    AddItem = '[ItemList] Add Item',
    AddItemSuccess = '[ItemList] Item Added',
    AddItemError = '[ItemList] Add Item Error',
    UpdateItem = '[ItemList] Update Item',
    UpdateItemSuccess = '[ItemList] Item Updated',
    UpdateItemError = '[ItemList] Update Item Error',
    DeleteItem = '[ItemList] Remove Item',
    DeleteItemSuccess = '[ItemList] Item Removed',
    DeleteItemError = '[ItemList] Remove Item Error',
}

export class LoadItemList implements Action {
    readonly type = ItemListActionTypes.LoadItemList;
}

export class ItemListLoadError implements Action {
    readonly type = ItemListActionTypes.ItemListLoadError;
    constructor(public payload: any) {}
}

export class ItemListLoaded implements Action {
    readonly type = ItemListActionTypes.ItemListLoaded;
    constructor(public payload: Entity[]) {}
}

export class AddItem implements Action {
    readonly type = ItemListActionTypes.AddItem;
    constructor(public payload: Item) {}
}

export class AddItemSuccess implements Action {
    readonly type = ItemListActionTypes.AddItemSuccess;
    constructor(public payload: Entity[]) {}
}

export class AddItemError implements Action {
    readonly type = ItemListActionTypes.AddItemError;
    constructor(public payload: any) {}
}

export class UpdateItem implements Action {
    readonly type = ItemListActionTypes.UpdateItem;
    constructor(public payload: Item) {}
}

export class UpdateItemSuccess implements Action {
    readonly type = ItemListActionTypes.UpdateItemSuccess;
    constructor(public payload: Entity[]) {}
}

export class UpdateItemError implements Action {
    readonly type = ItemListActionTypes.UpdateItemError;
    constructor(public payload: any) {}
}

export class DeleteItem implements Action {
    readonly type = ItemListActionTypes.DeleteItem;
    constructor(public payload: Item) {}   
}

export class DeleteItemSuccess implements Action {
    readonly type = ItemListActionTypes.DeleteItemSuccess;
    constructor(public payload: Entity[]) {}   
}

export class DeleteItemError implements Action {
    readonly type = ItemListActionTypes.DeleteItemError;
    constructor(public payload: any) {}   
}

export type ItemListAction =
    LoadItemList |
    ItemListLoaded |
    ItemListLoadError |
    AddItem |
    AddItemSuccess |
    AddItemError |
    UpdateItem |
    UpdateItemSuccess |
    UpdateItemError |
    DeleteItem |
    DeleteItemSuccess |
    DeleteItemError
;

export const fromItemListActions = {
    LoadItemList,
    ItemListLoaded,
    ItemListLoadError,
    AddItem,
    AddItemSuccess,
    AddItemError,
    UpdateItem,
    UpdateItemSuccess,
    UpdateItemError,
    DeleteItem,
    DeleteItemSuccess,
    DeleteItemError
};
