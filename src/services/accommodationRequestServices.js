import apiClient from "./services.js";

export default{
    getAll(){
        return apiClient.get("/accommodationRequests");
    },
    getAllForRequest(requestId) {
        return apiClient.get("/accommodationRequests/request/" + requestId);
      },
    get(id){
        return apiClient.get(`accommodationRequests/${id}`);
    },
    create(data){
        return apiClient.post("accommodationRequests", data);
    },
    update(id, data){
        return apiClient.put(`accommodationRequests/${id}`, data);
    },
    delete(id){
        return apiClient.delete(`accommodationRequests/${id}`);
    },
    deleteAll(){
        return apiClient.delete("accommodationRequests");
    },
}