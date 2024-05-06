import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo2 from './images/Bizedge_ORIGINAL 1.png';
import apple from './images/223-2231228_app-store-apple-transprent-download-on-apple-store.png';
import google from './images/download.png';



export default function Section5() {
    return (
        <Box>
            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                '@media (max-width: 768px)': {
                    display: 'none'
                }
            }}>
                <Box
                    sx={{
                        display: 'flex',

                        justifyContent: "space-evenly",
                        paddingTop: '4em',
                        width: '66em',
                        paddingBottom: '4em',


                    }} >

                    <Box
                        sx={{
                            gap: '9.5em',
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                        <img
                            src={logo2}
                            alt="logo2"
                            style={{ height: '2em', }} />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1em',

                        }}>
                            <img
                                src={apple}
                                alt="apple"
                                style={{
                                    height: '2.5em',
                                    width: '7em'
                                }} />
                            <img
                                src={google}
                                alt="google"
                                style={{
                                    height: '2.5em',
                                    width: '7em'
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: '#333333',
                                fontSize: '18px',
                                paddingBottom: '0.7em',
                                fontFamily: 'blacksansblack'
                            }}>Home</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}
                        >Homepage</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Pricing</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Terms of Service</Typography>
                        <Typography

                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Privacy Policy</Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: '#333333',
                                fontSize: '18px',
                                paddingBottom: '0.7em',
                                fontFamily: 'blacksansblack'
                            }}>Apps</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Human Resource</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Task App</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Time & Attendance</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Payroll</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Assets & Vehicles</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Accounting</Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: '#333333',
                                fontSize: '18px',
                                paddingBottom: '0.7em',
                                fontFamily: 'blacksansblack'
                            }}>Resources</Typography>
                        <Typography sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '3em'
                            , fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Help Center</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>FAQs</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Insights</Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: '#333333',
                                fontSize: '18px',
                                paddingBottom: '0.7em',
                                fontFamily: 'blacksansblack'
                            }}>Contact</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Get in Touch</Typography>
                        <Typography
                            sx={{
                                color: '#333333',
                                fontSize: '14px',
                                lineHeight: '3em'
                                , fontFamily: 'blacksans',
                                fontWeight: 'bold'
                            }}>Request a Demo</Typography>
                    </Box>
                </Box>
            </Box>





            <Box sx={{ paddingTop: '3em', paddingBottom: '4em', display: 'none', '@media (max-width: 768px)': { display: 'block', backgroundColor: '#FAFAFA'} }}>
                <img
                    src={logo2}
                    alt="logo2"
                    style={{
                        height: '2em',
                        marginLeft: '3em'
                    }} />

                <Box sx={{
                    display: 'flex',
                    paddingTop: '2em',
                    justifyContent: 'space-evenly',

                }}>
                    <Box>
                        <Box>
                            <Typography
                                sx={{

                                    color: '#333333',
                                    fontSize: '18px',
                                    paddingBottom: '0.7em',
                                    fontFamily: 'blacksansblack'
                                }}>Home</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Pricing</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Term of Service</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Privacy Policy</Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{

                                    color: '#333333',
                                    fontSize: '18px',
                                    paddingBottom: '0.7em',
                                    fontFamily: 'blacksansblack',
                                    paddingTop: '7em'
                                }}>Resources</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Help Center</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >FAQs</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Insights</Typography>
                        </Box>

                    </Box>
                    <Box>
                        <Box>
                            <Typography
                                sx={{

                                    color: '#333333',
                                    fontSize: '18px',
                                    paddingBottom: '0.7em',
                                    fontFamily: 'blacksansblack',

                                }}>Apps</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Human Resource</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Task App</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Time & Attendance</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Assets & Vehicle</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Payroll</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Accounting</Typography>

                        </Box>
                        <Box>
                            <Typography
                                sx={{

                                    color: '#333333',
                                    fontSize: '18px',
                                    paddingBottom: '0.7em',
                                    fontFamily: 'blacksansblack'
                                }}>Contact</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Get in touch</Typography>
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: '14px',
                                    lineHeight: '3em'
                                    , fontFamily: 'blacksans',
                                    fontWeight: 'bold'
                                }}
                            >Request a Demo</Typography>

                        </Box>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}