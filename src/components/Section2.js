import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import quote from './images/Vector.png'

export default function Section2() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                gap: '7em',
                justifyContent: 'center',
               
                paddingTop: '4em',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    justifyContent: 'center',

                }
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '26.2em',
                    
                    '@media (max-width: 768px)': {
                        width: '22em'
                    }
                }}>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontFamily: 'blacksansbold',
                            fontSize: '25px',
                            marginBottom: '0.5em',
                            width: '17.2em',
                            '@media (max-width: 768px)': {

                                width: '12.5em'

                            }
                        }}>The Challenge</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',
                            marginBottom: '1em',
                            width: '39em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '11.5px'

                            }
                        }}>As a multi-location business, Sandra Igwe HR for TerraKulture faced significant challenges in managing employee attendance. The organization's appraisals and bonuses are intricately tied to meticulous attendance records, which shape monthly and yearly performance evaluations.
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',
                            marginBottom: '1em',
                            width: '39em',
                            '@media (max-width: 768px)': {
                                width: '27em',
                                fontSize: '11.5px'

                            }
                        }}>Terra Kulture is an independent educational and recreational organization dedicated to promoting the richness and diversity of Nigerian languages, arts, and culture. However, within their unique operational landscape, accurately tracking employee clock-in attendance has become a major hurdle.</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',

                            width: '39em',
                            '@media (max-width: 768px)': {
                                width: '27.5em',
                                fontSize: '11.5px'

                            }
                        }}>Like many diverse businesses, Terra Kulture encounters complexities in overseeing attendance records for a team engaged in various activities. From main office staff to individuals involved in educational programs, cultural events, and recreational activities, the distribution of roles across different facets of the organization poses challenges for seamless communication and attendance tracking.</Typography>
                    <Box sx={{

                        borderLeft: '5px solid #2898A4',
                        backgroundColor: '#F6F6F6',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        position: 'relative',
                        marginBottom: '3em',
                        marginTop: '3em',
                        width: '27em',
                        '@media (max-width: 768px)': {
                            width: '27em',
                            fontSize: '12px',
                            marginTop: '4em',
                            marginBottom: '4em'

                        }
                    }}>
                        <img
                            src={quote}
                            alt="quote"
                            className="quote"
                        />
                        <Box sx={{
                            paddingLeft: '2em',



                        }}>
                            <Typography
                                sx={{
                                    fontFamily: 'blacksans',
                                    color: '#171717',
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                    '@media (max-width: 768px)': {
                                        width: '23em',
                                        fontSize: '12px'

                                    }
                                }}>From main office staff to individuals on the field, Terra Kulture encountered complexities in overseeing attendance records.</Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'blacksans',
                                    color: '#545454',
                                    fontWeight: 'bold',
                                    fontSize: '8px',


                                }}>Head of Human Resources</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '27em',
                            '@media (max-width: 768px)': {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '20em'

                            }
                        }} >
                        <Typography
                            sx={{
                                color: '#171717',
                                fontFamily: 'blacksansbold',
                                fontSize: '25px',
                                marginBottom: '0.5em',
                                '@media (max-width: 768px)': {
                                    width: '11em',

                                }
                            }}>The Solution</Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',
                                marginBottom: '1em',
                                width: '40em',
                                '@media (max-width: 768px)': {
                                    width: '28em',
                                    fontSize: '11.5px'

                                }
                            }}>With BizEdge Attendance Management, Terra kulture can now track their employees’ arrival and closing time from their laptops or mobile devices.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',
                                marginBottom: '1em',
                                width: '40em',
                                '@media (max-width: 768px)': {
                                    width: '28em',
                                    fontSize: '12px'

                                }
                            }}><span
                                style={{ fontSize: '11px', fontFamily: 'blacksansblack' }}>MyEdge (Employee Self Service):</span> With just a tap, employees can simply clock in and clock out from assigned locations (onsite or remotely).
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',
                                marginBottom: '1em',
                                width: '40em',
                                '@media (max-width: 768px)': {
                                    width: '27em',
                                    fontSize: '11.5px'

                                }
                            }}><span style={{ fontSize: '11px', fontFamily: 'blacksansblack' }}>Shared location:</span> Employees on field work can also share their location in cases where the HR wants to view the locations.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',
                                marginBottom: '1em',
                                width: '40em',
                                '@media (max-width: 768px)': {
                                    width: '27em',
                                    fontSize: '11.5px'

                                }
                            }}><span style={{ fontSize: '11px', fontFamily: 'blacksansblack' }}>Ease of Use:</span> BizEdge is an easy-to-use product. It’s intuitive, it’s easy to use for both low-tech and high-tech employees.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',
                                marginBottom: '1em',
                                width: '40em',
                                '@media (max-width: 768px)': {
                                    width: '27em',
                                    fontSize: '11.5px'

                                }
                            }}><span style={{ fontSize: '11px', fontFamily: 'blacksansblack' }}>Implementation and Customer Support:</span> Onboarding was a breeze within the timeline given. The support team is responsive and the product is continually growing.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',
                                marginBottom: '4em',
                                width: '40em',
                                '@media (max-width: 768px)': {
                                    width: '25em',
                                    fontSize: '12px'

                                }
                            }}><span style={{ fontSize: '11px', fontFamily: 'blacksansblack' }}>Leveraging other apps in the suite:</span> Signing up to the BizEdge app provided TerraKulture with other HR, Payroll and Productivity solutions in one place; Core HR, Payroll, Task Management,</Typography>
                    </Box>
                    <Box
                        sx={{
                            '@media (max-width: 768px)': {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',

                                width: '20em'
                            }
                        }}>
                        <Typography
                            sx={{
                                color: '#171717',
                                fontFamily: 'blacksansbold',
                                fontSize: '25px',
                                marginBottom: '0.5em',
                                width: '17.2em',
                                '@media (max-width: 768px)': {
                                    width: '13.5em',



                                }
                            }}>The Result</Typography>
                        <Typography
                            sx={{
                                fontFamily: 'blacksans',
                                fontWeight: 'bold',
                                color: '#545454',
                                fontSize: '11px',

                                width: '38em',
                                '@media (max-width: 768px)': {
                                    width: '28em',
                                    fontSize: '11.5px'

                                }
                            }}>Before BizEdge, Sandra Igwe, Terrakulture’s HR spent valuable time manually monitoring data, leading to inaccuracies. Since implementing BizEdge, average employee performance has im proved by up to 35%, allowing employees to be more punctual and productive. Managers now have oversight of accurate time tracking data, resulting in a reduction of her workload by over 10%, enabling her to focus on more important tasks.</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    '@media (max-width: 768px)': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: '1.2em',
                        paddingBottom: '1em'



                    }
                }}>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontFamily: 'blacksansbold',
                            fontSize: '16.5px',
                            marginBottom: '0.5em',
                            '@media (max-width: 768px)': {


                            }

                        }}>About TerraKulture</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',
                            marginBottom: '1em',
                            width: '26em'
                        }}>Terra Kulture Arts and Studios Limited, headquartered in Lagos, was established in 2003 to celebrate Nigerian languages, arts, and culture. With employees spread across various states, they rely on BizEdge Attendance Management for precise attendance tracking.</Typography>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontFamily: 'blacksansbold',
                            fontSize: '16.5px',
                            marginBottom: '0.5em',
                            '@media (max-width: 768px)': {
                                width: '20em'
                            }
                        }}>Industry</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',
                            marginBottom: '1em',
                            width: '40em',
                            '@media (max-width: 768px)': {
                                width: '20em'
                            }
                        }}>Tourism</Typography>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontFamily: 'blacksansbold',
                            fontSize: '16.5px',
                            marginBottom: '0.5em',
                            '@media (max-width: 768px)': {
                                width: '20em'
                            }
                        }}>Location</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',
                            marginBottom: '1em',
                            width: '40em',
                            '@media (max-width: 768px)': {
                                width: '20em'
                            }
                        }}>Victoria Island, Lagos</Typography>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontFamily: 'blacksansbold',
                            fontSize: '16.5px',
                            marginBottom: '0.5em',
                            '@media (max-width: 768px)': {
                                width: '20em'
                            }
                        }}>Company Size</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',
                            marginBottom: '1em',
                            width: '40em',
                            '@media (max-width: 768px)': {
                                width: '20em'
                            }
                        }}>51 - 100 Employees</Typography>
                    <Button
                        sx={{
                            textTransform: 'none',
                            fontSize: '11px',
                            color: 'white',
                            padding: '10px 15px',
                            backgroundColor: '#2898A4',
                            '&:hover': {
                                backgroundColor: '#2898A4',
                                color: 'white',

                            },
                            '@media (max-width: 768px)': {
                                width: '14em'
                            }

                        }}>Download PDF Version</Button>
                </Box>
            </Box>
        </Box>
    )
}