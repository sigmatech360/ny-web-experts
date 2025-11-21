import React from 'react'

const FindDomain = () => {
  return (
    <section className='find-domain-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="find-domain-name">
                        <h2 className='mainhead text-white'>Explore Available Domain Names</h2>
                        <div className="find-input-box">
                            <input type="text" placeholder='Search your domain'/>
                            <button type='submit'>Search</button>
                        </div>
                        <p>.com | .pk | .net | .co | .info | .org | .asia | .online | .tv</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FindDomain