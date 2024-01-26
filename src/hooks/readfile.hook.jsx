
const useFileReader = () => {

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  const readFile = async (file, ext) => {
    const textData = await readFileAsync(file);
    return JSON.parse(textData);
  }


  return {
    readFile
  }
}

export default useFileReader;