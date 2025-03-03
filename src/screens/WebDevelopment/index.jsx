import React from 'react'

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from '../../components/DefaultLayout'
import InnerBanner from '../../components/InnerBanner'
import WebCreationSec from '../../components/WebCreationSec';



const WebDevelopment = () => {
  return (
    <DefaultLayout>
        <InnerBanner bannerBG={bannerBG} title="Web Development" page="Services" />
        <WebCreationSec />
    </DefaultLayout>
  )
}

export default WebDevelopment