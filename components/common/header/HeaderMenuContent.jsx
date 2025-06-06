'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";


const HeaderMenuContent = ({float = ""}) => {
    const pathname = usePathname();

    const home = [
        {
            id: 1,
            name: "Home 1",
            routerPath: "/",
        }
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
        {id: 1, name: "About Us", routerPath: "/about-us"},
        {id: 2, name: "Gallery", routerPath: "/gallery"},
        {id: 3, name: "Faq", routerPath: "/faq"},
        {id: 4, name: "LogIn", routerPath: "/login"},
        {id: 5, name: "Compare", routerPath: "/compare"},
        {id: 6, name: "Membership", routerPath: "/membership"},

        {id: 7, name: "Register", routerPath: "/register"},
        {id: 8, name: "Service", routerPath: "/service"},
        {id: 9, name: "404 Page", routerPath: "/404"},
        {id: 10, name: "Terms & Conditions", routerPath: "/terms"},
    ];

    return (
        <ul
            id="respMenu"
            className="ace-responsive-menu text-end d-lg-block d-none"
            data-menu-style="horizontal"
        >
            <li className="dropitem">
                <a
                    href="/"
                    className={
                        home.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
                            ? "ui-active"
                            : undefined
                    }
                >
                    <span className="title">Home</span>
                </a>
                {/* <!-- Level Two--> */}
            </li>
            {/* End .dropitem */}

            <li className="dropitem">
                <a
                    href="/#feature-property"
                >
                    <span className="title">Featured</span>
                </a>
                {/* <!-- Level Two--> */}
            </li>

            <li className="dropitem">
                <a
                    href="/#property-city"
                >
                    <span className="title">Provinces</span>
                </a>
                {/* <!-- Level Two--> */}
            </li>


            <li className="dropitem">
                <a href="#">
                    <span className="title">Commercial</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub-menu">
                    <li>
                        <Link
                            href="/listing?commercial_units=without"
                            className={pathname === "/listing" && new URLSearchParams(window.location.search).get('commercial_units') === '0' ? "ui-active" : undefined}
                        >
                            Without Property
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/listing?commercial_units=with"
                            className={pathname === "/listing" && new URLSearchParams(window.location.search).get('min_commercial_units') === '1' ? "ui-active" : undefined}
                        >
                            With Property
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="dropitem">
                <a href="#">
                    <span className="title">Residential</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub-menu">
                    <li>
                        <Link
                            href="/listing?residential_type=house"
                            className={pathname === "/listing" && new URLSearchParams(window.location.search).get('residential_type') === 'house' ? "ui-active" : undefined}
                        >
                            House
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/listing?residential_type=townhouse"
                            className={pathname === "/listing" && new URLSearchParams(window.location.search).get('residential_type') === 'townhouse' ? "ui-active" : undefined}
                        >
                            Townhouse
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/listing?residential_type=condo"
                            className={pathname === "/listing" && new URLSearchParams(window.location.search).get('residential_type') === 'condo' ? "ui-active" : undefined}
                        >
                            Condo
                        </Link>
                    </li>
                </ul>
            </li>


            {/*<li className="dropitem">*/}
            {/*    <a*/}
            {/*        href="/#why-chose"*/}
            {/*    >*/}
            {/*        <span className="title">About</span>*/}
            {/*    </a>*/}
            {/*    /!* <!-- Level Two--> *!/*/}
            {/*</li>*/}

            {/*<li className="dropitem">*/}
            {/*    <a*/}
            {/*        href="/#new-properties"*/}
            {/*    >*/}
            {/*        <span className="title">New Properties</span>*/}
            {/*    </a>*/}
            {/*    /!* <!-- Level Two--> *!/*/}
            {/*</li>*/}

            {/*<li className="dropitem">*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className={*/}
            {/*      listing.some((parent) => {*/}
            {/*        return parent.items.some(*/}
            {/*          (page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1]*/}
            {/*        );*/}
            {/*      })*/}
            {/*        ? "ui-active"*/}
            {/*        : undefined*/}
            {/*    }*/}
            {/*  >*/}
            {/*    <span className="title">Listing</span>*/}
            {/*    <span className="arrow"></span>*/}
            {/*  </a>*/}
            {/*  /!* <!-- Level Two--> *!/*/}
            {/*  <ul className="sub-menu ">*/}
            {/*    {listing.map((item) => (*/}
            {/*      <li className="dropitem arrow" key={item.id}>*/}
            {/*        <a*/}
            {/*          href="#"*/}
            {/*          className={*/}
            {/*            item.items.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])*/}
            {/*              ? "ui-active"*/}
            {/*              : undefined*/}
            {/*          }*/}
            {/*        >*/}
            {/*          {item.title}*/}
            {/*        </a>*/}
            {/*        /!* <!-- Level Three--> *!/*/}
            {/*        <ul className="sub-menu ">*/}
            {/*          {item.items.map((val, i) => (*/}
            {/*            <li key={i}>*/}
            {/*              <Link*/}
            {/*                href={val.routerPath}*/}
            {/*                className={*/}
            {/*                  pathname?.split('/')[1] === val.routerPath?.split('/')[1]*/}
            {/*                    ? "ui-active"*/}
            {/*                    : undefined*/}
            {/*                }*/}
            {/*              >*/}
            {/*                {val.name}*/}
            {/*              </Link>*/}
            {/*            </li>*/}
            {/*          ))}*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</li>*/}
            {/*/!* End .dropitem *!/*/}

            {/*<li className="dropitem">*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className={*/}
            {/*      property.some((parent) => {*/}
            {/*        return parent.items.some(*/}
            {/*          (page) =>*/}
            {/*            page.routerPath?.split('/')[1] === pathname?.split('/')[1] */}
            {/*            // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]*/}
            {/*        );*/}
            {/*      })*/}
            {/*        ? "ui-active"*/}
            {/*        : undefined*/}
            {/*    }*/}
            {/*  >*/}
            {/*    <span className="title">Property</span>{" "}*/}
            {/*    <span className="arrow"></span>*/}
            {/*  </a>*/}
            {/*  <ul className="sub-menu ">*/}
            {/*    {property.map((item) => (*/}
            {/*      <li className="dropitem arrow" key={item.id}>*/}
            {/*        <a*/}
            {/*          href="#"*/}
            {/*          className={*/}
            {/*            item.items.some(*/}
            {/*              (page) =>*/}
            {/*                page.routerPath?.split('/')[1] === pathname?.split('/')[1] */}
            {/*                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]*/}
            {/*            )*/}
            {/*              ? "ui-active"*/}
            {/*              : undefined*/}
            {/*          }*/}
            {/*        >*/}
            {/*          {item.title}*/}
            {/*        </a>*/}
            {/*        /!* <!-- Level Three--> *!/*/}
            {/*        <ul className="sub-menu ">*/}
            {/*          {item.items.map((val, i) => (*/}
            {/*            <li key={i}>*/}
            {/*              <Link*/}
            {/*                href={val.routerPath}*/}
            {/*                className={*/}
            {/*                  pathname?.split('/')[1] === val.routerPath?.split('/')[1] */}
            {/*                  // val.routerPath + "/[id]" === pathname?.split('/')[1]*/}
            {/*                    ? "ui-active"*/}
            {/*                    : undefined*/}
            {/*                }*/}
            {/*              >*/}
            {/*                {val.name}*/}
            {/*              </Link>*/}
            {/*            </li>*/}
            {/*          ))}*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</li>*/}
            {/*/!* End .dropitem *!/*/}

            {/*<li className="dropitem">*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className={*/}
            {/*      pages.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])*/}
            {/*        ? "ui-active"*/}
            {/*        : undefined*/}
            {/*    }*/}
            {/*  >*/}
            {/*    <span className="title">Pages</span>*/}
            {/*    <span className="arrow"></span>*/}
            {/*  </a>*/}
            {/*  <ul className="sub-menu ">*/}
            {/*    {pages.map((item) => (*/}
            {/*      <li key={item.id}>*/}
            {/*        <Link*/}
            {/*          href={item.routerPath}*/}
            {/*          className={*/}
            {/*            pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined*/}
            {/*          }*/}
            {/*        >*/}
            {/*          {item.name}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</li>*/}
            {/*/!* End .dropitem *!/*/}

            {/*<li className="dropitem">*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className={*/}
            {/*      blog.some(*/}
            {/*        (page) =>*/}
            {/*          page.routerPath?.split('/')[1] === pathname?.split('/')[1] */}
            {/*          // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]*/}
            {/*      )*/}
            {/*        ? "ui-active"*/}
            {/*        : undefined*/}
            {/*    }*/}
            {/*  >*/}
            {/*    <span className="title">Blog</span>*/}
            {/*    <span className="arrow"></span>*/}
            {/*  </a>*/}
            {/*  <ul className="sub-menu ">*/}
            {/*    {blog.map((item) => (*/}
            {/*      <li key={item.id}>*/}
            {/*        <Link*/}
            {/*          href={item.routerPath}*/}
            {/*          className={*/}
            {/*            pathname?.split('/')[1] === item.routerPath?.split('/')[1]*/}
            {/*            // item.routerPath + "/[id]" === pathname?.split('/')[1]*/}
            {/*              ? "ui-active"*/}
            {/*              : undefined*/}
            {/*          }*/}
            {/*        >*/}
            {/*          {item.name}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</li>*/}
            {/*/!* End .dropitem *!/*/}

            <li className="last">
                <Link
                    href="/contact"
                    className={pathname === "/contact" ? "ui-active" : undefined}
                >
                    Contact
                </Link>
            </li>
            {/* End .dropitem */}

            {/*<li className={`list-inline-item list_s ${float}`}>*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className="btn flaticon-user"*/}
            {/*    data-bs-toggle="modal"*/}
            {/*    data-bs-target=".bd-example-modal-lg"*/}
            {/*  >*/}
            {/*    <span className="dn-lg">Login/Register</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/* End .dropitem */}

            <li className={`list-inline-item add_listing ${float}`}>
                <Link href="/listing">
                    {/*<span className="flaticon-plus"></span>*/}
                    <span className="dn-lg">All Properties</span>
                </Link>
            </li>
            {/* End .dropitem */}
        </ul>
    );
};

export default HeaderMenuContent;
