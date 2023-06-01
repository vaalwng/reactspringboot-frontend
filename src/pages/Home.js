import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [animes, setAnimes] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadAnimeCatalog();
    }, []);

    const loadAnimeCatalog = async () => {
        const results = await axios.get(
            "http://localhost:8080/api/anime/catalog"
        );
        setAnimes(results.data);
    };

    const deleteAnimeEntry = async (id) => {
        await axios.delete(`http://localhost:8080/api/anime/${id}`);
        loadAnimeCatalog();
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Score</th>
                            <th scope="col">Episode Count</th>
                            <th scope="col">Release Year</th>
                            <th scope="col">Studio</th>
                            <th scope="col">Simulcast</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animes.map((anime, index) => (
                            <tr>
                                <th scope="row" key={index}>
                                    {index + 1}
                                </th>
                                <td>{anime.title}</td>
                                <td>{anime.score.toFixed(1)}</td>
                                <td>{anime.episodeCount}</td>
                                <td>{anime.releaseYear}</td>
                                <td>{anime.studio}</td>
                                <td>{anime.isSimulcast.toString()}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/viewanime/${anime.id}`}
                                    >
                                        details
                                    </Link>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/editanime/${anime.id}`}
                                    >
                                        edit
                                    </Link>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        onClick={() => deleteAnimeEntry(anime.id)}
                                    >
                                        remove
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
