const SectionTitle = ({ header, subHeader }) => {
  return (
    <>
      <p className="text-lg font-normal mt-2 text-center">{subHeader}</p>

      <div className="divider divider-start divider-secondary">
        <h1 className="text-xl md:text-2xl text-primaryColor font-bold uppercase mt-2">
          {header}
        </h1>
      </div>
    </>
  );
};

export default SectionTitle;
