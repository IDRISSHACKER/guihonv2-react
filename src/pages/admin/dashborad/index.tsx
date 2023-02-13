import React from "react";
import Hero from "./components/hero/hero";
import Loading from "../../../components/Loading";

export default ()=>{

    return(
        <React.Suspense fallback={<Loading />}>
            <Hero />
        </React.Suspense>
    )
}
