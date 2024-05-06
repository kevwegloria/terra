import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import story1 from './images/image 25.png';
import story2 from './images/272035429_682724012880443_2800446078448495875_n 1.png';
import story3 from './images/image 11.png';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function Section4() {
    return (
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#EFF5F4',


        }}>
            <Box
                sx={{
                    marginBottom: '3em',
                    width: '57em', '@media (max-width: 768px)': { display: 'none' }

                }}>


                <Typography sx={{
                    fontFamily: 'blacksansbold',
                    fontSize: '3em',
                    textAlign: 'center',
                    marginBottom: '1em',
                    marginTop: '1em',
                    color: '#171717'
                }}>More stories to explore...</Typography>



                <Grid container spacing={1}>

                    <Grid item xs={4}>
                        <Paper style={{
                            height: 410,
                            maxWidth: '18.2em',
                            borderRadius: '15px'
                        }}>
                            <img
                                src={story1}
                                alt="story1"
                                className="story1" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    marginBottom: '1em'
                                }}>Lagos, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '1.3em',
                                        marginBottom: '0.6em',
                                        color: '#0A1329'
                                    }}>Zara Investments Capital (ZCI)</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em',
                                        width: '20em'
                                    }}>See how ZCI uses BizEdge centralized platform to streamline HR processes in their organization, </Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '1em'
                                    }}>Time & Attendance</Typography>
                                <Box>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>Watch Video</Link>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>View Case Study</Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item xs={4}>
                        <Paper style={{
                            height: 410,
                            maxWidth: '18.2em',
                            borderRadius: '15px'
                        }}>
                            <img
                                src={story2}
                                alt="story2"
                                className="story2" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '1em'
                                    }}>Abuja, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '1.3em',
                                        marginBottom: '0.5em',
                                        color: '#0A1329'
                                    }}>Hareem Instanbul</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em'
                                    }}>See how Hareem Istanbul saves time with BizEdge by streamlining attendance & generating Reports in Minutes.</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '1em'
                                    }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none'
                                }}>View Case Study</Link>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item xs={4}>
                        <Paper style={{
                            height: 410,
                            maxWidth: '18.2em',
                            borderRadius: '15px'
                        }}>
                            <img
                                src={story3}
                                alt="story3"
                                className="story3" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '1em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '1.3em',
                                    marginBottom: '1em',
                                    color: '#0A1329'
                                }}>Fox Business Development Ltd</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em'
                                    }}>See how Fox Business Development Ltd uses BizEdge to automate HR.</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '1em'
                                }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study</Link>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>



            </Box>











            <Box
                sx={{
                    display: 'none',

                    '@media (max-width: 768px)': { display: 'block' },
                    paddingBottom: '1em'


                }}>


                <Typography sx={{
                    fontFamily: 'blacksansbold',
                    fontSize: '1em',
                    textAlign: 'center',
                    marginBottom: '1em',
                    paddingTop: '1.5em',
                    color: '#171717'
                }}>More stories to explore...</Typography>



                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1em' }}>

                    <Grid item xs={12}>
                        <Paper style={{
                            height: 400,
                            maxWidth: '18em',
                            borderRadius: '15px',

                        }}>
                            <img
                                src={story1}
                                alt="story1"
                                className="story1" />
                            <Box sx={{ padding: '1em', }}>
                                <Typography sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    marginBottom: '1em'
                                }}>Lagos, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '18px',
                                        marginBottom: '1em',
                                        color: '#0A1329'
                                    }}>Zara Investments Capital (ZCI)</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em'
                                    }}>See how ZCI uses BizEdge centralized platform to streamline HR processes in their organization, </Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '1em'
                                    }}>Time & Attendance</Typography>
                                <Box sx={{ paddingBottom: '1em' }}>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>Watch Video</Link>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>View Case Study</Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item xs={12}>
                        <Paper style={{
                            height: 385,
                            maxWidth: '18em',
                            borderRadius: '15px'
                        }}>
                            <img
                                src={story2}
                                alt="story2"
                                className="story2" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '1em'
                                    }}>Abuja, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '18px',
                                        marginBottom: '0.5em',
                                        color: '#0A1329'
                                    }}>Hareem Instanbul</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em'
                                    }}>See how Hareem Istanbul saves time with BizEdge by streamlining attendance & generating Reports in Minutes.</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '1em'
                                    }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none'
                                }}>View Case Study</Link>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item xs={12}>
                        <Paper style={{
                            height: 385,
                            maxWidth: '18em',
                            borderRadius: '15px'
                        }}>
                            <img
                                src={story3}
                                alt="story3"
                                className="story3" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '1em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '1em',
                                    color: '#0A1329'
                                }}>Fox Business Development Ltd</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em'
                                    }}>See how Fox Business Development Ltd uses BizEdge to automate HR.</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '1em'
                                }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study</Link>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                <Box sx={{
                    backgroundColor: 'white',
                    width: '22.24em',
                   
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    <Box sx={{
                        backgroundColor: '#2898A4',
                        width: '20em',
                        textAlign: 'center',
                        borderRadius: '10px',
                        paddingBottom: '1.5em',
                        paddingTop: '1em',
                        marginTop: '3em'
                    }}>
                        <Typography
                            sx={{
                                color: 'white',
                                fontFamily: 'blacksansbold',
                                fontSize: '17px',
                                marginBottom: '0.4em'
                            }}>Get your business on the Edge</Typography>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: '11.5px',
                                fontFamily: 'blacksans',
                                marginBottom: '2em'
                            }}>Let’s get your business moving with no hassle</Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1em',
                            flexDirection: 'column'
                        }}>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: 'white',
                                    color: '#2898A4',
                                    padding: '7px 70px',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: '#2898A4',

                                    },
                                }}>Try for free</Button>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    padding: '7px 53px',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                    border: '1px solid white',
                                }}>Request a Demo</Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}