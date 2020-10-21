// @flow
import * as React from 'react';
import Link from 'next/link';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import { SmallHeading, SmallSubheading } from '../components/Page/style';
import Checklist from '../components/Checklist';
import ShareButtons from '../components/ShareButtons';
import BottomShare from '../components/BottomShare';
import Card from '../components/Card';
import { CardContent, TopBorder } from '../components/BottomShare/style';

class Index extends React.Component<{}> {
  render() {
    return (
      <Page displayProgress>
        <SectionHeading>
          <Heading>Digital Security Checklist</Heading>
          <div>
            This checklist was designed to assist with the Chicago D4BL Digital Security Training. This is an open source checklist of resources designed to improve your
            online privacy and security. Check things off to keep track as you
            go. For more information about this checklist and Chicago D4BL, <Link href="/about"> visit here</Link>.
          </div>
          <br />
          <Link href="/worksheet">Training worksheet available here.</Link>
        </SectionHeading>
        <Checklist />
        <Card style={{ width: '100%', marginTop: '48px' }}>
          <TopBorder />
          <CardContent >
              <SmallHeading>For More Content</SmallHeading>
              <a href="https://hackinghustling.org/2020/06/12/threat-modeling/">Hacking Hustling on Threat Modeling</a>
              <a href="https://ssd.eff.org/">Electronic Frontier Foundation - Digital Defense curriculum </a>
              <a href="https://www.twitch.tv/cryptoharlem">Cryptoharlem</a>
              <a href="https://www.equalitylabs.org/resources-1">Equality Labs</a>
              <a href="https://cldc.org/security-updates">Civil Liberties Defense Center</a>
          </CardContent>
        </Card>
        <BottomShare />
      </Page>
    );
  }
}

export default Index;
