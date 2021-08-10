import { createClient } from "contentful"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type: 'news'
    })
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps( {params} ) {
    const { items } = await client.getEntries({
      content_type: 'news',
      'fields.slug': params.slug
    })
    return {
      props: {news: items[0]}
    }
}


export default function News({news}) {
  const { title, slug, image, date, broedtext, introText } = news.fields

    return (
      <div className='card'>
        <div className='image'>
          <Image
            src={'https:' + image.fields.file.url}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        </div>
        <div className='content'>
          <div className='info'>
            <h4>{title}</h4>
            <p> {introText}</p>
            <p>{documentToReactComponents(broedtext)}</p>

          </div>
          <div className='actions'>
            <p>{date}</p>
          </div>
        </div>
        <style jsx>{`

        .card {
            max-width: 500px;
            margin: auto;
            margin-bottom: 200px
          }

        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: balck;
          background: #ff9b11;
          padding: 10px 24px;
          text-decoration: none;
        }
        .actions p {
            padding-left: 16px;
            margin-right: auto;
            font-size: 13px;
        }
      `}</style>
      </div>
    )
  }
  