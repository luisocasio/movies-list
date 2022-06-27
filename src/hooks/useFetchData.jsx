const useFetchData = async (searchMovie) => {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${searchMovie}&${import.meta.env.VITE_APIKEY}`
    );
    let data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default useFetchData;
