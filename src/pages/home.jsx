import React from "react";
//import logo from "../assets/images/logo2.png"
import fire from "../assets/images/inka.jpeg"
import fine from "../assets/images/from sokokuu.jpeg"
import Header from "../component/Header";
function Home() {
  return (
    <>
      <Header />
      <section >
        <div className="md:flex w-full h-6 bg-slate-500 ">
          <h1 className="w-1/3 bg-slate-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error nisi, quidem ut maxime, rem explicabo laboriosam distinctio nostrum,
            dolor dignissimos dolorem neque nihil hic saepe dolorum est deserunt reiciendis
            tenetur?</h1>
          <img className="w-60 h-6 float-right " src={fire} alt=""></img>
        </div>

      </section>

      <section className="p-6 justify-items-center">
        <div className="md:flex w-full top-9 pt-4 justify-around">
          <img className="w-1/2 shadow-md " src={fine} alt="" />
          <h1 className="w-1/2 text-4xl pt-5 bg-transparent shadow-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error nisi, quidem ut maxime, rem explicabo laboriosam distinctio nostrum,
            dolor dignissimos dolorem neque nihil hic saepe dolorum est deserunt reiciendis
            tenetur?</h1>
        </div>

        <div className="hover:break-before-right gap-8 columns-3 bg-slate-400 border-separate container mx-3 md:flex justify-around mt-2 shadow-xl box-decoration-clone">
          <h1 className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">HELLO
            <p className="bg-slate-400 shadow-xl border-separate italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo perspiciatis eos fugiat tempore reprehenderit repudiandae quasi corrupti quisquam dolor,
              ratione excepturi maiores cupiditate ex voluptatem, sequi nisi officia in ipsam.</p></h1>
          <h1 className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">HELLO
            <p className="break-before-column bg-slate-400 shadow-xl border-separate italic "> reprehenderit quo voluptatem quaerat corrupti dolore, nemo, repudiandae amet dolores autem
              minima eos iure ut ducimus quod ad aliquid numquam! Amet?
              Sequi nemo sapiente quia pariatur atque aperiam, explicabo quasi ipsam dolore sit at mollitia reprehenderit!</p></h1>
          <h1 className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">HELLO
            <p className="bg-slate-400 shadow-xl border-separate italic">
              Quis aperiam, dolor consectetur assumenda atque dignissimos debitis praesentium veniam doloremque consequatur
              cupiditate perspiciatis totam?
              Vero aliquid modi facere repudiandae reiciendis voluptatem debitis possimus perspiciatis! Placeat id deserunt reiciendis consectetur
              ullam possimus recusandae, perspiciatis et quas sint non fugiat perferendis asperiores fuga vitae dolores voluptas?</p></h1>
        </div>
      </section>

      <div className="grid-cols-3 gap-4 isolate md:isolation-auto flex bg-gray-400">
        <div>
          <h1>MY EXERCISE</h1>
          <p className="box-border border-4 hover:box-content break-inside-avoid-column ">
            You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion,
            and more. For example, use md:break-before-column to apply the
            break-before-column utility at only medium screen sizes and above.
          </p>
        </div>
        <div>
          <h1>MY EXERCISE</h1>
          <p className="box-border border-4 hover:box-content z-10">You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion,
            and more. For example, use md:break-before-column to apply the
            break-before-column utility at only medium screen sizes and above.
          </p>
        </div>
        <div>
          <h1>MY EXERCISE</h1>
          <p className="box-border border-4 hover:box-content">You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion,
            and more. For example, use md:break-before-column to apply the
            break-before-column utility at only medium screen sizes and above.
          </p>
        </div>
        <div>
          <h1>MY EXERCISE</h1>
          <p className="box-border border-4">You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion,
            and more. For example, use md:break-before-column to apply the
            break-before-column utility at only medium screen sizes and above.
          </p>
        </div>
      </div>

    </>
  )
}

export default Home;