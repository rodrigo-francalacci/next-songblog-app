// import 'swiper/css'
// import 'swiper/css/navigation'
import '../styles/resets.css'
import '../styles/fonts.css'
import '../styles/globals.css'
import '../styles/typography.css'
import '../styles/margins.css'
import '../styles/themes.css'


//@ts-ignore
global.performance = global.performance || {
  now: () => new Date().getTime(),
};


function MyApp({ Component, pageProps }) {



  return (
    <Component {...pageProps} />
  )
}

export default MyApp



