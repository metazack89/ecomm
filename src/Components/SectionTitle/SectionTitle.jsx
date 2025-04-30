const SectionTitle = ({ title, mb, textAlign }) => {
  const margin = mb || "mb-0";
  return (
    <div
      className={`w-full flex items-center  ${
        textAlign === "center" ? `justify-${textAlign}` : "justify-start"
      }`}
    >
      <h3
        className={`text-3xl text-purple-700 hover:text-purple-400 font-semibold font-inter capitalize ${margin}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
