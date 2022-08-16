import React, { useState, useEffect } from "react";

const initProfile = {
  followers: null,
  publicRepos: null,
};
function Fetch() {
  const [profile, setprofile] = useState(initProfile);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async() =>{
    const response = await fetch('https://api.github.com/users/mohamedsufiyangafoor');
    const jsonResponse = await response.json();
    setprofile({
        followers : jsonResponse.followers,
        publicRepos : jsonResponse.public_repos
    })
  }

  return (
    <div>
      <h1>Fetch Data</h1>
      <p>
        {`Followers : ${profile.followers} `}
      </p>
      <p>
        {`Public Repositories : ${profile.publicRepos} `}
      </p>
    </div>
  );
}

export default Fetch;
