import type { Technology } from "./types/technology";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // JSON data load
    useEffect(() => {
        const loadTechnologies = async() => {
            try{
                setLoading(true);
                setError("");

                const response = await fetch("/technologies.json");
                if(!response.ok){
        throw new Error("Failed to load Technologies");

    }
    const data: Technology[] = await response.json();



    setTechnologies(data);

}catch (error: unknown) {
    if (error instanceof Error) {
        setError(error.message);

    } else {
        setError("Something Wrong");

    }
} finally {
    setLoading(false);

}
        };

loadTechnologies();
    }, []);
// Add technology
const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedStack.some(
        (item) => item.id === technology.id
    );

    if (alreadyAdded) {
        toast.warning(`${technology.name} is already added`);
        return;
    }
    setSelectedStack((previousStack) => [
        ...previousStack,
        technology,
    ]);
    toast.success(`${technology.name} added successfully`);
};

// remove single technology
const handleRemove = (technologyId: string) => {
    const technology = selectedStack.find(
        (item) => item.id === technologyId
    );
    setSelectedStack((previousStack) =>
        previousStack.filter(
            (item) => item.id !== technologyId
        )
    );
    if (technology) {
        toast.info(`${technology.name} removed`);
    }
};
// remove all technology
const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
        toast.warning("Your Stack is allready empty ");
        return;
    }
    setSelectedStack([]);
    toast.info("All technologies removed");
};
return (
    <section
        id="technologies"
        className="bg-base-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

                {/* section heading */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-base-content ">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to violet-600 bg-clip-text text-transparent">
                        Technologies

                    </span>


                </h2>

                <p className="mt-3 text-base-content/60">
                    Pick from our technology to build your ideal development stack
                </p>

            </div>
                {/* Loading state */}
            {loading && (
                <div className="flex min-h-64 items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-secondary" />

                </div>
            )
            }

            {/* /*Error state */ }
            {!loading && error && (
                <div role="alert" className="alert alert-error">
                <span>{error}</span>
                </div>

                )}

                {/* Technology contant */}
                {!loading && !error && (
                    <div className="grid item-start gap-8 lg:grid-cols-[1fr_280px]">

                        {/* Technology card grid */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {technologies.map((technology) => {
                                const isAdded = selectedStack.some(
                                    (item) => item.id === technology.id 
                                );

                                return (
                                    <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    isAdded={isAdded}
                                    onAdd={handleAddToStack} />

                                );
                            })}

                        </div>
                        {/* selected stack */}
                        <YourStack
                        selectedStack={selectedStack}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                        />
                        </div>
                )}

        </div>
    </section>
);
};
export default Technologies;