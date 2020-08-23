import http from "../component/utils/http";


export const fetchBeers =async( page=1, size=20, beerName) => {
    const params = {
        page: page,
    per_page: size, };                                 //constructing params

    if (!!beerName) {
        params.beer_name = beerName;
    }
    const { data } = await http.get("/beers", {params});          //get maa extra kura haru hamile le parameter maa pathauxa}})
    return data;
};
export const fetchBeerById =async(id) => {
    const { data } = await http.get(`/beers/${id}`);

    return data[0];
};