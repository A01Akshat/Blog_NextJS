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
    
  
    <h1 className=" text-center text-red-900 text-2xl  font-bold">HELLO CODING</h1>
    <img src="/homeimg.jfif" fill className="my-[20px] h-[400px] sm:mx-auto  md: max-h-60  w-96 lg:max-h-60  w-96 " ></img>
    <Link href=''><h1 className="my-[20px] text-center text-cyan-800 sm:">A BLOG FOR CODING ENTHUSIAST</h1></Link>
   

  </div>
  )
}

export default index;
