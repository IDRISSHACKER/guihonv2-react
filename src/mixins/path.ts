import env from "../common/constants/settings";

const resolveImg = (path:string) => `${env.API_URL}/storage/${path}`

export default resolveImg
