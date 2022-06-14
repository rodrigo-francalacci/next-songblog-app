import { type } from "os";
import { object } from "prop-types";

export default{
    name: "landpage",
    title: "Landpage",
    type: "document",
    fields:[
        {
            name:"home",
            title:"Home",
            type: "object",
            fields: [
                {
                    name: "buttonText",
                    title: "Button Text",
                    type: "string"
                },
                {
                    name: "buttonLink",
                    title: "Button Link",
                    type: "string"
                },
                {
                    name: "bkgImg",
                    title: "Background Image",
                    type: "image",
                    options: {
                        hotspot: true
                    }
                },
            ]
        },
        {
            name:"emphasisSection",
            title: "Campaign Section",
            type: "object",
            fields: [
                {
                    name:"navName",
                    title:"Name on Navbar",
                    type: "string"
                },
                {
                    name:"sectionTitle",
                    title: "Section Title",
                    type: "string"
                },
                {
                    name: "buttonText",
                    title: "Button Text",
                    type: "string"
                },
                {
                    name: "buttonLink",
                    title: "Button Link",
                    type: "string"
                },
                {
                    name: "image",
                    title: "Campaign Section Image",
                    type: "image",
                    options: {
                        hotspot: true
                    }
                },
                {
                    name: 'description',
                    title: 'Campaign Section Description',
                    type: 'blockContent'
                },
            ]

        },
        {
            name: "worksSection",
            title: "Works",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "works"}],
                },
            ]
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'blockContent'
        },
        {
            name: 'bioBkg',
            title: 'Bio Background Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'blogDescription',
            title: 'Blog Description',
            type: 'string'
        },
        {
            name: 'socialMedia',
            title: 'Social Media',
            type: "array",
            of:[
                {
                    type: "object",
                    fields:[
                        {
                            name: 'mediaName',
                            title: "Media Name",
                            type: "string"
                        },
                        {
                            name: "mediaLink",
                            title: "Media Link",
                            type: "string"
                        }
                    ]
                }
               
            ]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },

    

    ]
}