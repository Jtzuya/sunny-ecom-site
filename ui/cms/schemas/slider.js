export default {
    name: 'slider',
    title: 'Slider',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'subheading',
            title: 'Sub Heading',
            type: 'string'
        },
        {
            name: 'featureHeading',
            title: 'Feature Heading',
            type: 'string'
        },
        {
            name: 'cartText',
            title: 'Cart Text',
            type: 'string'
        },
        {
            name: 'videoText',
            title: 'Video Text',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Feature Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number'
        },
        {
            name: 'variant',
            title: 'Product Variant',
            type: 'string',
        },
        {
            name: 'rating',
            title: 'Product Rating',
            type: 'number'
        }
    ]
}