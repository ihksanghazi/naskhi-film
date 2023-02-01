import Authenticated from "@/Layouts/Authenticated/Index";
import SubcriptionCard from "@/Components/SubcriptionCard";

export default function SubcriptionPlan() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Pricing Card  */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic  */}
                    <SubcriptionCard
                        name="Basic"
                        price={299000}
                        durationMonth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                    {/*  For Greatest  */}
                    <SubcriptionCard
                        isPremium
                        name="Greatest"
                        price={800000}
                        durationMonth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
}
