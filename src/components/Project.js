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
        <section>
          <article>
            <h3></h3>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <p>
                <span></span>
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
// you are at 1:17:35 in the youtube video //
