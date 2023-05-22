import Script from 'next/script';
import Hea from 'next/Head';
import idx from '../styles/index.module.css';
import Link from 'next/link'
const index = () => {
  return (<div>


    <style jsx>{``}</style>



    <Hea>
      <title>HEADER</title>
    </Hea>
    
    
    <h1 className={idx.h1}>HELLO CODING</h1>
    <img src="/homeimg.jfif" width={500} height={200} className={idx.img}></img>
    <Link href=''><h1 className={idx.blg}>A BLOG FOR CODING ENTHUSIAST</h1></Link>
   

  </div>
  )
}

export default index;