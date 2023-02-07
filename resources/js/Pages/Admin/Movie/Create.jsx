import Authenticated from "@/Layouts/Authenticated/Index";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import { useForm, Head } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Admin - Create Movie</title>
            </Head>
            <h1 className="text-xl">Insert a New Movie</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of Movie"
                    isFocused={true}
                    isError={errors.name}
                    handleChange={onHandleChange}
                />
                <InputError message={errors.name} />

                <InputLabel
                    forInput="category"
                    value="Category"
                    className="mt-4"
                />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the Category of Movie"
                    isError={errors.category}
                    handleChange={onHandleChange}
                />
                <InputError message={errors.category} />

                <InputLabel
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <TextInput
                    type="url"
                    name="video_url"
                    // value={data.name}
                    variant="primary-outline"
                    placeholder="Enter the Video Url the of Movie"
                    isError={errors.video_url}
                    handleChange={onHandleChange}
                />
                <InputError message={errors.video_url} />

                <InputLabel
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    // value={data.name}
                    variant="primary-outline"
                    placeholder="Insert Thumbnail of The Movie"
                    isError={errors.thumbnail}
                    handleChange={onHandleChange}
                />
                <InputError message={errors.thumbnail} />

                <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <TextInput
                    type="number"
                    name="rating"
                    // value={data.name}
                    variant="primary-outline"
                    placeholder="Enter the Rating of Movie"
                    isError={errors.rating}
                    handleChange={onHandleChange}
                />
                <InputError message={errors.rating} />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
