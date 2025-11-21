import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import DomainTransferbanner from "../../components/DomainTransferbanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/domaintransfer/aboutimg.webp";
import FrontendServices from "../../components/FrontendServices";
import doublenetwork from "../../assets/images/services/domaintransfer/service-double-network.svg";
import dns from "../../assets/images/services/domaintransfer/dns-antina.svg";
import support from "../../assets/images/services/domaintransfer/support.svg";
import networkbox from "../../assets/images/services/domaintransfer/network-box.svg";
import dotcom from "../../assets/images/services/domaintransfer/dot-com.svg";
import chooseimg from "../../assets/images/services/domaintransfer/need-domain-img.webp";
import DomainSearchPrice from "../../components/DomainSearchPrice";
import TransferWhyus from "../../components/TransferWhyus";
import DomainTransferSteps from "../../components/DomainTransferSteps";
import TransferSupport from "../../components/TransferSupport";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import ReactHelmet from "../../components/ReactHelmet";

const DomainTransfer = () => {
  const frontendservices = [
    {
      img: doublenetwork,
      title: "Domain Registration ",
      para: "Launch your website, web app, and more with our domain registration transfer in New York. Our domain registration service helps businesses claim the right name for their brand, secure it before others, and manage it under ICANN-compliant protection. Starting with the initial setup to DNS mapping and domain maintenance, we make domain ownership simple.",
    },
    {
      img: dns,
      title: "Domain Transfer",
      para: "Want to give your website a new name and a new address? Transfer your domain to another registrar in New York with our domain transfer service. As a full-service IT agency, we know that it’s hard for businesses to tolerate downtime and data loss. Thus, our transfer service is fast, ensuring minimal to no downtime, and it does not affect your data or web ranking.",
    },
    {
      img: dotcom,
      title: "Website and Domain Maintenance",
      para: "The best way to keep a website fast and protected is through website and domain maintenance. Move domain to a new provider in New York and keep your web page performing. We monitor renewals, manage DNS updates, and provide ongoing support to maintain peak uptime and fast performance for every client.",
    },
    {
      img: support,
      title: "Domain Privacy & Protection Services",
      para: "Your business identity needs protection. It holds all the data related to your website, its security passkeys too. Our ICANN domain transfer service in New York includes WHOIS privacy, security audits, and encrypted ownership management to safeguard your data and stop unauthorized access.",
    },
    {
      img: networkbox,
      title: "Domain Renewal & Management Solutions",
      para: "Never risk losing your web identity again. We help you transfer website domains in New York, protect accounts, synchronize renewals, and maintain multi-domain portfolios, all while keeping your registrations active and compliant.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Domain Transfer in New York"
        description="Secure, fast domain transfer in New York with zero downtime. Move your website, data, DNS, and emails safely to a trusted provider that protects your brand and keeps you online."
        keywords="domain name transfer new york, transfer domain to another registrar new york, domain transfer service new york, move domain to new provider new york, domain registration transfer new york, ICANN domain transfer new york, domain transfer process new york, transfer website domain new york, domain migration new york"
        url="https://nywebexperts.com/domain-transfer"
      />

      <DefaultLayout>
        <DomainTransferbanner />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="What We Do"
          secTitle1="Get Your Web App a Faster, High-Ranking Domain"
          description="Your domain is important; it holds all the data of your website, the contract, the address, and much more. Thus, a domain name transfer in New York is similar to relocating your address and assets, digital ones, except here we handle the packing, moving, and all for you, professionally. At NY Web Experts, we help New York businesses and entrepreneurs transfer, consolidate, and secure their domain names with total transparency and reliability."
          descriptiontwo="We are the best domain movers in the market, just minus the broken box and the downtime!"
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Transfer Website Domain"
          aboutbtnlink="/contact-us"
        />

        <FrontendServices
          ServiceSecClass="domain-transfer-services"
          shortHead="What We Do"
          mainHead="We Offer All Domain-Related Services and More"
          description="A domain is the one thing that launches your website or web app to the internet. It makes it fast, secure, and holds all the information. Below are the domain-related services we are offering in New York."
          CardCol="col-lg-4 col-md-6"
          btnText="Start Your Project"
          btnLink="/contact-us"
          services={frontendservices}
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner smart-transfer-sec"
          miniheadclass="shorttop-head"
          secTitle1="Smart Transfers Deserve Smarter Hands"
          description="We don’t just move your domain; we also protect it, both in terms of security and data. Every domain transfer is backed by precision, protection, and performance, the three things every business owner deserves."
           chooseParaItems={[
            {
              text: "Fast, secure, and ICANN-compliant domain migration",
            },
            {
              text: "Full domain ownership with privacy protection",
            },
            {
              text: "Expert DNS and email configuration",
            },
            {
              text: "Zero downtime, guaranteed continuity",
            },
             {
              text: "24/7 dedicated support from real humans in New York",
            },
          ]}
          description2="When you transfer your domain to another registrar in New York, we make it as easy as clicking"
          description2span="“approve.”"
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Move My Domain"
          aboutbtnlink="/contact-us"
        />

        <DomainSearchPrice />

        <TransferWhyus />

        <DomainTransferSteps />

        <TransferSupport />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Packages to Secure your Web and Apps"
          secPara="There’s no money that can repay the data that can be lost. And to make sure it never happens to you, choose the right domain transfer process in New York for your website."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec
          secTag="Contact Us"
          secTitle="Connect With Us to Protect Your Website"
        />

        <BlogSec
          blogminihead="Blogs and More"
          secTitle="Domains, Tools, and Tech - Straight from Experts"
          itemsPerPage={3}
        />

        <GetStarted
          secTitle="Start Selling Online Today"
          secDescription="Let’s create an e-commerce website that grows your brand, simplifies your management, and increases sales across every channel."
          btnText="Chat With Us"
        />
      </DefaultLayout>
    </>
  );
};

export default DomainTransfer;
