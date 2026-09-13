import type { Technology } from "../components/types/technology";

interface YourStackProps {
    selectedStack: Technology[];
    onRemove: (technologyId: string) => void;
    onRemoveAll: () => void;

}

const YourStack = ({
    selectedStack,
    onRemove,
    onRemoveAll,


}: YourStackProps) => {
    return (
        <aside className="card border border-base-300 bg-base-100 shadow-sm lg:sticky lg:top-24">
            <div className="card-body p-5">
                <h3 className="card-title"> Your Stack </h3>
                <p className="text-xs text-base-content/60">
                    {selectedStack.length}{" "}
                    {selectedStack.length === 1 ? "Technology" : "Technologies"}{" "}
                    selected
                </p>

                {/* Empty or selected item */}
                {selectedStack.length === 0 ? (
                    <div className="mt-3 rounded-box border border-dashed border-base-300 p-8 text-center">
                        <p className="text-sm text-base-content/60 ">
                            Your stack is empty
                        </p>


                        <p className="mt-01 text-xs text-base-content/40 ">
                        Add technologies to build you stck.

                        </p>
                        </div>
                ) : (
                    <>
                    <div className="mt-3 space-y-3 ">
                        {selectedStack.map((technology) => (
                            <div key={technology.id} className="flex items-center gap-3 rounded-box border border-base-300 p-3">

                                <img src={technology.icon}
                                alt={`${technology.name} icon`}
                                className="size-8 object-contain"/>

                                <div className=" min-w-0 flex-1 ">
                                    <h4 className="truncate text-sm font-semibold ">
                                        {technology.name}
                                    </h4>
                                    <p className="turncate text-xs text-base-content/60">
                                    {technology.category}

                                    </p>

                                </div>

                                <button type="button"
                                onClick={() => onRemove(technology.id)}
                                className="btn btn-circle btn-ghost btn-xs text-error"
                                aria-label={`Remove ${technology.name}`}>
                                    X
                                </button>
                                </div>



                        ))}

                    </div>
                    <button type ="button"
                    onClick={onRemoveAll }
                    className="btn btn-outline btn-error btn-sm mt-4">
                        Remove All
                    </button>

                    </>
                )}




                    </div>
        </aside>
    )
}

export default YourStack;