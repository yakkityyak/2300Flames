import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function PlayerCard({ player }){
    const { name, thumbnail, height, weight, favoriteLeg, bio, bange } = player.fields
    console.log(bange)
    return (
        <div className="card">
            <div class="thumbnail">
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ name }</h4>
                    <p><b>Height:</b> { height } cm</p>
                    <p><b>Weight:</b> { weight } kg</p>
                    <p><b>Favorite leg:</b> { favoriteLeg }</p>
                    <p><b>Bio:</b> {documentToReactComponents(bio)}</p>
                    <p><b>Bange:</b> { (bange ? "Yes" : "No") }</p>
                </div>
            </div>
        </div>
    )
        
    
}