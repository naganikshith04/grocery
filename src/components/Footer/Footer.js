import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import './Footer.css'

const FooterPage = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				<h3 ><span>logo</span></h3>

				<p className="footer-links" >
                    <RoomIcon color="secondary" />
					<a href="/">Enter your location</a>
                    <br />
                    <HelpOutlineOutlinedIcon />
					<a style={{
                        paddingTop:'16px'
                    }} href="/">Help</a>
					{/* <a href="/">Blog</a>
					<a href="/">Pricing</a>
					<a href="/">About</a>
					<a href="/">Faq</a>
					<a href="/">Contact</a> */}
				</p>
			</div>
            <div className="footer-left">

				{/* <h3 ><span>logo</span></h3> */}

				<p className="footer-links">
					<a href="/" className="link-1">Shop by categories</a>
					{/* <a href="/">Blog</a> */}
					{/* <a href="/">Pricing</a> */}
					{/* <a href="/">About</a> */}
					{/* <a href="/">Faq</a> */}
                    <br />
					<a style={{
                        paddingTop:'16px'
                    }}  href="/">SignUp</a>
                    <br />
                    <ShopRoundedIcon />
                    <a style={{
                        paddingTop:'16px',
                        marginLeft:'12px'
                    }}  href="/">Play Store</a>
                    <br />
                    <ShopRoundedIcon />
                    <a style={{
                        paddingTop:'16px',
                        marginLeft:'12px'
                    }}  href="/">App Store</a>
				</p>

				{/* <p className="footer-company-name">Grocery</p> */}
			</div>

			<div className="footer-center">

				<div style={{
                        paddingTop:'16px'
                    }} >
					<RoomIcon fontSize='' color='secondary' />
					<p><span></span> Haripuri colony,Hyderabad</p>
				</div>

				<div style={{
                        paddingTop:'16px'
                    }} >
					<CallIcon color='secondary' />
					<p >+91 9999999999</p>
				</div >

				<div style={{
                        paddingTop:'16px'
                    }} >
					<EmailOutlinedIcon  color='secondary'/>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div style={{
                        paddingTop:'16px'
                    }} className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
                    Nothing
                </p>

				<div className="footer-icons">

					<a href="/"><FacebookIcon /> </a>
					<a href="/"><GitHubIcon /></a>
                    <a href="/"><InstagramIcon color="secondary" /></a>
					<a href="/"><TwitterIcon color="primary"  /></a>
					<a href="/"><LinkedInIcon color="primary" /></a>
                    
				</div>
                <a className="footer-links" href="/">Terms and Conditions</a>

			</div>

		</footer>
  );
}

export default FooterPage;  