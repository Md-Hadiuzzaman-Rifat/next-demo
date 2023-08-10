import CoverSection from '@/components/CoverSection/CoverSection';
import FeaturedPortfolio from '@/components/FeaturedPortfolio/FeaturedPortfolio';
import Technology from '@/components/Technology/Technology';
import Testimonial from '@/components/Testomonial/Testimonial';
import React from 'react';
import styles from "./Developer.module.css"
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import AboutMe from '@/components/AboutMe/AboutMe';
import GitHubDate from '@/components/GitHubDate/GitHubDate';

const page = () => {
    return (
        <div className={styles.developer}>
            <CoverSection/>
            <FeaturedPortfolio></FeaturedPortfolio>
            <AboutMe></AboutMe>
            <Technology></Technology>
            {/* <GitHubDate></GitHubDate> */}
            <Testimonial></Testimonial>
            <SocialLinks></SocialLinks>
        </div>
    );
};

export default page;