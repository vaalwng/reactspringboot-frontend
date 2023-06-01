import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAnime() {
    let navigate = useNavigate();

    const { id } = useParams();

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
        setAnime({ ...anime, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadAnime();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/anime/${id}`, anime);
        navigate("/");
    };

    const onCheckChange = (e) => {
        setAnime({ ...anime, [e.target.name]: e.target.checked });
    };

    const loadAnime = async () => {
        const result = await axios.get(`http://localhost:8080/api/anime/${id}`);
        setAnime(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Anime</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <input
                                id="title"
                                type={"text"}
                                className="form-control"
                                placeholder="enter title"
                                name="title"
                                value={title}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="score" className="form-label">
                                Score
                            </label>
                            <input
                                id="score"
                                type={"number"}
                                className="form-control"
                                name="score"
                                value={score}
                                step="0.1"
                                min="0.0"
                                max="10.0"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="episodeCount"
                                className="form-label"
                            >
                                Episode Count
                            </label>
                            <input
                                id="episodeCount"
                                type={"number"}
                                className="form-control"
                                name="episodeCount"
                                value={episodeCount}
                                step="1"
                                min="0"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="releaseYear" className="form-label">
                                Release Year
                            </label>
                            <input
                                id="releaseYear"
                                type={"number"}
                                className="form-control"
                                name="releaseYear"
                                value={releaseYear}
                                step="1"
                                min="0"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="studio" className="form-label">
                                Studio
                            </label>
                            <input
                                id="studio"
                                type={"text"}
                                className="form-control"
                                placeholder="enter studio"
                                name="studio"
                                value={studio}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="simulcast"
                                className="form-check-label container"
                            >
                                Simulcast
                            </label>
                            <input
                                id="simulcast"
                                type="checkbox"
                                className="form-check-input"
                                name="isSimulcast"
                                checked={isSimulcast}
                                value={isSimulcast}
                                onChange={(e) => onCheckChange(e)}
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
