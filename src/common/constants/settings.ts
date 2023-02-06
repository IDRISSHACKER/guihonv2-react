let APP_ENV="dev"

const API_URL = APP_ENV === "dev" ? "http://localhost:8000" :  "https://catalogue.guihon.cm"

const env = {
    API_URL
}

export default env
