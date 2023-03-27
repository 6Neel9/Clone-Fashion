import Products from "../components/Products"
import SidebarWithHeader from "./SidebarWithHeader.tsx"
import CaptionCarousel from "./CaptionCarousel.jsx"

function Home() {
    return (
        // <div>
        //     <h2 className="heading">Welcome to Redux toolkit store</h2>
        //     <section>
        //         <h3>Products</h3>
        //         <Products />
        //     </section>
        // </div>
        <SidebarWithHeader>
            <CaptionCarousel/>
            <br/>
            <Products />
        </SidebarWithHeader>
    )
}

export default Home