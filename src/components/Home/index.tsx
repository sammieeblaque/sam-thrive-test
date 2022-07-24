import { UserType } from "@types";
import Spinner from "components/Spinner";
import UserInfo from "components/User";
import { config } from "config";
import { useState } from "react";

const Home = (): JSX.Element => {
  const [users, setUser] = useState<UserType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const { SEARCH_USERS } = config;

  const fetchUser = async () => {
    try {
      setloading(true);
      const response = await fetch(`${SEARCH_USERS}${search}`);
      const data = await response.json();
      setUser(data?.items);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (search) {
      fetchUser();
    } else {
      console.error("Your search is empty");
    }
  };
  return (
    <>
      <section className="p-4 flex flex-col">
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) fetchUser();
            }}
            placeholder="Search Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 w-1/4
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            className="ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
            onClick={handleSearch}
          >
            search
          </button>
        </div>
        <section className="mt-20 flex flex-wrap justify-center items-center gap-6">
          {users.map((user) => {
            return <UserInfo user={user} key={user.id} />;
          })}
        </section>
        <section className="mt-16">{loading ? <Spinner /> : ""}</section>
      </section>
    </>
  );
};

export default Home;
