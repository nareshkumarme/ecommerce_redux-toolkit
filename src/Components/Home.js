import React from 'react';
import image1 from '../assets/Main_img.jpg';
import image2 from '../assets/sub_image.jpg'

const Home = () => {
  return (
    <div>
      <main >
         <div className='firstrow'>
        <section className='Left-section'>
              <h1>Shop at your Door Delivery</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
              <button>Shop Now</button>

        </section>
        <section className='Right-section'>
           <img className='Mainimg' src={image1}></img>
           <img className='subimg' src= {image2}></img>
        </section>
        <section className='Right-section'>
        </section>
        </div>

        <section>
            <h1>Featured Products</h1>
            <div>
              <p>All Products</p>
            </div>
        </section>

        <section>
          <article>
            <div>
            <h3>Custom Furniture Build only for you</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
            </div>
          </article>

          <article>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Home
