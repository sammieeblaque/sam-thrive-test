import { OrganisationsType, ReposType } from "@types";
import { config } from "config";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleUser = (): JSX.Element => {
  const [userInfo, setuserInfo] = useState<ReposType[]>([]);
  const [userOrg, setUserOrg] = useState<OrganisationsType[]>([]);
  const { login } = useParams();
  const { GET_USER } = config;

  const fetchGituserRepos = async () => {
    try {
      // login refers the the user github name.
      const res = await fetch(`${GET_USER}${login}/repos`);
      const data = await res.json();
      setuserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchGitUserOrgs = async () => {
    try {
      // login refers the the user github name.
      const res = await fetch(`${GET_USER}${login}/orgs`);
      const data = await res.json();
      setUserOrg(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGituserRepos();
    fetchGitUserOrgs();
  }, []);

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
        <section className="bg-base-400 w-3/4 mt-12 rounded-md shadow-xl px-3 py-8 flex justify-around items-center">
          <section className="w-2/5">
            <h3 className="font-bold">Organisations</h3>
            {userOrg.length > 0
              ? userOrg.slice(0, 5).map((user) => (
                  <section key={user.id} className="font-semibold p-2">
                    <p>Name: {user.login ?? "No User Login"}</p>
                    <p>
                      Description: {user.description ?? "No User Description"}
                    </p>
                  </section>
                ))
              : "No Organisations Associated with user"}
          </section>
          <section>
            <section className="w-5/5">
              <h3 className="font-bold">Repos</h3>
              {userInfo.length > 0
                ? userInfo.slice(0, 5).map((repo) => (
                    <section key={repo.id} className="font-semibold p-2">
                      <p>Name: {repo.name}</p>
                      <p>Description: {repo.full_name}</p>
                    </section>
                  ))
                : "No Repos Associated with user"}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SingleUser;
