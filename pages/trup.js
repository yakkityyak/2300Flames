import React from 'react'
import { createClient } from "contentful"
import PlayerCard from "../components/PlayerCard"
import styles from '../styles/Trup.module.css'

export async function getStaticProps(){

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({content_type: "player"})
  
    return {
      props: {
        players: res.items
      }
    }
  
  }
  
  export default function Players({ players }) {
    return (
      <>
      <h1 className={styles.heading}>TRUPPEN</h1>
      <div className="trup">
        {players.map(player => (
          <PlayerCard key={player.sys.id} player={player}/>
        ))}
  
        <style jsx>{`
          .trup{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px 60px;
            margin: 0 auto;
          }
        `}
        </style>
      </div>
      </>
    )
  }