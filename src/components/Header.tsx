import * as CONTENT from "../pages/content";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Header() {
  return (
    <header className="mx-auto py-8 px-5 max-h-[90vh] md:max-h-[70vh] max-w-3xl w-[95vw]">
      <article className="flex justify-between">
        <div className="rounded-full border-primary self-end shadow-2xl md:w-1/3 w-20">
          <img
            src="/profile.jpg"
            alt="profile_picture"
            className="object-cover w-full h-full md:w-1/2 lg:w-24 rounded-full"
          />
        </div>
        <Canvas camera={{ fov: 10, near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <Environment preset="studio" background />
        </Canvas>

        <div className="text-right md:text-center whitespace-nowrap md:w-1/3 md:relative">
          <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <h1 className="text-2xl md:text-3xl">{CONTENT.name}</h1>
            <h3 className="text-lg">{CONTENT.designation}</h3>
            <h5 className="text-sm">{CONTENT.location}</h5>
          </div>
        </div>

        <div className="text-right self-end hidden md:block md:w-1/3">
          <h6 className="text-sm text-text/70">{CONTENT.pronouns}</h6>
          <a
            href={CONTENT.website}
            target="_blank"
            className="hover:text-blue-300"
          >
            {CONTENT.website}
          </a>
        </div>
      </article>
    </header>
  );
}
