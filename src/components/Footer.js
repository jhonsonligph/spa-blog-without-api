import React from 'react';
import FooterLOGO from '../img/footer-logo.png';
import GotoTOP from '../img/slider-arrow.png';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="l-container footer__info-container">
          <div className="footer__logo">
            <img src={FooterLOGO} alt="" />
            <p>
              サンプルテキストサンプル ルテキストサンプルテキスト <br />
              サンプルテキストサンプル ルテキスト
            </p>
          </div>
          <div className="footer__goto-top">
            <img src={GotoTOP} alt="Back to Top" />
            top
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="l-container footer__copyright-container">
          <span>Copyright©2007-2019 Blog Inc.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
