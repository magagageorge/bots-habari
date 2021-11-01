import React from "react";
import ArticlesDataService from '../services/articles.service';
import StorageService from '../services/storageService';
import { Link } from "react-router-dom";

/**
 * 
 * This is a Home Page component load and display A list of Articles
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.retrieveArticles = this.loadArticles.bind(this);

        this.state = {
            articles: [],
        };
    }

    /** Once the component has been initialized load articles */
    componentDidMount() {
        this.loadArticles();
    }

    loadArticles() {
        /** first Load from local storage */
        this.setState({
            articles: StorageService.getLocalArticles()
        });

        /** load fresh Most Popular Articles from NYT API */
        ArticlesDataService.getMostPopular()
            .then(response => {
                var data = response.data;
                if (data.status === 'OK') {
                    this.setState({
                        articles: data.results
                    });
                    StorageService.cacheArticles(data.results);
                }
                //console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { articles } = this.state;
        return (
            <div className="container-fluid px-0 px-md-5 animated fadeIn">
                {/* Trending Tittle */}
                <div className="row mx-0 px-md-5">
                    <div className="col-12 px-2 py-4">
                        <h4 className="text-primary">Most Popular News</h4>
                    </div>
                </div>

                {articles && articles.map((_article, index) => (
                    <div key={"liste-item-" + index} className="row mx-0 news-list-item px-md-5">
                        <div className="col-2 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-center px-0">
                            <Link to={"/articles/" + _article.id} className="d-block w-100 p-1 m-0">
                                <div className="row mx-0">
                                    <div className="col-12 d-none d-md-block d-lg-block d-xl-block px-0">
                                        {_article.media[0] && <img src={_article.media[0]['media-metadata'][2].url} alt="" className="img-fluid rounded" />}
                                    </div>
                                    <div className="col-12 d-block d-md-none d-lg-none d-xl-none px-0">
                                        {_article.media[0] && <img src={_article.media[0]['media-metadata'][0].url} alt="" className="img-fluid rounded-circle" />}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-10 col-md-9 col-lg-9 col-xl-9 px-0 py-2">
                            <div className="row mx-0">
                                <div className="col-12">
                                    <h5><Link to={"/articles/" + _article.id} className="max-ln-2">{_article.title}</Link></h5>
                                </div>
                                <div className="col-12 d-none d-md-block d-lg-block d-xl-block">
                                    <span>{_article.abstract}</span>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="row mx-0">
                                        <div className="col-12 col-md-6 text-muted"><span className="max-ln-1">{_article.byline}</span></div>
                                        <div className="col-12 col-md-6 d-flex justify-content-end text-muted"><span className="fa fa-calendar"></span> &nbsp;{_article.published_date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>);
    }
}

export default Home;