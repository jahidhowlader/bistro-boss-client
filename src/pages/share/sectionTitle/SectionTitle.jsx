
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="">
            <div className="text-center mx-auto mt-4 mb-12 w-3/12">
                <p className="text-sub-title pb-5">---{subHeading}---</p>
                <h3 className="text-4xl border-y-2 border-black border-opacity-20 py-3">{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;