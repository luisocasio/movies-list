const useFetchData = async (searchMovie) => {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${searchMovie}&apikey=17279a41`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default useFetchData;
