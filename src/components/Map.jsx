import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <hi>
        Position: {lat}, {lng}
      </hi>
      <button
        onClick={() => {
          setSearchParams({ lat: 50, lng: 30 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
