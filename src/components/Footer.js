import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Brian Nelson</h1>
                    <PText>
                        A freelance Web Developer and Graphic Designer. 
                        Lets create beautiful websites, inside and out ❤️
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Important Links"
                        links={[
                            {
                                type: 'Link',
                                title: 'About',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/projects',
                            },
                            {
                                title: 'Art',
                                path: '/art',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: '(407)-864-0404',
                                path: 'tel:(407)8640404',
                            },
                            {
                                title: 'brian.nelson2975@gmail.com',
                                path: 'mailto:brian.nelson@gmail.com',
                            },
                            {
                                title: 'Resume',
                                path: '',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="social Links"
                        links={[
                            {
                                title: 'LinkedIn',
                                path: 'http://linkedin.com',
                            },
                            {
                                title: 'Facebook',
                                path: 'http://facebook.com',
                            },
                            {
                                title: 'Instagram',
                                path: 'http://instagram.com',
                            },
                            {
                                title: 'GitHub',
                                path: 'http://github.com',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        © 2022 - Brian Nelson
                        <a target="_blank" rel="noreferrer" href="http://github.com">
                            Github
                        </a>{' '}
                    </PText>
                </div>
            </div>
        </FooterStyle>
    );
}