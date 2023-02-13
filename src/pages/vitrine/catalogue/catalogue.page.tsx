import React, {useEffect} from "react";
import Loading from "../../../components/Loading";
import Hero from "../../admin/dashborad/components/hero/hero";
import DisplayPhotos from "../../admin/photos/components/displayPhotos";

export default ()=>{

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <React.Suspense fallback={<Loading />}>
            <Hero />
            <DisplayPhotos show={false} />
        </React.Suspense>
    )
}
