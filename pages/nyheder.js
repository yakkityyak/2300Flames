import Head from 'next/head'
import { createClient } from "contentful"
import News from '../components/NewsList'
import styles from '../styles/Trup.module.css'

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: "news"})

  return {
    props: {
      news: res.items
    }
  }

}

export default function Home({ news }) {
  return (
    <>
    <h1 className={styles.heading}>Senete nyheder</h1>
      <Head>
        <title>FLAMMERNE | Nyheder</title>
        <meta name="keywords" content="FLAMMERNE"/>
      </Head>
      <div className="news-list">
      {news.map(news => (
        <News key={news.sys.id} news={news} />
      ))}

      <style jsx>{`
        .news-list {
          display: grid;
        }
      `}</style>
    </div>
    </>
    
  )
}