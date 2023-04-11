import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: 'jdoMgFwhypn0c3Rytvx3HI1mzkhItgWH3eIwVWfeQ_M'
})

export async function getUrlPhoto(photoId: string) {
    const result = await unsplashApi.photos.get(
        { photoId },
    )
    if (result.type === 'success') {
        const photo = result.response
        return photo.urls.regular
    }
    throw new Error()
}
