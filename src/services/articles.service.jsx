import http from "../utilities/http-common";
import apikey from "../data/config";
import axios from "axios";
import StorageService from './storageService';
class ArticlesDataService {

    getMostPopular() {
        return http.get(`/mostpopular/v2/viewed/7.json?api-key=${apikey}`);
    }
    
    getById(id) {
        var articles = StorageService.getLocalArticles();
        return articles.find((atricle) => atricle.id == id);
    }

}

export default new ArticlesDataService();