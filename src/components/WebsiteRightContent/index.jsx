import React from 'react'
import { Link } from 'react-router-dom'

const WebsiteRightContent = () => {
  return (
    <section className='website-right-content'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="websiteright-content-txt">
                        <h2 className='mainhead text-white'>No AI. No Plag. Written by Humans, For Humans</h2>
                        <p>Content can either guide visitors… or confuse them enough to click away. Now, it’s your choice on what kind of content you want! Most websites don’t struggle because of design; they struggle because the content isn’t saying things clearly. That’s where we help</p>
                        <p>Through our website content editing services in New York, we take content that feels messy, unclear, or a little too robotic, and turn it into writing that feels human, simple, and easy to trust.</p>
                        <ul>
                            <li>No AI Words</li>
                            <li>Your Content, and Not Borrowed</li>
                            <li>Optimized and Ready to Help You Reach High</li>
                        </ul>
                        <Link to="/contact-us" className='ny-btn'>Show Up Where It Matters</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="another-right-content">
                        <p>Here’s how our SEO-optimized website content writing in New York can help you:</p>
                        <ul>
                            <li>Low Traffic? Thoughtfully written content helps the right people find you, not just more people.</li>
                            <li>No Rankings? Search-friendly writing gives Google the clarity it needs to finally recognize your website.</li>
                            <li>High Bounce Rate? Not on our watch! We write content that feels welcoming and easy to read, keeping people on your page longer.</li>
                            <li>Confusing Messaging? Clear wording explains what you do in a way your audience actually understands.</li>
                            <li>Outdated Info? Fresh content makes your website feel alive and shows visitors you’re still here, and still relevant.</li>
                            <li>No Conversions? Persuasive, human-centered writing gently nudges visitors toward taking action. Purely human-written.</li>
                            <li>Too Much Content? We use the right words; the only ones needed and no more. </li>
                            <li>Invisible to Google? SEO, AEO, and GEO optimized content improve your visibility without forcing keywords or sounding awkward.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebsiteRightContent