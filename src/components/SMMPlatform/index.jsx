import React from 'react'
import platform1 from "../../assets/images/services/smm/facebook.webp";
import platform2 from "../../assets/images/services/smm/instagram.webp";
import platform3 from "../../assets/images/services/smm/linkedin.webp";
import platform4 from "../../assets/images/services/smm/twitter.webp";
import platform5 from "../../assets/images/services/smm/youtube.webp";
import platform6 from "../../assets/images/services/smm/pinterest.webp";
import platform7 from "../../assets/images/services/smm/tiktok.webp";
import platform8 from "../../assets/images/services/smm/snapchat.webp";
import platform9 from "../../assets/images/services/smm/thread.webp";


const SMMPlatform = () => {
  return (
    <section className='smm-platform-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="smm-platform-head text-center">
                        <h6 className='shorttop-head'>Our Reach</h6>
                        <h2 className='mainhead'>The Platforms You Can Grow on with Us</h2>
                        <p>Each platform offers a unique opportunity. We help you build a presence that fits the style, tone, and behavior of your ideal audience.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform1} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Facebook Marketing</h5>
                            <p>We create content that encourages conversation, boosts reach, and strengthens community. Ideal for storytelling, brand updates, and targeted social media advertising in New York’s diverse audience groups.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform2} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Instagram Marketing</h5>
                            <p>We design visually compelling posts, reels, and stories that amplify your brand presence. A strong choice for lifestyle, product showcases, and emotional engagement</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform3} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>LinkedIn Marketing</h5>
                            <p>We shape professional content that builds credibility and helps you connect with decision makers. Useful for B2B engagement and lead generation.</p>
                        </div> 
                    </div>
                </div>
                <div className="col-lg-4 col-md-6"> 
                    <div className="smm-platform-box">
                        <img src={platform4} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>X (Twitter) Marketing</h5>
                            <p>We craft sharp, timely messages that keep your brand relevant. Perfect for real-time engagement, trend participation, and building quick communication loops with active audiences.</p>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform5} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>YouTube Marketing</h5>
                            <p>We produce long form content ideas that build authority and trust. From tutorials to brand storytelling, YouTube positions your business as a knowledgeable and reliable source.</p>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform6} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Pinterest Marketing</h5>
                            <p>We design visually appealing pins that inspire discovery. Great for brands focused on lifestyle, e-commerce, planning, and creative learning.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform7} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>TikTok Marketing</h5>
                            <p>We develop short form video concepts that capture attention fast. Our TikTok strategies focus on creativity, authenticity, and trends that help your brand become part of everyday conversation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform8} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Snapchat Marketing</h5>
                            <p>We create fun, fast, and interactive content that appeals to younger audiences. Ideal for brand visibility and quick engagement in competitive niches.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="smm-platform-box">
                        <img src={platform9} alt="img" />
                        <div className="smm-platform-boxtxt">
                            <h5>Threads Marketing</h5>
                            <p>We help you maintain meaningful, conversational posts that strengthen your brand identity. Perfect for real-time reactions and ongoing dialogue with your audience.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-12">
                    <div className="smm-platform-btn">
                        <button className='theme-btn'>Get A Custom Social Media Plan</button>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default SMMPlatform
