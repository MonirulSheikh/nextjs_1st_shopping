import Head from "next/head"
import Navbar from "./Navbar"

const Layout = ({children,title}) => {
    return (
        <>

        <Head>
            <title>{title}</title>
{/* bootstap cdn */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
             rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"/>

        </Head>
<Navbar/>

{children}

{/* bootstap js cdn */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        </>
    )
}

export default Layout

Layout.defaultProps={
    title:"Ecommers"
}
