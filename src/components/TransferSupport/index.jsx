import React from 'react'
import { Link } from 'react-router-dom'

const TransferSupport = () => {
  return (
    <section className='transfer-support-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="transfer-support-txt">
                        <h6 className='shorttop-head text-white'>Web & Domain Service</h6>
                        <h2 className='mainhead text-white'>Protected by Experts in NY</h2>
                        <p>Your website doesn’t need to take breaks like you do. It doesn’t need lunch, nor anything, and we make sure it stays that way, without any downtime, always on, always ready to sell more and rank your business higher, protected by monthly backups, and a professional company in New York.</p>
                        <Link to="/contact-us">Talk to Professionals</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TransferSupport