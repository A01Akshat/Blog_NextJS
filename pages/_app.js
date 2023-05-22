import Nav from '@/components/Nav';
import '@/styles/globals.css';
//import '../styles/st.css'
export default function App({ Component, pageProps }) {
  return <>
  <Nav/>
   <Component {...pageProps} />
   </>
}
