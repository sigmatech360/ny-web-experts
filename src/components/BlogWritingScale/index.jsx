import React from 'react'
import scale1 from "../../assets/images/services/blogwriting/scale1.webp";
import scale2 from "../../assets/images/services/blogwriting/scale2.webp";
import scale3 from "../../assets/images/services/blogwriting/scale3.webp";
import scale4 from "../../assets/images/services/blogwriting/scale4.webp";
import scale5 from "../../assets/images/services/blogwriting/scale5.webp";

const BlogWritingScale = () => {
  return (
    <section className='blogwriting-scale-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="blogwriting-scale-head">
                        <h2 className='mainhead'>Why Write Blogs for Your Brand in New York?</h2>
                        <p>Blogs build durable visibility, trust, and authority for your website. They help you show up for the questions your audience is already searching for, turning organic traffic into real business opportunities. Blogs make your brand smarter, louder, and more connected online.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="blogwriting-scale-box">
                        <h5>Higher Audience Engagement</h5>
                        <p>High-value blogs keep readers on your website longer. They answer questions, solve problems, and create a genuine connection with your audience through consistent, helpful content.</p>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="blogwriting-scale-img">
                        <img src={scale1} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-img">
                        <img src={scale2} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-box">
                        <h5>Better Content Foundation</h5>
                        <p>Blogs support your entire marketing strategy. They become fuel for social posts, email newsletters, videos, and other content formats without stretching your resources.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-box">
                        <h5>Stronger Search Visibility</h5>
                        <p>Blog writing in New York helps your website appear for more keywords, giving you better discoverability and long-term ranking potential. They attract organic traffic that converts without paid ads and build trust with search engines over time.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-img">
                        <img src={scale3} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-img">
                        <img src={scale4} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-box">
                        <h5>Improved Brand Authority</h5>
                        <p>Publishing insightful blogs positions your brand as a leader. You earn credibility, respect, and recognition by sharing expert knowledge and useful information.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-box">
                        <h5>More Conversions Over Time</h5>
                        <p>With strong CTAs, blogs guide users to take action. They build trust first, then drive sign-ups, purchases, and inquiries in a natural, non-pushy way.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blogwriting-scale-img">
                        <img src={scale5} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogWritingScale