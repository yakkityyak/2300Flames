import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
  return (
    <footer>
      <div className='container'>

        <ul className='flex-row'>
          <Link href="/"><p className='icons'>Forside</p></Link>
          <Link href="/nyheder"><p className='icons'>Nyheder</p></Link>
          <Link href="/trup/"><p className='icons'>Trup</p></Link>
          <Link href="/sponsorer/"><p className='icons'>Sponsorer</p></Link>
          <Link href="/omOs/"><p className="icons">Om</p></Link>
        </ul>
        <ul className='flex-row'>
          
          <a className={styles.icon_footer} target="_blank" href="https://www.instagram.com/2300flamesif" rel="noopener noreferrer"><p className='icons'><InstagramIcon/></p></a>
          <FacebookIcon className='icons' />
          <TwitterIcon className='icons' />
          <YouTubeIcon className='icons' />
        </ul>
        <p className={styles.text_footer}>Kontakt os på: <a className={styles.text_footer_mail} href='mailto: mang@2300flames.dk'>mang@2300flames.dk</a></p>
        <p className={styles.text_footer}>&copy; 2300 Flames IF All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;