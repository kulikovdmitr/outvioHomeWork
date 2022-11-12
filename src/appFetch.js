const BASE_URL = "http://localhost:3001"; // process.env.API_URL;

const buildUrl = (url) => {
  return `${BASE_URL}${url}`;
};

const buildHeaders = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return new Headers(headers);
};

async function appFetch(url, method = "GET", data = null) {
  try {
    const headers = buildHeaders();

    const finalUrl = buildUrl(url);

    const response = await fetch(finalUrl, {
      method: method,
      headers,
      body: method !== "GET" ? JSON.stringify(data) : null,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (err) {
    throw new Error("Oops, an error happened.");
  }
}

export default appFetch;
