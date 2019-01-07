import IFilterOptions from './../interfaces/IFilterOptions';

class FilterOptions implements IFilterOptions {
    constructor(page: number, pageSize: number, orderBy?: string, orderDirection?: string, embed?: string, searchTerm?: string) {
        this.page = parseInt(page.toString()) || 1;
        this.pageSize = parseInt(pageSize.toString()) || 10;
        this.orderBy = orderBy || '';
        this.orderDirection = orderDirection || 'asc';
        this.embed = embed ? embed.split(',') : [];
        this.searchTerm = searchTerm || '';
    }

    page: number;
    pageSize: number;
    orderBy: string;
    orderDirection: string;
    embed: Array<string>;
    searchTerm: string;
}

export default FilterOptions;