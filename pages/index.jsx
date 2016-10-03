import React from 'react';
import styles from './index.scss';
import { config } from 'config';
import DocumentTitle from 'react-document-title';
import TechSection from 'components/TechSection';
import ContactSection from 'components/ContactSection';
import variables from '../scss/variables.scss';
import globals from '../scss/globals.scss';

export default () =>
  (
    <DocumentTitle title={config.title}>
      <div>
        <div className={`${styles.section} ${globals.page}`}>
          <h1 className={styles.header}> Mission </h1>
          <div className={styles['mission-container']}>
            <div className={styles['mission-wrapper']}>
              <img src={require('./svg/mission1.svg')} className={styles['mission-icon']}></img>
              <p className={styles['mission-text']}>
                Deliver well-designed and innovative digital solutions for our citizens
              </p>
            </div>
            <div className={styles['mission-wrapper']}>
              <img src={require('./svg/mission2.svg')} className={styles['mission-icon']}></img>
              <p className={styles['mission-text']}>
                Develop tech capabilities in software engineering, design, and data science
              </p>
            </div>
            <div className={styles['mission-wrapper']}>
              <img src={require('./svg/mission3.svg')} className={styles['mission-icon']}></img>
              <p className={styles['mission-text']}>
                Enable data-driven decision making in public policy
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${globals.page} ${variables.bggray}`}>
          <h1 className={styles.header}> Technology </h1>
          <TechSection
            icons={[
              'devicon-react-original',
              'devicon-d3js-plain',
              'devicon-rails-plain',
              'devicon-linux-plain',
              'devicon-android-plain',
              'swift',
              'devicon-nodejs-plain',
              'devicon-redhat-plain',
              'devicon-postgresql-plain',
              'ansible',
              'devicon-github-plain',
              'devicon-docker-plain',
              'devicon-angularjs-plain',
              'devicon-amazonwebservices-original',
              'hadoop',
              'devicon-python-plain'
            ]}
          />
        </div>
        <ContactSection />
      </div>
    </DocumentTitle>
  );
