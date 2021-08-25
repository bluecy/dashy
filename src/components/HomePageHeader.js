import React, { useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../styles/Header.module.scss';

import Button from '../components/Button';
// Icons
import IconBannerDemo from '../../static/icons/banner_demo.svg';
import IconBannerGetStarted from '../../static/icons/banner_get-started.svg';
import IconBannerSource from '../../static/icons/banner_source.svg';
import IconBannerDocs from '../../static/icons/banner_docs.svg';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [showMore, setShowMore] = useState(false);
  return (
    <header className={styles.heroBanner}>
      <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
      <h3 className={styles.heroSubTitle}>{siteConfig.tagline}</h3>
      <div className={styles.buttons}>
        <Button to="/docs" color="pink"><IconBannerGetStarted />Get Started</Button>
        <Button to="/docs" color="blue"><IconBannerDemo />Try it Out</Button>
        <Button to="/docs" color="green"><IconBannerSource />Source Code</Button>
        <Button to="/docs" color="yellow"><IconBannerDocs />Documentation</Button>
      </div>
      <div className={styles.dashyDescription}>
        Dashy is an open source, highly customizable, easy to use, privacy-respecting dashboard app.
        {showMore && (
          <p className={styles.dashyDescription}>
            It's packed full of useful features, to help you build your perfect dashboard.
            Including status checks, keyboard shortcuts, auto-fetched favicon icons and
            font-awesome support, built-in authentication, tons of themes, a UI config
            editor, many display layouts plus loads more.
            All the code is free and open source, and everything is thoroughly documented,
            you can get support with any questions on GitHub.
          </p>
        )}
        <span className={styles.keepReading} onClick={() => setShowMore(!showMore)}>
          {!showMore ? 'Keep Reading...' : 'Show Less'}
        </span>
      </div>
      <a href="https://github.com/lissy93/dashy">
        <img className={styles.starButton}
          src="https://img.shields.io/github/stars/Lissy93/Dashy?label=Dashy%20on%20GitHub&logo=github&style=social"
        />
      </a>
    </header>
  );
}
