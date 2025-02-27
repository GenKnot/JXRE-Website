import dynamic from "next/dynamic";
import ListingDetailsV1 from "@/components/listing-details-v1";
import DetailsContent from "@/components/DetailsContent";

export const metadata = {
    title: 'JXRE – Details',
    description:
        'JXRE - Real Estate',
}

const index = () => {
    return (
        <>
            {/*<ListingDetailsV1 />*/}
            <DetailsContent/>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), {ssr: false});
