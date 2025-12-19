import React from 'react'
import Flutter from "../../assets/images/services/mobappdev/Flutter.webp";
import reactnative from "../../assets/images/services/mobappdev/reactnative.webp";
import ionic from "../../assets/images/services/mobappdev/ionic.webp";
import swift from "../../assets/images/services/mobappdev/swift.webp";
import xamarin from "../../assets/images/services/mobappdev/xamarin.webp";
import kotlin from "../../assets/images/services/mobappdev/kotlin.webp";
import visualstudio from "../../assets/images/services/mobappdev/visualstudio.webp";
import androidstudio from "../../assets/images/services/mobappdev/androidstudio.webp";
import phonegap from "../../assets/images/services/mobappdev/phonegap.webp";
import ios from "../../assets/images/services/mobappdev/ios.webp";
import firebase from "../../assets/images/services/mobappdev/firebase.webp";
import cordova from "../../assets/images/services/mobappdev/cordova.webp";


const MobileAppDevTeam = () => {
  return (
    <section className='mobileappdev-team-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="mobileappdev-team-head">
                        <h2 className='mainhead'>Tools That Support Your <span>Mobile Apps</span></h2>
                        <p>Our team uses proven tools that help us build strong, secure, and stable apps for your business. These tools allow smooth development and long-term growth.</p>
                    </div>  
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={Flutter} alt="image" />
                        <p>Flutter</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={reactnative} alt="image" />
                        <p>React Native</p>
                    </div>
                </div> 
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={ionic} alt="image" />
                        <p>Ionic</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={swift} alt="image" />
                        <p>Swift</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={xamarin} alt="image" />
                        <p>Xamarin</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={kotlin} alt="image" />
                        <p>Kotlin</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={visualstudio} alt="image" />
                        <p>Visual Studio</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={androidstudio} alt="image" />
                        <p>Android Studio</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={phonegap} alt="image" />
                        <p>Phone Gap</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={ios} alt="image" />
                        <p>iOS</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={firebase} alt="image" />
                        <p>Firebase</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="language-box">
                        <img src={cordova} alt="image" />
                        <p>Cordova</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MobileAppDevTeam