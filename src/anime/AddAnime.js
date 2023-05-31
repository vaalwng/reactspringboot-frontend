import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddAnime() {
    let navigate = useNavigate();

    const [anime, setAnime] = useState({
        title: "",
        score: 0.0,
        episodeCount: 0,
        releaseYear: 0,
        studio: "",
        isSimulcast: false,
    });

    const { title, score, episodeCount, releaseYear, studio, isSimulcast } =
        anime;

    const onInputChange = (e) => {
        setAnime({ ...anime, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/anime/create", anime);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Anime</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Title" className="form-label">
                                Title
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="enter title"
                                name="title"
                                value={title}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Score" className="form-label">
                                Score
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="enter score"
                                name="score"
                                value={score}
                                step="0.1"
                                min = "0.0"
                                max = "10.0"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
