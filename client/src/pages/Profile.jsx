import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col">
        <img
          className="rounded-full self-center h-24 w-24 object-cover cursor-pointer mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          className="'border p-3 rounded-lg "
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="'border p-3 rounded-lg "
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="'border p-3 rounded-lg "
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 ">
          update
        </button>
      </form>
      <div className=" flex justify-between mt-5 ">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
