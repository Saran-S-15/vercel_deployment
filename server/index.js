const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { UserModel } = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Grow_Green");

app.post("/userCredentials", async function (req, res) {
    try {
        const user = await UserModel(req.body)
        user.save()
    } catch (error) {
        console.error("Something went Wrong", error);
        res.status(500).json({ message: "Something went Wrong" });
    }
})

app.get("/userData", async function (req, res) {
    try {
        const user = await UserModel.find({})
        res.json(user);
    } catch (error) {
        console.error("Something went Wrong", error);
        res.status(500).json({ message: "Something went Wrong" });
    }
})

app.use("/",(req,res) => {
    res.send("Server is running")
});

app.listen(4000, () => {
    console.log("Server is Running Successfully");
})