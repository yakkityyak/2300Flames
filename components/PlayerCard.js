import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Head from 'next/head'
import styles from '../styles/PlayerCard.module.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding: 15  
    }
  });

export default function PlayerCard({ player }){
    const { name, thumbnail, height, weight, age, favoriteLeg, position, bio, bange } = player.fields
    const classes = useStyles();
    return (
        <>
        <Head>
        <title>FLAMMERNE | Trup</title>
        <meta name="keywords" content="FLAMMERNE"/>
      </Head>
        <Card className={classes.root} >
            <div className="thumbnail">
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    
                />
            </div>
            <div className="content">
                <div className="info">
                    <h3 className={styles.title}>{ name }</h3>
                    <p className={styles.text}><b>Height:</b> { height } cm</p>
                    <p className={styles.text}><b>Weight:</b> { weight } kg</p>
                    <p className={styles.text}><b>Age:</b> { age }</p>
                    <p className={styles.text}><b>Favorite leg:</b> { favoriteLeg }</p>
                    <p className={styles.text}><b>Position:</b> { position }</p>
                    <p className={styles.text}><b>Bio:</b> {documentToReactComponents(bio)}</p>
                    <p className={styles.text}><b>Bange:</b> { (bange ? "Yes" : "No") }</p>
                </div>
            </div>
        </Card>
        </>
    )
        
    
}