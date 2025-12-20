import React from 'react'
import rankingicon from "../../assets/images/services/seo/rankingicon.svg";

const SEORanking = () => {
  return (
    <section className='seoranking-sec'>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="seoranking-head">
                    {/* <h6 className='shorttop-head'>SEO Ranking</h6> */}
                    <h2 className='mainhead'>SEO Ranking Factors We Work On</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>AEO</h4>
                        <p>Content is written in a way that establishes you as the authoritative voice on the internet, improving visibility across featured snippets and AI-driven search results.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Keyword Research</h4>
                        <p>Keywords are selected based on intent, competition, and relevance within your industry.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Backlinks</h4>
                        <p>Authoritative backlinks are earned from credible sources that strengthen trust and long-term ranking stability.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>On-Page SEO</h4>
                        <p>On-page elements such as content, designs, etc, are optimized for structure, flow, and clarity so search engines are able to crawl effortlessly.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Technical SEO</h4>
                        <p>What a site if it can’t load fast? Technical foundations ensure responsiveness, indexing, and site architecture without limiting search performance.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Page Speed</h4>
                        <p>Speed optimization reduces load times, improves usability, and strengthens engagement signals across all devices.</p>
                    </div>
                </div>
                <div className="seoranking-box rank-without-border">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>User Experience</h4>
                        <p>User experience focuses on clarity, interaction, and navigation that keeps visitors engaged longer naturally.</p>
                    </div>
                </div> 
            </div>
               <div className="col-lg-6">
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>GEO Optimization</h4>
                        <p>GEO signals align your business with location-based intent, improving regional and proximity-driven visibility.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>GMB Optimization</h4>
                        <p>GMB profiles are optimized for accuracy, reviews, and trust signals that support local discovery.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Social Signals</h4>
                        <p>Social engagement reinforces brand credibility and discovery, indirectly supporting organic search performance.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Local SEO</h4>
                        <p>Local SEO strengthens neighborhood relevance, helping businesses appear when nearby intent turns into action.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>User Engagement Metrics</h4>
                        <p>Engagement metrics reflect genuine interaction, time on site, and meaningful content consumption.</p>
                    </div>
                </div>
                <div className="seoranking-box">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Content Freshness</h4>
                        <p>Fresh content updates maintain relevance, authority, and competitive positioning over time.</p>
                    </div>
                </div>
                <div className="seoranking-box rank-without-border">
                    <div className="seoranking-icon">
                        <img src={rankingicon} alt="rankingicon" />
                    </div>
                    <div className="seoranking-content">
                        <h4>Schema Markup</h4>
                        <p>Schema markup enhances search understanding and enables rich results across modern search platforms.</p>
                    </div>
                </div> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default SEORanking
