import { config } from "config";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleUser = (): JSX.Element => {
  const [userInfo, setuserInfo] = useState<any>([]);
  const { login } = useParams();
  const { GET_USER } = config;

  const fetchGituser = async () => {
    try {
      const res = await fetch(`${GET_USER}${login}`);
      const data = await res.json();
      setuserInfo(data);
    } catch (error) {
      console.log("There was an error");
    }
  };
  useEffect(() => {
    fetchGituser();
  }, []);

  const {
    name,
    avatar_url,
    twitter_username,
    followers,
    public_repos,
    // company,
    blog,
  } = userInfo;
  return (
    <>
      <section>
        <section className="section">
          <div className="user-information">
            <Link to="/" className="back">
              <button className="btn">back home</button>
            </Link>
            <div className="image">
              <img src={avatar_url} alt="avatar" />
            </div>
            <div className="user-content">
              <div className="more-date">
                <h3>Name: {name}</h3>
                <p>{twitter_username}</p>
                <p>followers: {followers} </p>
                <p>
                  <a href={blog}>{blog}</a>
                </p>
                <p>repos:{public_repos}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SingleUser;
