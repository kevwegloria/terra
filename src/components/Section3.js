import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Section3 () {
    return (
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '3em',
            paddingTop: '3em',
            '@media (max-width: 768px)': { display: 'none' }
        }}>
        <Box sx={{
            backgroundColor: '#2898A4',
            width: '61.5em',
            textAlign: 'center',
            borderRadius: '10px',
            paddingBottom: '1.5em',
            paddingTop: '1em'
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
            <Box sx={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5em'}}>
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
    )
}