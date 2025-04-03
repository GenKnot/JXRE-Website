'use client'

// import "react-pro-sidebar/dist/css/styles.css";
import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    Menu,
    MenuItem,
    SubMenu,
    SidebarContent,
    Sidebar
} from "react-pro-sidebar";
import Link from "next/link";

import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";

const home = [
    {
        name: "Home 1",
        routerPath: "/",
    },
    {
        name: "Home 2",
        routerPath: "/home-2",
    },
    {
        name: "Home 3",
        routerPath: "/home-3",
    },
    {
        name: "Home 4",
        routerPath: "/home-4",
    },
    {
        name: "Home 5",
        routerPath: "/home-5",
    },
    {
        name: "Home 6",
        routerPath: "/home-6",
    },
    {
        name: "Home 7",
        routerPath: "/home-7",
    },
    {
        name: "Home 8",
        routerPath: "/home-8",
    },
    {
        name: "Home 9",
        routerPath: "/home-9",
    },
    {
        name: "Home 10",
        routerPath: "/home-10",
    },
];

const listing = [
    {
        id: 1,
        title: "Listing Grid",
        items: [
            {
                name: "Grid v1",
                routerPath: "/listing-grid-v1",
            },
            {
                name: "Grid v2",
                routerPath: "/listing-grid-v2",
            },
            {
                name: "Grid v3",
                routerPath: "/listing-grid-v3",
            },
            {
                name: "Grid v4",
                routerPath: "/listing-grid-v4",
            },
            {
                name: "Grid v5",
                routerPath: "/listing-grid-v5",
            },
            {
                name: "Grid v6",
                routerPath: "/listing",
            },
        ],
    },
    {
        id: 2,
        title: "Listing List",
        items: [
            {
                name: "List V1",
                routerPath: "/listing-list-v1",
            },
        ],
    },
    {
        id: 3,
        title: "Listing Style",
        items: [
            {
                name: "Parallax Style",
                routerPath: "/parallax-style",
            },
            {
                name: "Slider Style",
                routerPath: "/slider-style",
            },
            {
                name: "Map Header",
                routerPath: "/map-header",
            },
        ],
    },
    {
        id: 4,
        title: "Listing Half",
        items: [
            {
                name: "Map V1",
                routerPath: "/listing-map-v1",
            },
            {
                name: "Map V2",
                routerPath: "/listing-map-v2",
            },
            {
                name: "Map V3",
                routerPath: "/listing-map-v3",
            },
            {
                name: "Map V4",
                routerPath: "/listing-map-v4",
            },
        ],
    },
    {
        id: 5,
        title: "Agent View",
        items: [
            {
                name: "Agent V1",
                routerPath: "/agent-v1",
            },
            {
                name: "Agent V2",
                routerPath: "/agent-v2",
            },
            {
                name: "Agent Details",
                routerPath: "/agent-details",
            },
        ],
    },
    {
        id: 6,
        title: "Agencies View",
        items: [
            {
                name: "Agencies V1",
                routerPath: "/agency-v1",
            },
            {
                name: "Agencies V2",
                routerPath: "/agency-v2",
            },
            {
                name: "Agencies Details",
                routerPath: "/agency-details",
            },
        ],
    },
    {
        id: 7,
        title: "Create Listing",
        items: [
            {
                name: "Create Listing",
                routerPath: "/create-listing",
            },
        ],
    },
];

const property = [
    {
        id: 1,
        title: "User Admin",
        items: [
            {
                name: "Dashboard",
                routerPath: "/my-dashboard",
            },
            {
                name: "My Properties",
                routerPath: "/my-properties",
            },
            {
                name: "My Message",
                routerPath: "/my-message",
            },
            {
                name: "My Review",
                routerPath: "/my-review",
            },
            {
                name: "My Favourites",
                routerPath: "/my-favourites",
            },
            {
                name: "My Profile",
                routerPath: "/my-profile",
            },
            {
                name: "My Package",
                routerPath: "/my-package",
            },
            {
                name: "My Saved Search",
                routerPath: "/my-saved-search",
            },
            {
                name: "Add Property",
                routerPath: "/create-listing",
            },
        ],
    },
    {
        id: 2,
        title: "Listing Single",
        items: [
            {
                name: "Single V1",
                routerPath: "/listing-details",
            },
            {
                name: "Single V2",
                routerPath: "/listing-details-v2",
            },
            {
                name: "Single V3",
                routerPath: "/listing-details-v3",
            },
            {
                name: "Single V4",
                routerPath: "/listing-details-v4",
            },
        ],
    },
];

