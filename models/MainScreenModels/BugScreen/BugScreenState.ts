import { SortModel } from "../../Sort/SortModel";
import { FilterModel } from "../../Filter/FilterModel";

export interface BugScreenState {
    isReady: boolean,
    filterText: string,
    showFilterModal: boolean,
    showSortModal: boolean,
    filter: FilterModel,
    sort: SortModel
}