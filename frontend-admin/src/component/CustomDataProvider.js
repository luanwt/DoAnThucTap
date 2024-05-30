import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:8080/api";
const httpClient = fetchUtils.fetchJson;
const dataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
     
        const { filter } = params;
        const { q = '' } = filter || {}; // Set default empty string for q
    
        const query = q ? `&name=${encodeURIComponent(q.toLowerCase())}` : '';

        const url = `${apiUrl}/${resource}?pageNo=${page - 1}&pageSize=${perPage}${query}`;
      
        return httpClient(url).then(({ headers, json }) => ({
          data: json,
          total: parseInt(headers.get("content-range").split("/").pop(), 10),
        }));
    },
    create: (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        return httpClient(url, {
            method: "POST",
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
    update: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        return httpClient(url, {
            method: "PUT",
            body: JSON.stringify(params.data),

        }).then(({ json }) => ({ data: json }));
    },
    delete: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        return httpClient(url, {
            method: "DELETE",
        }).then(({ json }) => ({ data: json }));
    },
    getMany: (resource, params) => {
        const { ids } = params;
        const url = `${apiUrl}/${resource}?ids=${ids.join(",")}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },
    getOne: (resource, params) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },
    findProductByName: (resource, params) => {
    const { name } = params;
    const url = `${apiUrl}/${resource}?name=${name}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
};
export default dataProvider;