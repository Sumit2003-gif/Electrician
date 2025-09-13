import React from 'react'
import HomeHero from '../Components/HomeHero'
// import HomeWhatWeDo from '../Components/HomeWhatweDo'
import HomeWhoWeAre from '../Components/HomeWhoWeAre'
import HomeStatsSection from '../Components/HomeStats'
import HomeQuality from '../Components/HomeQuality'
import HomeElectricalServicesSlider from '../Components/HomeElectricalService.jsx'
import HomeFAQ from '../Components/HomeFAQ.jsx'
import HomeRequestQuote from '../Components/HomeContact.jsx'
import HomeTestimonialsSlider from '../Components/HomeTestimonil.jsx'
import HomeBlog from '../Components/HomeBlog.jsx'

const Home = () => {
  return (
    <div>
        <section>
            <HomeHero/>
        </section>
        <section>
          {/* <HomeWhatWeDo/> */}
        </section>
        <section>
          <HomeWhoWeAre/>
        </section>
        <section>
          <HomeStatsSection/>
        </section>
        <section>
          <HomeQuality/>
        </section>
        <section>
          <HomeElectricalServicesSlider/>
        </section>
        <section>
          <HomeFAQ/>
        </section>
        <section>
          <HomeRequestQuote/>
        </section>
        <section>
          <HomeTestimonialsSlider/>
        </section>
        <section>
          <HomeBlog/>
        </section>
    </div>
  )
}

export default Home
