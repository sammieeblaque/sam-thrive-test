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
      <section className="p-5">
        <Link to="/">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded-lg pt-1">
            back home
          </button>
        </Link>
      </section>
      <section className="flex justify-center mt-16">
        <section className="bg-base-400 w-2/4 mt-12 rounded-md shadow-xl px-3 py-8 flex justify-around items-center">
          <section className="w-2/5">
            <img
              src={avatar_url}
              alt="avatar"
              className="rounded-xl border border-neutral-700"
            />
          </section>
          <section>
            <section className="font-semibold">
              <h3>Name: {name}</h3>
              <p>{twitter_username}</p>
              <p>followers: {followers} </p>
              <p>
                <a href={blog}>{blog}</a>
              </p>
              <p>repos:{public_repos}</p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SingleUser;
