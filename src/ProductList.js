import React from 'react'
import Product from './Product'

let arr5=[{title:"Home Security",price:`$340`,desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non auctor mauris. Fusce ultrices mattis mattis. Aliquam sapien risus, dignissim quis magna non, congue molestie sapien. Quisque quis eros in sapien aliquam convallis sit amet quis ipsum. Donec eu enim pretium, vulputate mi eget, condimentum augue. Suspendisse potenti.'},{title:"Office Security",price:`$340`,desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non auctor mauris. Fusce ultrices mattis mattis. Aliquam sapien risus, dignissim quis magna non, congue molestie sapien. Quisque quis eros in sapien aliquam convallis sit amet quis ipsum. Donec eu enim pretium, vulputate mi eget, condimentum augue. Suspendisse potenti.'},{title:"CCTV Cameras",price:`$340`,desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non auctor mauris. Fusce ultrices mattis mattis. Aliquam sapien risus, dignissim quis magna non, congue molestie sapien. Quisque quis eros in sapien aliquam convallis sit amet quis ipsum. Donec eu enim pretium, vulputate mi eget, condimentum augue. Suspendisse potenti.'}]

const ProductList = (props) => {
  return (
    <div className='prod-list-wrap'>
        <div className='container'>
            <div className='text-center'>
                <h2>Product List</h2>
            </div>
            {arr5.map(function(d,i){
                return(
                    <div className='prod-item'>
                        <Product title={d.title} price={d.price} desc={d.desc}/>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductList