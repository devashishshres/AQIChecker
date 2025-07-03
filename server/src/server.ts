import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios"

const app: Express = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/api/search", async (req: Request, res: Response) => {
    const token = process.env.API_KEY;
    const keyword = req.query.keyword;

    if (!keyword) {
        res.status(400).json({ error: "Missing keyword city parameter." });
        return; // Return without response object 
    }

    try {
        const result = await axios.get("https://api.waqi.info/search/", {params:{token, keyword}});

        const cleanedData = result.data.data.map((items: any) => ({
            name: items.station.name,   // City location
            aqi: items.aqi              // City AQI score
        }))
        res.json({
            status: result.data.status,
            data: cleanedData[0]
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch API data!" });
    }


});


app.listen(port, () => {console.log("Server running on port ", port)  });