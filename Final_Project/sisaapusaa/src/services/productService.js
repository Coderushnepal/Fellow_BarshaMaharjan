import http from '../utils/http';

export const fetchProduct = async () => {
    console.log("Fetching")
    // call async api
    const {data}=await http.get("/product");
    console.log(data.data);
    return  data.data;
};



export const fetchProductById  = async (id) => {
    //call single async api
    console.log('this is id', id);
    const {data} =await http.get(`/product/${id}`);
    return data[0];


}
