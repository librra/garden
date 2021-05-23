import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import Image from 'next/image'
import Link from 'next/link'

function Model({ url }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.2, -5.33]} rotation={[0.24, -0.55, 0.56]} scale={[5, 5, 5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_1.geometry}
            material={nodes.planet001_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_2.geometry}
            material={nodes.planet001_2.material}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/static/scene.glb')

const Hero = () => {
  return (
    <section className="flex items-center justify-center py-16 min-w-screen">
      <div className="absolute top-0 right-0 z-0 w-full h-full overflow-y-visible">
        <Canvas dpr={[1.5, 2]} linear shadows>
          <fog attach="fog" args={['#272730', 16, 30]} />
          <ambientLight intensity={0.75} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={1} position={[-10, -25, -10]} />
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          <Suspense fallback={null}>
            <Model url="/static/scene.glb" />
          </Suspense>
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars radius={500} depth={30} count={600} factor={10} />
        </Canvas>
        <Loader />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0 xl:w-6/12 sm:z-10">
            <p className="mb-2 text-base font-medium tracking-tight text-green-600 uppercase">
              Digital Garden of
            </p>
            <div className="flex flex-col md:flex-row justify-start items-center">
              <Image
                src="/static/images/avatar.png"
                alt="An image about David Levai"
                className="border-2 border-gray-200 rounded-none w-24 h-24 shadow-md"
                width={56}
                height={56}
                layout="fixed"
                quality={60}
                priority
                loading="eager"
              />
              <h2 className="ml-2 text-3xl font-extrabold font-display leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
                Dávid Lévai
              </h2>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-200">
              I'm a Part-Time Creator creating content about building IT businesses and
              production-ready apps. This is my personal site where I post about my journey and
              things that I am interested in.
            </p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-200">
              Generally speaking building business, building apps, freelancing, productivity,
              working out, and some other millenial things. If you are interested in these, look
              around.
            </p>
            <Link href="https://twitter.com/iamdavidlevai">
              <a
                className="my-3 font-bold text-sm leading-6 text-green-600 flex flex-row items-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                I'm talking on Twitter too
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 36 36"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 sm:z-10">
            <Link href="/projects">
              <div className="flex flex-col items-start justify-between p-6 dark:bg-darkBgLight shadow rounded-none mt-4 group hover:bg-gray-100 hover:bg-opacity-80 dark:hover:bg-opacity-40 dark:hover:bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 dark:bg-opacity-50 transition duration-200 cursor-pointer">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="leading-6 text-center text-gray-700 dark:text-gray-50 align-middle stroke-current w-12 h-12"
                  >
                    <path d="M4 17L10 11 4 5" />
                    <path d="M12 19L20 19" />
                  </svg>
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                    Projects
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    In 2021, I started building in public. Check these out to learn how to create
                    production-ready software.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/content">
              <div className="flex flex-col items-start justify-between p-6 dark:bg-darkBgLight shadow rounded-none mt-4 group hover:bg-gray-100 hover:bg-opacity-80 dark:hover:bg-opacity-40 dark:hover:bg-gray-500 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 dark:bg-opacity-50 transition duration-200 cursor-pointer">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="leading-2 text-center text-gray-700 dark:text-gray-50 align-middle stroke-current w-12 h-12"
                  >
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                    Content
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    Videos and written notes about freelancing, and building production-ready apps.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/mentoring">
              <div className="flex flex-col items-start justify-between p-6 bg-white dark:bg-darkBgLight shadow rounded-none mt-4 group hover:bg-gray-100 hover:bg-opacity-80 dark:hover:bg-opacity-40 dark:hover:bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 dark:bg-opacity-50 transition duration-200 cursor-pointer">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="leading-2 text-center text-gray-700 dark:text-gray-50 align-middle stroke-current w-12 h-12"
                  >
                    <path d="M23 6L13.5 15.5 8.5 10.5 1 18" />
                    <path d="M17 6L23 6 23 12" />
                  </svg>
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                    Mentoring
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    I help software developers how to become freelancers, and how to grow themselves
                    in business.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
