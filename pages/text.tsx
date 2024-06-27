import React, { useState, useEffect } from "react";
import axios from "axios";

interface About {
  description: string;
  id : string;
}

function AboutPage() {
  const [about, setAbout] = useState<About[]>([]);

  useEffect(() => {
    axios.get<About[]>("https://api.worldhalal.uz/about").then((response) => {
      setAbout(response.data);
    });
  }, []);
  const map = about.map(item => {
    return(
        <p key={item.id}>{item.description}</p>
    )
  })

  return (
    <div>
     {map}
    </div>
  );
}

export default AboutPage;
