export async function getAllRecipes() {
    try{
        const res = await fetch("/api/recipes")
        if (!res.ok) {
            throw new Error ({
                message: "Failed to fetch images",
                statusText: res.statusText,
                status: res.status
            })
        }
        console.log(res)
        const data = await res.json()
        return data.recipes
    } catch (error) {
        console.log(error)
    } 
}