const blog = [
    {id: 1, name: "Blog List 1", routerPath: "/blog-list-1"},
    {id: 2, name: "Blog List 2", routerPath: "/blog-list-2"},
    {id: 3, name: "Blog List 3", routerPath: "/blog-list-3"},
    {
        id: 4,
        name: "Blog Details",
        routerPath: "/blog-details",
    },
];

const pages = [
    {
        name: "About Us",
        routerPath: "/about-us",
    },
    {
        name: "Gallery",
        routerPath: "/gallery",
    },
    {
        name: "Faq",
        routerPath: "/faq",
    },
    {
        name: "LogIn",
        routerPath: "/login",
    },
    {name: "Compare", routerPath: "/compare"},
    {name: "Membership", routerPath: "/membership"},

    {
        name: "Register",
        routerPath: "/register",
    },
    {
        name: "Service",
        routerPath: "/service",
    },
    {
        name: "404 Page",
        routerPath: "/404",
    },
    {
        name: "Terms & Conditions",
        routerPath: "/terms",
    },
];

const MobileMenuContent = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <>
            <div className="sidebar-header">
                <Link href="/" className="sidebar-header-inner">
                    <Image
                        width={40}
                        height={45}
                        className="nav_logo_img img-fluid mt20"
                        src="/assets/images/header-logo3.png"
                        alt="header-logo.png"
                    />
                    <span className="brand-text">JXRE</span>
                </Link>
                {/* End .logo */}

                <div
                    className="fix-icon"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    <span className="flaticon-close"></span>
                </div>
                {/* Mobile Menu close icon */}
            </div>

            {/* End logo */}
            {/* <Sidebar> */}
            <div style={{maxHeight: 'calc(100vh - 100px)', overflowY: 'auto'}}>
                <Menu>
                    {/* End pages Pages */}
                    <MenuItem>
                        <div
                            onClick={() => router.push("/")}

                            className={
                                pathname === "/" ? "ui-active" : 'inactive-mobile-menu'
                            }
                        >
                            Home
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div onClick={() => router.push("/#feature-property")}>
                            Featured
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div onClick={() => router.push("/#property-city")}>
                            Cities
                        </div>
                    </MenuItem>

                    <SubMenu label="Commercial">
                        <MenuItem>
                            <div onClick={() => router.push("/listing?commercial_units=0")}>
                                Without Property
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div onClick={() => router.push("/listing?min_commercial_units=1")}>
                                With Property
                            </div>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu label="Residential">
                        <MenuItem>
                            <div onClick={() => router.push("/listing?residential_type=house")}>
                                House
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div onClick={() => router.push("/listing?residential_type=townhouse")}>
                                Townhouse
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div onClick={() => router.push("/listing?residential_type=condo")}>
                                Condo
                            </div>
                        </MenuItem>
                    </SubMenu>

                    <MenuItem>
                        <div onClick={() => router.push("/#new-properties")}>
                            New Properties
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div
                            onClick={() => router.push("/contact")}

                            className={
                                pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'
                            }
                        >
                            Contact
                        </div>
                    </MenuItem>

                    {/*<MenuItem>*/}
                    {/*  <div*/}
                    {/*  onClick={()=>router.push("/login")}*/}

                    {/*    className={pathname === "/login" ? "ui-active" : 'inactive-mobile-menu'}*/}
                    {/*  >*/}
                    {/*    <span className="flaticon-user"></span> Login*/}
                    {/*  </div>*/}
                    {/*</MenuItem>*/}

                    {/*<MenuItem>*/}
                    {/*  <div*/}
                    {/*  onClick={()=>router.push("/register")}*/}

                    {/*    className={*/}
                    {/*      pathname === "/register" ? "ui-active" : 'inactive-mobile-menu'*/}
                    {/*    }*/}
                    {/*  >*/}
                    {/*    <span className="flaticon-edit"></span> Register*/}
                    {/*  </div>*/}
                    {/*</MenuItem>*/}
                </Menu>
            </div>
            {/* </Sidebar> */}


            <Link
              href="/listing"
              className="btn btn-block btn-lg btn-thm circle"
              style={{width:'90%',margin:'0px auto'}}
            >
                All Properties
            </Link>
        </>


    );
};

export default MobileMenuContent;
