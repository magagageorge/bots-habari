

/** Local Storate Service for Temporary catching various data
 *  locally for immediate access when the device 
 * is offline or loading updated data */
class StorageService {
    /** Store loaded articles to local storage */
    cacheArticles(articles) {
        localStorage.setItem('ARTICLES', JSON.stringify(articles));
    }

    /** Load Local catched Articles */
    getLocalArticles() {
        var arts = localStorage.getItem('ARTICLES');
        if (arts !== 'undefined' && arts != null) {
            return JSON.parse(arts);
        }
        return [];
    }
}

export default new StorageService();