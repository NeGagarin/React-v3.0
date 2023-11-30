import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='for_users'>
                <div className='links'>
                    <span>Term of Use</span>
                    <span>Privacy-Policy</span>
                    <span>FAQ</span>
                    <span>Watch List</span>
                </div>
                <div className='paragraph'>
                    <p>©2023 WATCHIT. All Right Reserved.All videos and shows on this platform are trademarks of,and all related images and content are the property of,Streamit Inc. Duplication and copy of this is strictly prohibited.All right reserved.</p>
                </div>
            </div>

            <div className='our_links'>
                <div className='follow'>
                    <span>Follow Us</span>
                </div>
                <div className='Icons'>
                    <div className='circle'><FacebookIcon sx={{width:'2rem',height:'2rem'}}></FacebookIcon></div>
                    <div className='circle'><TwitterIcon sx={{width:'2rem',height:'2rem'}}></TwitterIcon></div>
                    <div className='circle'><GoogleIcon sx={{width:'2rem',height:'2rem'}}></GoogleIcon></div>
                    <div className='circle'><GitHubIcon sx={{width:'2rem',height:'2rem'}}></GitHubIcon></div>
                </div>
            </div>

            <div className='app'>
                <div className='watch_app'>
                    <span>WatchIt App</span>
                </div>
                <div className='get_it'>
                    <img className='image' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='google play'></img>
                    <img className='image' src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png' alt='app store'></img>
                </div>
            </div>
        </div>
    )
};

export default Footer;