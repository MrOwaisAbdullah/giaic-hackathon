export const sellerSchema = {
    name: "seller",
    type: "document",
    title: "Seller",
    fields: [
      { name: "name", type: "string", title: "Name" },
      { name: "email", type: "string", title: "Email" },
      { name: "phone", type: "string", title: "Phone" },
      { name: "address", type: "text", title: "Address" },
      { name: "logo", type: "image", title: "Logo" },
      {
        name: "products",
        type: "array",
        of: [{ type: "reference", to: [{ type: "products" }] }],
        title: "Products",
        description: "List of products offered by this seller.",
      },
    ],
  };