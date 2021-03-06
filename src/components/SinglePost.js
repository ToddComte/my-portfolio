import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../client.js";
import { imageUrlBuilder } from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-blue-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="adsolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p></p>
              </div>
            </div>
          </div>
          <img />
        </header>
        <div>BLOCK CONTENT</div>
      </article>
    </main>
  );
}
