import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewAnime() {
    const [anime, setAnime] = useState({
        title: "",
        score: "",
        episodeCount: "",
        releaseYear: "",
        studio: "",
        isSimulcast: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadAnimeEntry();
    }, []);

    const loadAnimeEntry = async () => {
        const result = await axios.get(`http://localhost:8080/api/anime/${id}`);
        setAnime(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Anime Details</h2>
                    <div className="card">
                        <div className="card-header">
                            <div className="fw-bolder font-monospace">
                                Anime ID : {anime.id}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Title: </b>
                                    {anime.title}
                                </li>
                                <li className="list-group-item">
                                    <b>Score: </b>
                                    {anime.score}
                                </li>
                                <li className="list-group-item">
                                    <b>Episode Count: </b>
                                    {anime.episodeCount}
                                </li>
                                <li className="list-group-item">
                                    <b>Release Year: </b>
                                    {anime.releaseYear}
                                </li>
                                <li className="list-group-item">
                                    <b>Studio: </b>
                                    {anime.studio}
                                </li>
                                <li className="list-group-item">
                                    <b>Simulcast: </b>
                                    {anime.isSimulcast.toString()}
                                </li>
                            </ul>
                        </div>
                        <div className="border">
                            <header className="fw-bold">Summary</header>
                            <textarea disabled className="border-0 container">Lorem impsum</textarea>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
