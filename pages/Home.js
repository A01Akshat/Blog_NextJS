import {useRouter} from "next/router";
const Home=()=>{
    const router=useRouter();
return(
    <>
        <h1 className="text-green-800 font-bold bg-red-800 ">HOMEEE</h1>
        <button onClick={()=>router.push("/")}>BACK</button>
    </>
)
}

export default Home;