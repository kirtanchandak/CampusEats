import mongoose from "mongoose";
import { CollegeModel } from "../models/collegeSchema.js";

// Connect to MongoDB
mongoose
  .connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Create an array of product objects
    const productsData = [
      {
        name: "BITS Pliani",
        slug: "bits-pilani",
        shops: [
          {
            name: "The Dining Hall",
            description:
              "A spacious restaurant serving a variety of delicious meals for students and faculty.",
            image: "",
          },
          {
            name: "FreshMart",
            description:
              "A convenient grocery shop offering a wide range of food and household items.",
            image: "",
          },
          {
            name: "Brew & Bites",
            description:
              "A cozy cafe known for its aromatic coffee and tasty snacks.",
            image: "",
          },
          {
            name: "Flavor Junction",
            description:
              "A popular spot for diverse meal options, including international cuisines and healthy choices.",
            image: "",
          },
        ],
      },
      {
        name: "LMNIIT Jaipur",
        slug: "lmniit-jaipur",
        shops: [
          {
            name: "Savory Delights",
            description:
              "A restaurant specializing in gourmet dishes prepared with locally sourced ingredients.",
            image: "",
          },
          {
            name: "Market Fresh",
            description:
              "A well-stocked grocery shop offering organic produce, pantry essentials, and more.",
            image: "",
          },
          {
            name: "The Beanery",
            description:
              "A trendy cafe serving freshly brewed coffee, sandwiches, and pastries.",
            image: "",
          },
          {
            name: "Tasty Tidbits",
            description:
              "A vibrant eatery with a diverse menu, including fusion cuisine and daily specials.",
            image: "",
          },
        ],
      },
      {
        name: "VIT Vellore",
        slug: "vit-vellore",
        shops: [
          {
            name: "The Hungry Owl",
            description:
              "A popular restaurant offering a wide range of cuisines, from traditional to international dishes.",
            image: "",
          },
          {
            name: "Green Grocers",
            description:
              "A grocery shop providing fresh and organic produce, along with specialty items.",
            image: "",
          },
          {
            name: "Café Mosaic",
            description:
              "A charming cafe known for its artisanal coffee, pastries, and cozy atmosphere.",
            image: "",
          },
          {
            name: "Flavorsome Fare",
            description:
              "A delightful meal house serving hearty and flavorsome meals to satisfy any craving.",
            image: "",
          },
        ],
      },
      {
        name: "LPU Punjab",
        slug: "lpu-punjab",
        shops: [
          {
            name: "The Campus Grill",
            description:
              "A grill-style restaurant offering delicious burgers, sandwiches, and comfort food.",
            image: "",
          },
          {
            name: "Convenience Corner",
            description:
              "A convenient grocery shop providing a variety of essentials, snacks, and beverages.",
            image: "",
          },
          {
            name: "Café Latte",
            description:
              "A cozy cafe specializing in handcrafted coffee, teas, and freshly baked goods.",
            image: "",
          },
          {
            name: "Savor Junction",
            description:
              "A meal house with a focus on satisfying meals made from locally sourced ingredients.",
            image: "",
          },
        ],
      },
    ];

    // Insert the products data into the database
    CollegeModel.insertMany(productsData)
      .then(() => {
        console.log("Data inserted successfully");
        mongoose.connection.close(); // Close the MongoDB connection
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
        mongoose.connection.close(); // Close the MongoDB connection
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
