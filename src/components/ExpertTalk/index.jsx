import React, { useState } from 'react'
import FormModal from '../FormModal'

const ExpertTalk = ({
  mainHeading,
  paragraph,
  buttonText
}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <section className='expert-talk-sec'>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8">
            <div className="expert-talk-txt">
              <h4 className='mainhead text-white'>{mainHeading}</h4>
              <p>{paragraph}</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="expert-talk-btn">
              <button className='ny-btn' onClick={() => setShowModal(true)}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  )
}

export default ExpertTalk
