import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: 'jdoMgFwhypn0c3Rytvx3HI1mzkhItgWH3eIwVWfeQ_M'
})

export async function getUrlPhoto() {
    return await unsplashApi.photos.get(
        { photoId: 'HlNcigvUi4Q' },
    ).then(result => {
        if (result.type === 'success') {
            const photo = result.response
            return photo.urls.regular
        }
    }).catch(Error)
}
