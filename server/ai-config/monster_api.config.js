import axios from "axios";

const ImageGenerationModel = async (prompt) => {
  const options = {
    method: "POST",
    url: "https://api.monsterapi.ai/v1/generate/txt2img",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjFkYzI4MTk2Nzg1Y2IzZDZmMDQ2ZTEzZWNmMDI5OWQ1IiwiY3JlYXRlZF9hdCI6IjIwMjUtMDEtMTJUMjA6NTU6NDIuODU3NjY2In0.n_ciMnZiPg_P2VKX3laDh2w4GNaPTAR7DwWZOzliT9Y",
    },
    data: {
      aspect_ratio: "square",
      guidance_scale: 7.5,
      negprompt: "deformed, bad anatomy, disfigured, poorly drawn face",
      prompt: prompt,
      safe_filter: true,
      samples: 1,
      seed: 2414,
      steps: 15,
      style: "anime",
    },
  };

  try {
    const response = await axios.request(options);
    const process_id = response.data.process_id;
    return process_id;
  } catch (error) {
    console.log(error);
  }
};

const fetchImageUrl = async (process_id) => {
  const options = {
    method: "GET",
    url: `https://api.monsterapi.ai/v1/status/${process_id}`,
    headers: {
      accept: "application/json",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjFkYzI4MTk2Nzg1Y2IzZDZmMDQ2ZTEzZWNmMDI5OWQ1IiwiY3JlYXRlZF9hdCI6IjIwMjUtMDEtMTJUMjA6NTU6NDIuODU3NjY2In0.n_ciMnZiPg_P2VKX3laDh2w4GNaPTAR7DwWZOzliT9Y",
    },
  };
  try {
    const response = await axios.request(options);
    const imageUrl = response.data;
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
};

export { ImageGenerationModel, fetchImageUrl };
