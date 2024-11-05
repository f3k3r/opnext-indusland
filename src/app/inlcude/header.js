import Image from 'next/image';
import styles from '../1home.module.css';
export default function Header() {
  return (
    <>
    <header className={`border-bottom  py-2  ${styles.bgPrimary}`}>
      <div className='d-flex pt-2  justify-content-center mb-2 align-items-center gap-4'>
          <img alt="men" width="250" src="/logo.png"  />
      </div>
    </header>

    <div className='container'>
      <div className='my-3'>
      <h6>Welcome to Induslnd Bank</h6>
      <small>Avail our banking products and services with ease suing IndusMobile App.</small>
      </div>
    </div>
    </>
  
  );
}
