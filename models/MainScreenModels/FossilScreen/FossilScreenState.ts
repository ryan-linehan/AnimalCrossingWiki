import { FilterModel } from "../../Filter/FilterModel";
import { SortModel } from "../../Sort/SortModel";

export interface FossilScreenState{
    isReady: boolean,
    filterText: string,
    showFilterModal: boolean,
    showSortModal: boolean,
    filter: FilterModel,
    sort: SortModel
}