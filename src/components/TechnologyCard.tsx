import type {Technology} from "../components/types/technology";

interface TechnologyCardProps {
    technology:Technology;
    isAdded:boolean;
    onAdd:(technology:Technology) => void;

}

const TechnologyCard = ({
    technology,
    isAdded,
    onAdd,

}:TechnologyCardProps) =>{
    return (
        <article className = "card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="card-body p-5">

                {/* icon & badge */}
                <div className="flex item-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-base p-2">
                        <img src={technology.icon} alt={'${technology.name} icon'} className="size-full object-contain"/>

                    </div>
                    <span className="badge badge-secondary badge-soft">
                        {technology.badge}
                    </span>
                </div>

                {/* {Technology information?} */}
                <h3 className=" card-title mt-3 text-lg">
                    {technology.name}

                </h3>
                <p className="grow text-sm leading-6 text-base-contant/60">
                {technology.description}
                </p>

                {/* {catagory & difficualy} */}
                <div className="mt-3 flex flex-wrap gap-2"><span className=" badge badge-info badge-soft">
                    {technology.difficulty}
                </span>

                </div>

                {/* Rating */}
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-base-content/60">Rating</span>
                    <span className=" font-semibold">
                        <span className="text-warning">★</span>{" "}
                        {technology.rating}
                    </span>

                </div>

                {/* Add Button */}
                <div className="card-actions mt-3">
                    <button type = "button" disabled={isAdded} onClick={() => onAdd(technology)}
                        className="btn btn-neutral btn-block">
                        {isAdded?"✓ Added to Stack": "Add to Stack"}
                        </button>
                </div>

            </div>
        </article>
    );
};

export default TechnologyCard;