// @flow
import * as React from 'react';
import { FacebookButton, TwitterButton, CopyLinkButton } from '../Button';
import { Container } from './style';

export default function ShareButtons() {
  return (
    <Container>
      <FacebookButton
        href="https://www.facebook.com/sharer/sharer.php?u=https://chid4blsecurity.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share
      </FacebookButton>

      <TwitterButton
        href="http://twitter.com/share?text=Check out Security Checklist, a checklist to help people stay safe online&url=https://chid4blsecurity.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </TwitterButton>

      <CopyLinkButton text="https://chid4blsecurity.herokuapp.com/">
        Share Link
      </CopyLinkButton>
    </Container>
  );
}
