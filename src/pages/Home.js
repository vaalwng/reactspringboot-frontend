import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        loadAnimes();
    }, []);

    const loadAnimes = async () => {
        const results = await axios.get(
            "http://localhost:8080/api/anime/getall-anime"
        );
        setAnimes(results.data);
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Episode Count</th>
                            <th scope="col">Year of Release</th>
                            <th scope="col">Studio</th>
                            <th scope="col">Airing</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animes.map((anime, index) => (
                            <tr>
                                <th scope="row" key={index}>
                                    {index + 1}
                                </th>
                                <td>{anime.title}</td>
                                <td>{anime.episodeCount}</td>
                                <td>{anime.yearOfRelease}</td>
                                <td>{anime.studio}</td>
                                <td>{anime.isCurrentlyAiring.toString()}</td>
                                <td>{anime.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
