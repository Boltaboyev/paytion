import React from "react"

// components
import Header from "./components/header"
import Showcase from "./components/showcase"
import Task from "./components/task"
import Products from "./components/products"
import NewProducts from "./components/new_products"
import Safe from "./components/safe"
import Guarantee from "./components/guarantee"
import Videos from "./components/videos"
import Oleg from "./components/oleg"
import Banner from "./components/banner"
import Footer from "./components/footer"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Showcase />
                <Task />
                <Products />
                <NewProducts />
                <Safe />
                <Guarantee />
                <Videos />
                <Oleg />
                <Banner />
            </main>
            <Footer />
        </>
    )
}

export default App
