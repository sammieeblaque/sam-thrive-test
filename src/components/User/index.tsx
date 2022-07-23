import { Link } from "react-router-dom";

const UserInfo = ({ user }: any): JSX.Element => {
  const { avatar_url, login, location } = user;
  return (
    <>
      <section className="bg-base-100 w-1/4 rounded-md shadow-xl px-3 py-8 flex justify-around items-center">
        <section className="w-1/5">
          <img src={avatar_url} alt={login} className="rounded-xl" />
        </section>
        <section>
          <h3>{login}</h3>
          <h4>{location}</h4>

          <Link to={`/${login}`}>view profile</Link>
        </section>
      </section>
    </>
  );
};

export default UserInfo;
