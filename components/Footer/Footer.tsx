import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="contain-1120">
        <a href="https://www.northwestern.edu">
          <div className="footer-logo">
            <span className="hide-text">Northwestern University</span>
          </div>
        </a>
        <div className="footer-wrap">
          <div className="footer-content contact">
            <h2>Department Name Goes Here</h2>
            <div className="address">
              <div className="icon">
                <span>Address</span>
              </div>
              <div className="text">
                <p>
                  123 Sheridan Road
                  <br />
                  Suite 100
                  <br />
                  Evanston, IL 60208
                </p>
              </div>
            </div>
            <div className="phone">
              <div className="icon">
                <span>Phone number</span>
              </div>
              <div className="text">
                <p>
                  <strong>Header option</strong>
                  <br />
                  (123) 456-7890
                </p>
                <p>
                  <strong>Header option</strong>
                  <br />
                  (123) 456-7890
                </p>
              </div>
            </div>
            <div className="fax">
              <div className="icon">
                <span>Fax number</span>
              </div>
              <div className="text">
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">
                <span>Email address</span>
              </div>
              <div className="text">
                <p>
                  <a href="#">your-department@northwestern.edu</a>
                </p>
              </div>
            </div>
            <div className="feedback">
              <div className="icon">
                <span>Feedback</span>
              </div>
              <div className="text">
                <p>
                  <a href="#">Feedback</a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-content connect">
            <h2>Connect</h2>
            <a href="#" className="social facebook">
              Facebook
            </a>
            <a href="#" className="social twitter">
              Twitter
            </a>
            <a href="#" className="social social instagram">
              Instagram
            </a>
            <a href="#" className="social rss">
              RSS
            </a>
            <a href="#" className="social youtube">
              YouTube
            </a>
            <a href="#" className="social tumblr">
              Tumblr
            </a>
            <a href="#" className="social wordpress">
              WordPress
            </a>
            <a href="#" className="social futurity">
              Futurity
            </a>
            <a href="#" className="social vimeo">
              Vimeo
            </a>
            <a href="#" className="social linkedin">
              Linkedin
            </a>
            <a href="#" className="social google-groups">
              Google Groups
            </a>
            <a href="#" className="social blog">
              Blog
            </a>
            <a href="#" className="social github">
              Github
            </a>
            <a href="#" className="social flickr">
              Flickr
            </a>
            <a href="#" className="social storify">
              Storify
            </a>
            <a href="#" className="social pinterest">
              Pinterest
            </a>
            <a href="#" className="social we-will">
              We Will
            </a>
            <a href="#" className="social spotify">
              Spotify
            </a>
            <div id="cta">
              <h3>Call to Action</h3>
              <p>Lorum ipsum dolor sit amet.</p>
              <p className="button">
                <a href="#">Button Text</a>
              </p>
            </div>
          </div>
          <div className="footer-content links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Link 1 is a really long title</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
              <li>
                <a href="#">Link 6</a>
              </li>
            </ul>
          </div>
          <div className="footer-content resources">
            <h2>Northwestern Resources</h2>
            <ul>
              <li>
                <a href="https://www.northwestern.edu/accessibility">
                  Accessibility
                </a>
              </li>
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
                <a href="https://policies.northwestern.edu/">
                  University Policies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <div className="contain-1120">
          <span className="copyright">
            &copy; <script>document.write(new Date().getFullYear())</script>{" "}
            Northwestern University
          </span>
          <ul>
            <li>
              <a href="https://www.facebook.com/NorthwesternU">
                <span className="social facebook">Facebook</span>
                <span className="text">@NorthwesternU</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/northwesternu">
                <span className="social twitter">Twitter</span>
                <span className="text">@northwesternU</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/northwesternu">
                <span className="social instagram">Instagram</span>
                <span className="text">@northwesternu</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/NorthwesternU">
                <span className="social youtube">YouTube</span>
                <span className="text">@NorthwesternU</span>
              </a>
            </li>
            <li>
              <a href="https://www.futurity.org/university/northwestern-university/">
                <span className="social futurity">Futurity</span>
                <span className="text">Futurity</span>
              </a>
            </li>
            <li>
              <a href="https://news.northwestern.edu/feeds/allStories">
                <span className="social rss">RSS</span>
                <span className="text">RSS Feed</span>
              </a>
            </li>
          </ul>
          <span className="right">
            <a href="https://www.northwestern.edu/disclaimer.html">
              Disclaimer
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
