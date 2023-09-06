import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import React from "react";

const WithNavbarLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default WithNavbarLayout;