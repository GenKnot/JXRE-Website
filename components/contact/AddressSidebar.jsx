import Social from "../common/footer/Social";

const AddressSidebar = () => {
    return (
        <div className="contact_localtion">
            <h4>Contact Us</h4>
            <p>
                Have questions about our properties or services? Get in touch with our team and we'll be happy to assist you.
            </p>
            {/*<div className="content_list">*/}
            {/*    <h5>Address</h5>*/}
            {/*    <p>*/}
            {/*        2301 Ravenswood Rd Madison, <br />*/}
            {/*        WI 53711*/}
            {/*    </p>*/}
            {/*</div>*/}
            <div className="content_list">
                <h5>Toronto</h5>
                <p>(647)-616-9785</p>
            </div>
            <div className="content_list">
                <h5>Montreal</h5>
                <p>(514)-364-3315</p>
            </div>
            <div className="content_list">
                <h5>Mail</h5>
                <p>info@findhouse.com</p>
            </div>
        </div>
    );
};

export default AddressSidebar;
