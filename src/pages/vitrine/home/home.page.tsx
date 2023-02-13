import React, {useEffect} from "react";
import HeroBanner from "./components/heroBanner";
import "/src/assets/style/vitrine.scss"
import SecurityBanner from "./components/securityBanner";
import LastCatalogueBanner from "./components/lastCatalogueBanner";

export default ()=> {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <HeroBanner />
            <SecurityBanner />
            <LastCatalogueBanner />
        </React.Fragment>
    )
}
