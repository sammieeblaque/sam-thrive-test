import { config } from "config";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleUser = (): JSX.Element => {
  const [userInfo, setuserInfo] = useState<any>([]);
  const [userOrg, setUserOrg] = useState<any[]>([]);
  const { login } = useParams();
  const { GET_USER } = config;

  const fetchGituser = async () => {
    try {
      const res = await fetch(`${GET_USER}${login}`);
      const data = await res.json();
      console.log(data);
      setuserInfo(data);
    } catch (error) {
      console.log("There was an error");
    }
  };
  const fetchGitUserOrgs = async () => {
    try {
      const res = await fetch(`${GET_USER}${login}/orgs`);
      const data = await res.json();
      console.log(res);
      setUserOrg(data);
    } catch (error) {
      console.log("There was an error");
    }
  };
  useEffect(() => {
    fetchGituser();
    fetchGitUserOrgs();
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
              <h3>Name: {name ?? "N/A"}</h3>
              <p>Twitter: {twitter_username ?? "N/A"}</p>
              <p>followers: {followers ?? "N/A"} </p>
              <p>
                <a href={blog}>{blog ?? "N/A"}</a>
              </p>
              <p>repos:{public_repos ?? "N/A"}</p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SingleUser;
