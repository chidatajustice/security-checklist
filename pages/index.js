// @flow
import * as React from 'react';
import Link from 'next/link';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import Checklist from '../components/Checklist';
import ShareButtons from '../components/ShareButtons';
import BottomShare from '../components/BottomShare';

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

        <BottomShare />
      </Page>
    );
  }
}

export default Index;
