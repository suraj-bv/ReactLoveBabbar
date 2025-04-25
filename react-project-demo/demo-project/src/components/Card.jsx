import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-main-container">
      <img src={props.img} alt="Image not found" />
      <div id="card-container">
        <h4>About me -</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate, quam harum, ipsa at tempora assumenda dicta temporibus recusandae, nihil ipsam mollitia quae consequuntur odio provident dolor ab cumque! Atque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, culpa? Rem suscipit facilis, cum blanditiis in quasi possimus minima laborum totam. Ex quas quaerat eaque nisi enim accusantium itaque fugit?
        Dolor inventore, iure adipisci ea excepturi perferendis delectus iusto odit quos dicta sed sequi magni ab quia quasi tempore impedit quas, voluptatum quisquam. Eveniet necessitatibus cupiditate sed dolorem laboriosam ipsum.
        Nesciunt officiis voluptate voluptas harum temporibus fugit, animi est accusamus eveniet laudantium cum molestiae illum non! Tempore, fuga, inventore ipsa illo cupiditate optio rem earum, magnam vero labore placeat molestias.
        Asperiores quibusdam, quia sequi consequatur fuga perspiciatis, facere officiis nesciunt porro vero magnam dolores ullam, beatae architecto tenetur! Rem dignissimos magnam quia necessitatibus iure deserunt iusto facere quis id aperiam.
        Error, dolore quibusdam culpa possimus recusandae numquam enim nobis facilis nostrum ab rerum? Aliquam sit omnis recusandae soluta molestiae fugit, totam commodi nobis ad, eaque, quasi placeat in eum veniam.</p>
      </div>
    </div>
  )
}

export default Card
