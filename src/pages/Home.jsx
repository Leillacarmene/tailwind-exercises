import React from 'react'
import Header from '../Header'
import pic from "../assets/images/Screenshots/girl1.png"
import hey from "../assets/images/Screenshots/pine.jpg"

function Home() {
  return (
    <>
    <Header/>
    <section className='flex flex-6 bg-blue-400 "w-48 pt-11'>
        <div className='flex-6 w-1/2'>
           <img className='pt-10 rounded-lg  ' src={pic} alt=''/>
           <p className='h-48  bg-slate-400 p-3 rounded-md border-indigo-600 mt-5 italic float-end '>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor ullam illum vero laudantium quis consequuntur at,
                   neque distinctio soluta tenetur dicta aspernatur repudiandae reiciendis,
                    eaque quibusdam, ex corporis animi numquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet pariatur rem ex nihil deleniti, dolore inventore est labore aliquid harum dolorum facilis in veniam eos reprehenderit iusto odit aperiam debitis?
                    Ex officia tempore molestiae quasi delectus enim soluta non exercitationem amet rerum molestias fugit aliquid officiis.</p>
                 <span>
                 <button class="rounded-md mt-1 bg-white text-black">Save Changes</button>
                 </span>
        </div>
        <div className='min-w-48 mt-5 ml-6 text-white w-1/2'>
            <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum illo pariatur quo quibusdam! Ducimus natus inventore illum harum praesentium in culpa, fugit laudantium deserunt incidunt vitae ut? Inventore, dolores.
            Placeat neque ipsa magnam maiores eligendi asperiores distinctio quae aliquid doloremque, odit cum dolor deleniti nihil rem eum dolore ullam consequuntur! Voluptate vitae deleniti libero vel sunt minus, commodi eos?
            Voluptatibus, vitae! Fugiat quod exercitationem iste aspernatur, quae corrupti accusantium dolores velit eaque, id commodi. Minus quia totam consectetur voluptatum, culpa distinctio vel rerum. Odio rerum aspernatur cupiditate rem tempora?
            Delectus iusto odit sit consequatur exercitationem dolor et nam minus, dolorum temporibus tenetur earum sint, quia nihil inventore numquam cum veniam voluptas porro iure dignissimos, aspernatur fugiat? Nesciunt, deleniti placeat!
            Voluptatem, doloremque deserunt mollitia veniam ipsa cumque molestiae expedita autem sed modi dolorum ducimus aspernatur hic earum sunt placeat id unde tempore natus delectus sint rem quis? Doloremque, illum quis.</p>
            <span className='float-right mb-0'>
                <img className='h-80 w-96 mt-4 rounded-md ' src={hey} alt=''/>
            
            </span>
           
        </div>
    </section>
    </>
  )
}

export default Home