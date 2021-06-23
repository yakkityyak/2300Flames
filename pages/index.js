import React from 'react'
import { createClient } from "contentful"
import PlayerCard from "../components/PlayerCard"


export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: "player"})
  console.log(res)
  return {
    props: {
      players: res.items
    }
  }

}

export default function Players({ players }) {
  console.log(players)

  return (
    <div className="trup">
      {players.map(player => (
        <PlayerCard key={player.sys.id} player={player}/>
      ))}

      <style jsx>{`
        .trup{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px 60px;
      `}</style>
    </div>
  )
}