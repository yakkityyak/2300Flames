import Image from 'next/image'

export default function Sponsorer({ sponsorere }) {

  const { image, name } = sponsorere.fields


  return (
    <>
      <div className="card">
        <div className="image">
          <Image
            src={'https:' + image.fields.file.url}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        </div>
    
        <style jsx>{`
        .card {
            max-width: 500px;
            margin: auto;
            margin-bottom: 50px
          }
      `}</style>
      </div>
    </>
  )

}