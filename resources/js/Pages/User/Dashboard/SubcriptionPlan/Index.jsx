import Authenticated from "@/Layouts/Authenticated/Index";
import SubcriptionCard from "@/Components/SubcriptionCard";
import { router, Head } from "@inertiajs/react";

export default function SubcriptionPlan({ auth, subcriptionPlans, env }) {
    const selectSubcription = (id) => {
        // alert(id);
        router.post(
            route("user.dashboard.subcriptionPlan.userSubscribe", id),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            // Optional
            onSuccess: function (result) {
                router.visit(route("user.dashboard.index"));
            },
            // Optional
            onPending: function (result) {
                console.log(result);
            },
            // Optional
            onError: function (result) {
                console.log(result);
            },
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Subscription Plan</title>
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
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
                    {subcriptionPlans.map((subcriptionPlan) => (
                        <SubcriptionCard
                            key={subcriptionPlan.id}
                            name={subcriptionPlan.name}
                            price={subcriptionPlan.price}
                            durationMonth={
                                subcriptionPlan.active_period_in_months
                            }
                            features={JSON.parse(subcriptionPlan.features)}
                            isPremium={subcriptionPlan.name === "Premium"}
                            onSelectSubcription={() => {
                                selectSubcription(subcriptionPlan.id);
                            }}
                        />
                    ))}
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
}
