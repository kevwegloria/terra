import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import terra from './images/7S9A2106-scaled 1.png';
import terra2 from './images/7S9A2106-scaled 2.png'

export default function Section1() {
    return (
        <Box
            sx={{

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '5em',
                background: 'linear-gradient(to bottom, #ADE5EB 3%, #FFFFFF 75%)'
            }}>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',

                width: '100%',
                '@media (max-width: 768px)': {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}>
                <Box
                    sx={{

                        width: '50%',
                        position: 'relative',
                        paddingTop: '1em',
                        // paddingLeft: '9.5em',
                        '@media (max-width: 768px)': {

                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '9em',
                            paddingBottom: '1.5em'



                        }
                    }}>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontFamily: 'blacksansbold',
                            fontSize: '2.2em',
                            paddingBottom: '0.5em',
                            width: '12em',
                            position: 'absolute',
                            bottom: '0em',
                            left: '4em',

                            '@media (max-width: 768px)': {
                                fontSize: '1.4em',

                                top: '3.2em',
                                left: '2em',
                                fontFamily: 'blacksansblack',

                                height: 'fit-content',
                                textAlign: 'center'
                            }
                            // paddingLeft: '4.3em'
                        }}>Why TerraKulture
                        switched to BizEdge</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '11px',

                            width: '33em',
                            lineHeight: '20px',
                            position: 'absolute',

                            left: '12.8em',
                            // paddingLeft: '14em'
                            '@media (max-width: 768px)': {
                                display: 'none'
                            }
                        }}>Terra Kulture is an independent educational and recreational organization dedicated to promoting the richness and diversity of Nigerian languages, arts, and culture. However, within their unique operational landscape, accurately tracking employee clock-in attendance has become a major hurdle.</Typography>
                    <Typography sx={{
                        display: 'none',
                        '@media (max-width: 768px)': {
                            display: 'block',
                            textAlign: 'center',
                            fontFamily: 'blacksans',
                            color: '#545454',
                            fontSize: '12px',
                            width: '25.5em',
                            fontWeight: 'bold',

                        }
                    }}>Do bookkeeping the modern way. Save time, Reduce paperwork, Remove spreadsheets. Manage your finances, easily and protect your data.
                    </Typography>
                </Box>
                <Box sx={{

                    backgroundColor: 'white',
                    borderTopLeftRadius: '70px',
                    borderBottomLeftRadius: '50px',
                    position: ' relative',
                    height: '23em',

                    width: '40em',
                    marginBottom: '2em',
                   
                    '@media (max-width: 768px)': {
                        width: '100%',
                        borderRadius: '0%',
                        height: '14em'
                    }


                }}>
                    <img
                        src={terra}
                        alt="terra"
                        className="terra" />
                    <img
                        src={terra2}
                        alt="terra2"
                        className="terra2" />
                </Box>
            </Box>
        </Box>
    )
}
