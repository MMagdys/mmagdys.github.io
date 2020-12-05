import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SlideshowOutlinedIcon from '@material-ui/icons/SlideshowOutlined';

import {PUBLICATIONS} from '../../store/publications'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
   oppositeContent: {
    flex: 0.2
  },
  actionArea: {
      paddingLeft: '1rem'
  },
  buttonLink: {
      textDecoration: 'none'
  }
}));


export default function PublicationsMain() {
    
    const classes = useStyles();

    function publicationCard (pubInfo){

        return(
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {pubInfo.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {pubInfo.abstract}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actionArea}>
                        <a target="_blank" href={pubInfo.publisher} className={classes.buttonLink}>
                            <Button size="small" color="primary" disabled={pubInfo.publisher == ""}>
                                Publisher <OpenInNewOutlinedIcon />
                            </Button>
                        </a>
                        <a target="_blank" href={pubInfo.pdfLink} className={classes.buttonLink}>
                            <Button size="small" color="primary" disabled={pubInfo.pdfLink == ""}>
                                PDF <DescriptionOutlinedIcon />
                            </Button>
                        </a>
                        <a target="_blank" href={pubInfo.presentation} className={classes.buttonLink}>
                            <Button size="small" color="primary" disabled={pubInfo.presentation == ""}>
                                Presentation <SlideshowOutlinedIcon />
                            </Button>
                        </a>
                    </CardActions>
                    </Card>
            </div>
        )
    }


    function publicationYear (yearInfo){

        let pubs = [];
        yearInfo.publications.map((pub) => {
            pubs.push(publicationCard(pub));
        })

        return(
            <div>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.oppositeContent}>
                    <Typography variant="h4" color="textSecondary">
                        {yearInfo.year}
                    </Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                    <TimelineDot color="primary" >
                        <EventOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    {pubs}
                    </TimelineContent>
                </TimelineItem>
            </div>
        )
    }

    // console.log(PUBLICATIONS);
    let content = [];

    PUBLICATIONS.map((year) => {
        content.push(publicationYear(year));
    })

  
  return (
    <div  align= "left" >
    <Timeline>
        {content}
    </Timeline>
    </div>
  );
}
