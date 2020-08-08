import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
    Info,
    InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        minWidth: 150,
        minHeight: 250,
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '64%',
            bottom: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
        },
    },
    content: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
        paddingLeft: "3px"
    },
}));

export const Cardshow = React.memo(function GalaxyCard({ clikckFunc, cardData, showData }) {
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
    const styles = useStyles();
    return (
        <>
            <Card className={styles.card} onClick={() => clikckFunc(cardData.id)}>
                <CardMedia
                    classes={mediaStyles}
                    image={
                        cardData.image
                    }
                />
                <Box py={3} px={2} className={styles.content}>
                    <Info useStyles={useGalaxyInfoStyles} >
                        <InfoTitle>{cardData.name}</InfoTitle>
                    </Info>
                </Box>
            </Card>
            <Button onClick={() => showData(cardData)}>
                show More
            </Button>
        </>
    );
});
export default Cardshow