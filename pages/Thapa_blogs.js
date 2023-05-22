import Link from "next/link";


export const getStaticProps=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();

    return{
        props:{
            data,
        },
    };
};

const Thapa_blogs=({data})=>{
    return(<>
        {data.slice(0,4).map((currelem)=>{
            return(
                <div key={currelem.id}>
                    <h1>{currelem.id}</h1>
                    <Link href={`/blogpost/${currelem.id}`}><h2>{currelem.title}</h2></Link>
                </div>
            );
        })}
    </>)
}

export default Thapa_blogs;