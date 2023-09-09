import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization:
          "Client-ID b9f1024a156fa82fbc1ebadc14bbebddfb6f98afee7d4d1aab2db8bdfb7809f8"
      }
});
 