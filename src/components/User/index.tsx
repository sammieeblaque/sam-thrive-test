import { Link } from "react-router-dom";

const UserInfo = ({ user }: any): JSX.Element => {
  const { avatar_url, login, location, type } = user;
  return (
    <>
      <section className="bg-base-100 w-1/4 rounded-md shadow-xl px-3 py-8 flex justify-around items-center">
        <section className="w-1/5">
          <img src={avatar_url} alt={login} className="rounded-xl" />
        </section>
        <section>
          <h3 className="font-semibold">{login}</h3>
          <h4>{location}</h4>
          <h4 className="font-semibold p-2">{type}</h4>
          <Link to={`/${login}`}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded-lg pt-1">
              View Profile
            </button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default UserInfo;
