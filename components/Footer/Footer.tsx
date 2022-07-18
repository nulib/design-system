import {
  FooterContent,
  FooterIcon,
  FooterList,
  FooterStyled,
  Social,
} from "./Footer.styled";
import { CSS } from "../../stitches.config";
import React from "react";

type FooterProps = { css?: CSS };

export const Footer = (props: FooterProps) => {
  return (
    <FooterStyled {...props}>
      {/* Column 1 */}
      <FooterContent>
        <a href="https://www.northwestern.edu">
          <div className="footer-logo">
            <img
              alt="Northwestern University logo"
              src="https://common.northwestern.edu/v8/css/images/northwestern-university.svg"
              style={{
                maxWidth: "200px",
                marginBottom: "1rem",
              }}
            />
          </div>
        </a>
        <FooterList>
          <li>© 2022 Northwestern University</li>
          <li>
            <a href="https://www.northwestern.edu/emergency/index.html">
              Campus Emergency Information
            </a>
          </li>
          <li>
            <a href="https://www.northwestern.edu/hr/careers/">Careers</a>
          </li>
          <li>
            <a href="https://www.northwestern.edu/contact.html">
              Contact Northwestern University
            </a>
          </li>
          <li>
            <a href="https://www.northwestern.edu/disclaimer.html">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="https://www.northwestern.edu/accessibility/about/report-an-accessibility-issue.html">
              Report an Accessibility Issue
            </a>
          </li>
          <li>
            <a href="http://policies.northwestern.edu/">University Policies</a>
          </li>
        </FooterList>
      </FooterContent>

      {/* Column 2 */}
      <FooterContent className="contact">
        <FooterList>
          <FooterIcon
            css={{
              background:
                "url('https://common.northwestern.edu/v8/css/images/icons/pin-drop.svg') no-repeat",
            }}
          >
            <span className="hide-label">Address</span>
          </FooterIcon>
          <li>1970 Campus Drive</li>
          <li>Evanston, IL 60208</li>
        </FooterList>
        <FooterList>
          <FooterIcon
            css={{
              background:
                "url('https://common.northwestern.edu/v8/css/images/icons/mobile-phone.svg') no-repeat",
            }}
          >
            <span className="hide-label">Phone number</span>
          </FooterIcon>
          <li>(847) 491-7658</li>
        </FooterList>
        <FooterList>
          <FooterIcon
            css={{
              background:
                "url('https://common.northwestern.edu/v8/css/images/icons/email.svg') no-repeat",
              left: "-2.2rem",
            }}
          >
            <span className="hide-label">Email Address</span>
          </FooterIcon>

          <li>
            <a href="mailto:library@northwestern.edu">
              library@northwestern.edu
            </a>
          </li>
        </FooterList>
      </FooterContent>

      {/* Column 3 */}
      <FooterContent>
        <p style={{ lineHeight: "1", margin: "0 0 1rem" }}>
          <strong>Social Media</strong>
        </p>
        <Social
          className="facebook"
          href="https://www.facebook.com/NorthwesternLibrary"
        >
          Facebook
        </Social>

        <Social className="twitter" href="https://twitter.com/nu_library">
          Twitter
        </Social>
        <Social
          className="instagram"
          href="https://www.instagram.com/nu_library/"
        >
          Instagram
        </Social>
        <br />
        <Social
          className="youtube"
          href="https://www.youtube.com/user/NorthwesternLib"
        >
          YouTube
        </Social>
        <Social
          className="wordpress"
          href="http://sites.northwestern.edu/northwesternlibrary/"
        >
          WordPress
        </Social>
      </FooterContent>

      {/* Column 4 */}
      <FooterContent>
        <div>
          <FooterList>
            <li>
              <a href="http://northwestern.libanswers.com/">FAQs</a>
            </li>
            <li>
              <a href="about/support/index.html">Support Us</a>
            </li>
            <li>
              <a href="about/library-jobs/index.html">Library Jobs</a>
            </li>
            <li>
              <a href="about/administration/policies/index.html">
                Library Policies
              </a>
            </li>
            <li>
              <a href="about/contact/general-feedback.html">Provide Feedback</a>
            </li>
          </FooterList>
        </div>
      </FooterContent>
    </FooterStyled>
  );
};
