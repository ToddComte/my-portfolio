import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags,
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justifty-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap 8">
          <article className="relative rounded-lg shaow-xl bg-white p-16">
            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
              <a
                href={Project.link}
                alt={Project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Project.title}
              </a>
            </h3>
            <div className="text-gary-500 text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished On</strong>:{" "}
                {new Date(Project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>:{Project.place}
              </span>
              <span>
                <strong className="font-bold">Type</strong>:{" "}
                {Project.projectType}
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relaxd">
                {Project.description}
              </p>
              <a
                href={Project.link}
                alt={Project.title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-bold hover:underline hover:text-red-400"
              >
                <span></span>
              </a>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
// you are at 1:17:35 in the youtube video //
// you are at 1:25:36 on 04/06/2022//
