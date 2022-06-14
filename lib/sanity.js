import {
createClient,
createPreviewSubscriptionHook,
// createPortableTextComponent
} from "next-sanity";




export const config = {
    projectId: "q8dj5r4a",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
};



export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// export const PortableText = createPortableTextComponent({
//     ...config,
//     serializers: {},
// })