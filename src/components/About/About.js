import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import './About.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paragraphs: {
        textIndent: '20px',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function About() {
    const classes = useStyles()

    return (
        <Container>
            <Grid container >
                <Grid container item direction='column'>
                    <Typography variant='h4'>About Me</Typography>
                    <Grid item direction='row'>

                        <Grid item sm>

                            <img id="profilePicture" src={`${process.env.PUBLIC_URL}/assets/images/about-me.png`} alt="Mikael Fallesen"
                                className="float-left responsive" />
                        </Grid>
                        <Grid item sm>

                            <Typography variant='body1' paragprah={true} className={classes.paragraphs}>   I am an army combat veteran with two years professional experience working on building websites and web
                            applications for individuals and companies. I have a passion for learning new things and technologies but at
                            the same time am not afraid to go back to basics when necessary. In my spare time I enjoy being outdoors
                            with my family, studying literature, working out, or scale model making.</Typography>

                            <Typography variant='body1' paragprah={true} className={classes.paragraphs}>   Working with technology has always been a passion for me and more so when I'm able to get underneath the hood
                            of a project. I'm always up for a new challenge or task and I adapt easily to work environments regardless of
                            the situation. As a veteran I understand the importance and effectiveness of timely communication and
            execution to not only deliver results but to also surpass expectations.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}


