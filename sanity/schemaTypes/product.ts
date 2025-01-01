import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: "price",
      title: "Current Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price",
      type: "number",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const newPrice = (context.document as { price?: number })?.price;
          if (value && newPrice && value <= newPrice) {
            return "Old price must be greater than the current price.";
          }
          return true;
        }),
    }),
    defineField({
      name: "isDiscounted",
      title: "Is Discounted?",
      type: "boolean",
      readOnly: true,
      initialValue: false,
      hidden: true,
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(10), // Limit gallery to 10 images
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "sku",
      title: "SKU",
      type: "string",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
    }),
    defineField({
      name: "isNew",
      title: "Is New?",
      type: "boolean",
      readOnly: true,
      initialValue: true, // Assume products are new by default
      hidden: true, // Hide this field from manual edits
    }),
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      oldPrice: "oldPrice",
      media: "featuredImage",
    },
    prepare(selection: { title: string; price: number; oldPrice?: number }) {
      const { title, price, oldPrice } = selection;
      const isDiscounted = Boolean(oldPrice);
      return {
        ...selection,
        title,
        subtitle: isDiscounted
          ? `On Sale! New: $${price} (Was: $${oldPrice})`
          : `Price: $${price}`,
      };
    },
  },
});
