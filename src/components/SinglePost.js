import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SanityClient } from "../client.js";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  return <h1>SinglePost Page Because I'm awesome</h1>;
}
