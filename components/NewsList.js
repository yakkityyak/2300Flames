import Link from 'next/link'
import Image from 'next/image'

export default function News({ news }) {

  const { title, slug, image, date, broedtext, introText } = news.fields

  return (
    <>
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

          </div>
          <div className='actions'>
            <p>{date}</p>
            <Link href={'/news/' + slug}><a>Læs mere</a></Link>

          </div>
        </div>
        <style jsx>{`

        .card {
            max-width: 500px;
            margin: auto;
            margin-bottom: 50px
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
    </>
  )
}