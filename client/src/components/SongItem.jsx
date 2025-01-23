import PropTypes from "prop-types";

const SongItem = ({ name, image, desc, id }) => {
  return (
    <div className=" min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className=" font-bold mt-2 mb-1">{name}</p>
      <p className=" text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

SongItem.propTypes = {
  name: PropTypes.string.isRequired, // Song name must be a string and required
  image: PropTypes.string.isRequired, // Image URL must be a string and required
  desc: PropTypes.string, // Description is optional but must be a string
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID can be a string or a number and is required
};

export default SongItem;
