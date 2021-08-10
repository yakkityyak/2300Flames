
import Head from 'next/head'
import Sponsorer from '../components/SponsorerList'
import styles from '../styles/Home.module.css'
import { createClient } from "contentful"

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "sponsorere" })

  return {
    props: {
      sponsorere: res.items
    }
  }

}

export default function Sponsorere({ sponsorere }) {
  return (
    <>
      <Head>
        <title>FLAMMERNE | Sponsorer</title>
        <meta name="keywords" content="FLAMMERNE" />
      </Head>
      <div className="sponsorer-list">
        {sponsorere.map(sponsorere => (
          <Sponsorer key={sponsorere.sys.id} sponsorere={sponsorere} />
        ))}
        <style jsx>{`
        .sponsorer-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px 60px;
          margin: 0 auto;
          //remove
          margin-bottom: 400px;
        }
      `}</style>
      </div>
    </>
  )
}