import { createServer, Model } from "miragejs"

createServer({
    models: {
        recipe: Model,
    },

    seeds(server) {
        server.create("recipe", { id: "1", name: "biscuits", price: 60, imageUrl: "biscuits.jpeg" })
        server.create("recipe", { id: "2", name: "bulgogi", price: 80, imageUrl: "bulgogi.jpeg" })
        server.create("recipe", { id: "3", name: "calamari", price: 100, imageUrl: "calamari.jpeg" })
        server.create("recipe", { id: "4", name: "ceviche", price: 65, imageUrl: "ceviche.jpeg" })
        server.create("recipe", { id: "5", name: "cheeseburger", price: 120, imageUrl: "cheeseburger.jpeg" })
        server.create("recipe", { id: "6", name: "churrasco", price: 70, imageUrl: "churrasco.jpeg" })
        server.create("recipe", { id: "7", name: "dumplings", price: 70, imageUrl: "dumplings.jpeg" })
        server.create("recipe", { id: "8", name: "fishnchips", price: 70, imageUrl: "fishnchips.jpeg" })
        server.create("recipe", { id: "9", name: "hummus", price: 70, imageUrl: "hummus.jpeg" })
        server.create("recipe", { id: "10", name: "masaladosa", price: 70, imageUrl: "masaladosa.jpeg" })
        server.create("recipe", { id: "11", name: "padthai", price: 70, imageUrl: "padthai.jpeg" })
        server.create("recipe", { id: "12", name: "pho", price: 70, imageUrl: "pho.jpeg" })
        server.create("recipe", { id: "13", name: "pizza", price: 70, imageUrl: "pizza.jpeg" })
        server.create("recipe", { id: "14", name: "poutine", price: 70, imageUrl: "poutine.jpeg" })
        server.create("recipe", { id: "15", name: "ramen", price: 70, imageUrl: "ramen.jpeg" })
        server.create("recipe", { id: "16", name: "somtam", price: 70, imageUrl: "somtam.jpeg" })
        server.create("recipe", { id: "17", name: "spaghetti", price: 70, imageUrl: "spaghetti.jpeg" })
        server.create("recipe", { id: "18", name: "sushi", price: 70, imageUrl: "sushi.jpeg" })
        server.create("recipe", { id: "19", name: "tacos", price: 70, imageUrl: "tacos.jpeg" })      
    },

    routes() {
        this.namespace = "api"

        this.get("/recipes", (schema) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.recipes.all()
        })

    }
})