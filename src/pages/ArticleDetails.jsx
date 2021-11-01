import React from "react";
import ArticlesDataService from '../services/articles.service';
import inst_icon from '../assets/img/news/icon-ins.png';
import fb_icon from '../assets/img/news/icon-fb.png';
import tw_icon from '../assets/img/news/icon-tw.png';


class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.getArticle = this.getArticle.bind(this);

        this.state = {
            currentArticle: null,
        };
    }

    componentDidMount() {
        //const { match: { params } } = this.props;
        this.getArticle();
    }

    getArticle() {
        var id = this.props.match.params.id;
        var article = ArticlesDataService.getById(id);
        this.setState({
            currentArticle: article
        });
    }

    render() {
        const { currentArticle } = this.state;
        return (<div className="about-area py-3 animated fadeIn">
            <div className="container">
                {/*  Hot Aimated News Tittle */}

                {currentArticle && <div className="row mx-0">
                    <div className="col-lg-8 px-0">
                        {/*  Trending Tittle  */}
                        <div className="about-right mb-90">
                            <div className="about-img">
                                {currentArticle.media[0] && <img src={currentArticle.media[0]['media-metadata'][2].url} alt="" className="img-fluid rounded" />}
                            </div>
                            <div className="section-tittle mb-30 pt-30">
                                <h3>{currentArticle.title}</h3><span>Source: {currentArticle.source}</span>
                            </div>
                            <div className="about-prea">
                                <p className="about-pera1 mb-25">
                                    {currentArticle.abstract}</p>
                            </div>
                            <div className="about-prea">
                                <div className="row mx-0">
                                    <div className="col-6 text-muted">
                                        {currentArticle.byline}
                                    </div>
                                    <div className="col-6 text-muted d-flex justify-content-end">
                                        <span className="fa fa-calendar"></span> &nbsp; {currentArticle.published_date}
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-12 px-0 py-2">
                                        <a href={currentArticle.url} target="_blank" className="btn btn-sm btn-primary py-4 px-2"><span>Read More...</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="social-share pt-30">
                                <div className="section-tittle">
                                    <h3 className="mr-20">Share:</h3>
                                    <ul>
                                        <li><a href="https://www.instagram.com" target="_blank"><img src={inst_icon} alt="" /></a></li>
                                        <li><a href="https://www.facebook.com" target="_blank"><img src={fb_icon} alt="" /></a></li>
                                        <li><a href="https://www.twitter.com" target="_blank"><img src={tw_icon} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*  From  */}
                    </div>
                    <div className="col-lg-4">
                        {/*  Section Tittle  */}
                        <div className="section-tittle mb-40">
                            <h3>Follow Us</h3>
                        </div>
                        {/*  Flow Socail  */}
                        <div className="single-follow mb-45">
                            <div className="single-box">
                                <div className="follow-us d-flex align-items-center">
                                    <div className="follow-social">
                                        <a href="#"><img src={fb_icon} alt="" /></a>
                                    </div>
                                    <div className="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                                <div className="follow-us d-flex align-items-center">
                                    <div className="follow-social">
                                        <a href="#"><img src={tw_icon} alt="" /></a>
                                    </div>
                                    <div className="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                                <div className="follow-us d-flex align-items-center">
                                    <div className="follow-social">
                                        <a href="#"><img src={inst_icon} alt="" /></a>
                                    </div>
                                    <div className="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  New Poster  */}
                        <div className="news-poster d-none d-lg-block">

                        </div>
                    </div>
                </div>
                }

            </div>
        </div>);
    }
}


export default ArticleDetail;