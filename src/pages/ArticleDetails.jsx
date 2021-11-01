import React from "react";
import ArticlesDataService from '../services/articles.service'

import inst_icon from '../assets/img/news/icon-ins.png';
import fb_icon from '../assets/img/news/icon-fb.png';
import tw_icon from '../assets/img/news/icon-tw.png';


class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.getArticle = this.getArticle.bind(this);

        this.state = {
            currentArticle: null,
            message: ""
        };
    }

    componentDidMount() {
        this.getArticle(this.props.match.params.id);
    }

    getArticle(id) {
        var article = ArticlesDataService.getById(id);
        this.setState({
            currentArticle: article
        });
        console.log(ArticlesDataService.getById(id));
    }

    render() {
        const { currentArticle, message } = this.state;
        return (<div class="about-area py-3 animated fadeIn">
            <div class="container">
                {/*  Hot Aimated News Tittle */}

                {currentArticle && <div class="row mx-0">
                    <div class="col-lg-8 px-0">
                        {/*  Trending Tittle  */}
                        <div class="about-right mb-90">
                            <div class="about-img">
                                {currentArticle.media[0] && <img src={currentArticle.media[0]['media-metadata'][2].url} alt="" class="img-fluid rounded" />}
                            </div>
                            <div class="section-tittle mb-30 pt-30">
                                <h3>{currentArticle.title}</h3><span>Source: {currentArticle.source}</span>
                            </div>
                            <div class="about-prea">
                                <p class="about-pera1 mb-25">
                                    {currentArticle.abstract}</p>
                            </div>
                            <div class="about-prea">
                              <div class="row mx-0">
                                  <div class="col-6 text-muted">
                                     {currentArticle.byline}
                                  </div>
                                  <div class="col-6 text-muted d-flex justify-content-end">
                                     <span class="fa fa-calendar"></span> &nbsp; {currentArticle.published_date}
                                  </div>
                              </div>
                              <div class="row mx-0">
                              <div class="col-12 px-0 py-2">
                                     <a href={currentArticle.url} target="_blank" class="btn btn-sm btn-primary py-4 px-2"><span>Read More...</span></a>
                                  </div>                                 
                              </div>
                            </div>
                            <div class="social-share pt-30">
                                <div class="section-tittle">
                                    <h3 class="mr-20">Share:</h3>
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
                    <div class="col-lg-4">
                        {/*  Section Tittle  */}
                        <div class="section-tittle mb-40">
                            <h3>Follow Us</h3>
                        </div>
                        {/*  Flow Socail  */}
                        <div class="single-follow mb-45">
                            <div class="single-box">
                                <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src={fb_icon} alt="" /></a>
                                    </div>
                                    <div class="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                                <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src={tw_icon} alt="" /></a>
                                    </div>
                                    <div class="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                                <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src={inst_icon} alt="" /></a>
                                    </div>
                                    <div class="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  New Poster  */}
                        <div class="news-poster d-none d-lg-block">
                            
                        </div>
                    </div>
                </div>
                }

            </div>
        </div>);
    }
}


export default ArticleDetail;