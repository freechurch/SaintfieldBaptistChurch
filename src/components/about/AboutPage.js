import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import HistorySectionMore from './HistorySectionMore';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatWeBelieveSectionMore from './WhatWeBelieveSectionMore';
import FAQSection from './FAQSection';
import './AboutPage.css'

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSectionChange = (bannerImage, title) => {
    this.setState({
      currentBannerImage: bannerImage,
      title:title
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} titleColour="white"/>
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>

          <PageSection
            linkTitle="About Us"
            bannerImageUrl="/img/about_us.jpg"
            url="/about">
            <WelcomeSection/>
          </PageSection>

          <PageSection
            linkTitle="History"
            bannerTitle="HOW IT ALL BEGAN"
            bannerImageUrl="/img/history.jpg"
            url="/about/history">
            <HistorySection/>
            <HistorySectionMore/>
          </PageSection>

          <PageSection
            linkTitle="What We Believe"
            bannerImageUrl="/img/what_we_believe.png"
            url="/about/what_we_believe">
            <WhatWeBelieveSection />
            <WhatWeBelieveSectionMore />
          </PageSection>

          <PageSection
            linkTitle="FAQ"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/faq">
            <FAQSection/>
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPage;
