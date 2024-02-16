export default function SearchResults({ results, addResult }) {

    return (
        <div className="results-list">
            {results.map((movie, id) => (
                <div key={id} className="search-result" onClick={() => addResult(movie)}>
                    {`${movie.title} (${movie.release_date.slice(0, 4)})`}
                </div>
            ))}
        </div>
      );
}