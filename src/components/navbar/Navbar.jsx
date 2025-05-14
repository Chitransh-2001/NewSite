"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
  Popover,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import logo from "../../../public/assets/img/logo-color.png";
import logo1 from "../../../public/assets/img/logo.png";
const Navbar = () => {
  const pages = [
    { name: "Home", path: "/" },

    {
      name: "Services",
      path: "/services",
      subOptions: [
        { name: " Ruby on Rails", path: "/services/ror" },
        { name: "  React JS", path: "/services/reactjs" },
        { name: " Node JS", path: "/services/nodejs" },
        { name: " Angulars JS", path: "/services/angularjs" },
        {
          name: "Full Stack Development",
          path: "/services/fullstackdevelopment",
        },
        {
          name: "UI/UX Development",
          path: "/services/uiuxdevelopment",
        },
        { name: " AWS", path: "/services/aws" },
        { name: " Heroku", path: "/services/heroku" },
      ],
    },
    {
      name: "Hire Developers",
      path: "/hire",
      subOptions: [
        {
          name: " Hire Ruby on Rails Developers",
          path: "/hire/rubyonrailsdevelopers",
        },
        { name: " Hire React JS Developers", path: "/hire/reactjsdevelopers" },
        {
          name: "Hire Full Stack Developers",
          path: "/hire/fullstackdevelopers",
        },
        { name: " Hire Node JS Developers", path: "/hire/nodejsdevelopers" },
        { name: "Hire Heroku Developers", path: "/hire/herokudevelopers" },
        {
          name: "Hire MERN Stack Developers",
          path: "/hire/mernstackdevelopers",
        },
      ],
    },

    { name: "Case Studies", path: "/studies" },
    // { name: "Blog", path: "/blog" },
    { name: "Start Up", path: "/startup" },
    { name: "Careers", path: "/career" },
    { name: "About us", path: "/about" },

    // { name: "Contact Us", path: "/contact" },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const pathname = usePathname(); // Get the current route
  // console.log(pathname.startsWith("/studies"),"dfds")
  // const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({});
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);
  // const [activeSubOptions, setActiveSubOptions] = useState(null);
  // const handlePopoverOpen = (event) => {
  //   setServiceAnchorEl(event.currentTarget);
  // };
  // const handlePopoverClose = () => {
  //   setServiceAnchorEl(null);
  // };
  // const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };
  const open = Boolean(serviceAnchorEl);
  return (
    <AppBar
      sx={{
        backgroundColor: isFixed ? "#fff" : "transparent",
        boxShadow: isFixed ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        position: isFixed ? "fixed" : "absolute",
        top: 0,
        width: "100%",
        transition: "all 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <Container
        className={styles.navbarContainer}
        sx={{
          padding: "10px 10% 10px 10%",
          height: "110px",
          maxWidth: "100% !important",
        }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Image
              src={isFixed ? logo : logo1}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              className={styles.iconButton}
              style={{
                backgroundColor: isFixed ? "#333" : "#fff",
                color: isFixed ? "#fff" : "#333",
                padding: "10px",
              }}
              size="medium"
              aria-label="menu"
              onClick={handleOpenDrawer}
              color="white"
            >
              <MenuIcon className={styles.iconButtonMenu} />
            </IconButton>
            {/* Drawer Sidebar */}
            <Drawer
              PaperProps={{ sx: { width: "300px" } }}
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseDrawer}
            >
              <Box sx={{ display: "flex" }}>
                <Link onClick={handleCloseDrawer} href="/" passHref>
                  <Image
                    src={logo}
                    alt="logo"
                    width={150}
                    height={20}
                    style={{ margin: "20px" }}
                  />
                </Link>
                <span onClick={handleCloseDrawer}>
                  <CloseIcon sx={{ margin: "12px", marginLeft: "60px" }} />
                </span>
              </Box>
              <List
                sx={{ margin: "20px", fontSize: "16px", fontWeight: "bold" }}
              >
                {pages.map(({ name, path, subOptions }) => (
                  <Box key={name}>
                    {subOptions ? (
                      <ListItem onClick={() => toggleDropdown(name)}>
                        <ListItemText
                          primary={name}
                          sx={{
                            backgroundColor: pathname.startsWith(path)
                              ? "#333"
                              : "transparent",
                            color: pathname.startsWith(path) ? "#fff" : "#333",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            "& .MuiTypography-root": {
                              fontFamily: "NovemberPro-Reg ",
                            },
                          }}
                        />
                        <ArrowDropDownIcon />
                      </ListItem>
                    ) : (
                      <ListItem key={name} onClick={handleCloseDrawer}>
                        <Link
                          href={path}
                          passHref
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <ListItemText
                            sx={{
                              backgroundColor:
                                pathname === path ||
                                (path === "/studies" &&
                                  pathname.startsWith("/studies"))
                                  ? "#333"
                                  : "transparent",
                              color:
                                pathname === path ||
                                (path === "/studies" &&
                                  pathname.startsWith("/studies"))
                                  ? "#fff"
                                  : "#333",
                              padding:
                                pathname === path ? "10px 20px" : "5px 15px",
                              borderRadius:
                                pathname === path ||
                                (path === "/studies" &&
                                  pathname.startsWith("/studies"))
                                  ? "10px"
                                  : "",
                              "& .MuiTypography-root": {
                                fontFamily: "NovemberPro-Reg ",
                              },
                            }}
                            primary={name}
                            className={styles.navText}
                          />
                        </Link>
                      </ListItem>
                    )}
                    {openDropdown[name] && (
                      <List sx={{ pl: 4 }}>
                        {subOptions.map((sub) => (
                          <ListItem
                            key={sub.name}
                            component={Link}
                            href={sub.path}
                            onClick={handleCloseDrawer}
                          >
                            <ListItemText
                              primary={sub.name}
                              sx={{
                                "& .MuiTypography-root": {
                                  fontFamily: "NovemberPro-Reg ",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                ))}
              </List>
              <Link href="/contact" passHref>
                <Button
                  sx={{
                    fontSize: "16px",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    padding: "7px 15px",
                    margin: "9px 35px 0 35px",
                    fontFamily: "NovemberPro-Reg",
                    color: "#fff",
                    backgroundColor: "#B30000",
                  }}
                >
                  Contact{" "}
                </Button>
              </Link>
            </Drawer>
          </Box>
          {/* Desktop Navigation */}
          <Box
            className={styles.navAlign}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "40px",
              marginTop: "13px",
            }}
          >
            {pages.map(({ name, path, subOptions }) => (
              <Box
                key={name}
                sx={{ marginTop: pathname === path || subOptions ? "5px" : "" }}
                className={
                  pathname === path ||
                  subOptions ||
                  pathname.startsWith("/studies/services")
                    ? ""
                    : styles.navOption1
                }
              >
                {subOptions ? (
                  <div
                    style={{
                      fontWeight: "700",
                      textDecoration: "none",
                      fontFamily: "NovemberPro-Reg",
                      cursor: "pointer",
                      transition: "color 0.3s, background-color 0.3s",
                      backgroundColor:
                        // pathname === path
                        //   ? isFixed
                        //     ? "#333"
                        //     : "#fff"
                        //   : "transparent",
                        pathname.startsWith(path)
                          ? isFixed
                            ? "#333"
                            : "#fff"
                          : "transparent",
                      color:
                        // pathname === path
                        //   ? isFixed
                        //     ? "#fff"
                        //     : "#333"
                        //   : isFixed
                        //   ? "#333"
                        //   : "#fff",
                        pathname.startsWith(path)
                          ? isFixed
                            ? "#fff"
                            : "#333"
                          : isFixed
                          ? "#333"
                          : "#fff",
                      padding: pathname === path ? "10px 20px" : " ",
                      // borderRadius: pathname === path ? "5px" : "",
                      // padding: pathname.startsWith("/services") ? "10px 20px" : "5px 15px",
                      borderRadius: pathname === path ? "5px" : "5px",
                    }}
                    className={styles.dropdown}
                    onMouseEnter={() => toggleDropdown(name, true)}
                    onMouseLeave={() => toggleDropdown(name, false)}
                  >
                    <button className={styles.dropbtn}>
                      {name}
                      {/* <i className="fa fa-caret-down"></i> */}
                      {/* <ArrowDropDownIcon
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                      /> */}
                    </button>
                    {openDropdown[name] && (
                      <div className={styles.dropdownContent}>
                        {subOptions?.map((item, index) => (
                          <Link key={item.name} href={item?.path}>
                            {item?.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={path} passHref>
                    <Typography
                      className={styles.navOption}
                      sx={{
                        my: 2,
                        mx: 1.2,
                        fontWeight: "bold",
                        textDecoration: "none",
                        fontFamily: "NovemberPro-Reg",
                        cursor: "pointer",
                        transition: "color 0.3s, background-color 0.3s",
                        backgroundColor:
                          path === "/studies" && pathname.startsWith("/studies")
                            ? isFixed
                              ? "#333"
                              : "#fff"
                            : pathname === path
                            ? isFixed
                              ? "#333"
                              : "#fff"
                            : "transparent",
                        color:
                          path === "/studies" && pathname.startsWith("/studies")
                            ? isFixed
                              ? "#fff"
                              : "#333"
                            : pathname === path
                            ? isFixed
                              ? "#fff"
                              : "#333"
                            : isFixed
                            ? "#333"
                            : "#fff",
                        padding: pathname === path ? "10px 20px" : "5px 15px",
                        borderRadius:
                          pathname === path ||
                          (path === "/studies" &&
                            pathname.startsWith("/studies"))
                            ? "5px"
                            : "",
                        marginTop: pathname === path ? "6px" : "10px",
                      }}
                    >
                      {name}
                    </Typography>
                  </Link>
                )}
                {/* Move the Popover inside the Box to avoid syntax errors */}
              </Box>
            ))}
            <Link href="/contact" passHref>
              <Button
                sx={{
                  fontSize: { lg: "16px", md: "14px", sm: "16px", xs: "14px" },
                  textTransform: "capitalize",
                  fontWeight: "700",
                  padding: "7px 15px",
                  margin: "9px 0 0 10px",
                  fontFamily: "NovemberPro-Reg",
                  color: "#fff",
                  backgroundColor: "#B30000",
                }}
              >
                Contact{" "}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
