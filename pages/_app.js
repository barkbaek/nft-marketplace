import '../styles/globals.css'
import './app.css'
import Link from 'next/link'

function KryptoBirdMarketplace({Component, pageProps}) {
  return (
      <div>
        <nav className='border-b p-6' style={{backgroundColor: 'purple', padding: '15px'}}>
          <p className='text-4x1 font-bold text-white title'>Tiger Marketplace</p>
          <div className='flex mt-4 justify-center menu-box'>
            <Link href='/'>
              <a className='mr-4 menu'>
                Main Marketplace
              </a>
            </Link>
            <Link href='/mint-item'>
              <a className='mr-6 menu'>
                Mint Tokens
              </a>
            </Link>
            <Link href='/my-nfts'>
              <a className='mr-6 menu'>
                My NFTs
              </a>
            </Link>
            <Link href='/account-dashboard'>
              <a className='mr-6 menu'>
                Account Dashboard
              </a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
  )
}

export default KryptoBirdMarketplace